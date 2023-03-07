use itertools::Itertools as _;
use re_log_types::{
    external::arrow2_convert::deserialize::TryIntoCollection,
    msg_bundle::{wrap_in_listarray, ComponentBundle, MsgBundle},
    ComponentName, EntityPath, MsgId, TimePoint,
};

use crate::{DataStore, IndexBucket};

// ---

impl DataStore {
    /// Serializes the entire datastore into an iterator of `MsgBundle`s.
    ///
    /// Feeding those `MsgBundle`s back into a brand new `DataStore` is guaranteed to end up in
    /// the same exact state from a public API standpoint.
    ///
    /// Panics if no index is present for `id_key` or if it isn't fully dense (i.e.: no empty
    /// rows and no empty columns either!).
    pub fn as_msg_bundles(&self, id_key: ComponentName) -> impl Iterator<Item = MsgBundle> + '_ {
        // TODO(cmc): This is an obvious entrypoint for all kinds of compaction tasks.
        // TODO(cmc): This shouldn't dump cluster keys that were autogenerated.

        let timeless = self.dump_timeless_indices(id_key);
        let temporal = self.dump_temporal_indices(id_key);

        timeless.merge_by(temporal, |bundle1, bundle2| {
            bundle1.msg_id <= bundle2.msg_id
        })
    }

    /// Dumps the timeless indices & tables.
    ///
    /// Panics if no index is present for `id_key` or if it isn't fully dense (i.e.: no empty
    /// rows and no empty columns either!).
    fn dump_timeless_indices(&self, id_key: ComponentName) -> impl Iterator<Item = MsgBundle> + '_ {
        let msg_bundles = self.timeless_indices.values().map(|index| {
            let ent_path = index.ent_path.clone();
            let timepoint = TimePoint::timeless();

            // Gather all component indices, except for the internal `insert_id` one.
            let all_indices = index
                .indices
                .iter()
                // Definitely should _not_ dump insert IDs
                .filter(|(component, _)| **component != DataStore::insert_id_key())
                .collect_vec();

            // Find the index used to identify messages (i.e. `MsgId` in the case of Rerun).
            //
            // We currently need to fetch those to be able to create the final `MsgBundle`.
            // This is an artifact of the past and should go away as we implement batch support.
            //
            // Reminder: the store is not aware of message identification, this entirely up to
            // the application layer.
            //
            // It's up to the application layer to guarantee the presence of this index: this will
            // panic otherwise.
            let ids_index = &index.indices[&id_key];
            let ids =
                ids_index.iter().map(
                    move |row_idx| self.get(&[id_key], &[*row_idx])[0].clone(), /* shallow */
                );

            let mut all_tables = Vec::with_capacity(all_indices.len());
            for (component, index) in &all_indices {
                all_tables.push((
                    *component,
                    index.iter().map(
                        |row_idx| self.get(&[**component], &[*row_idx])[0].clone(), /* shallow */
                    ),
                ));
            }

            ids.map(move |msg_ids| {
                // It's up to the application layer to guarantee the row-density of this
                // index: this will panic otherwise.
                let msg_ids = msg_ids.unwrap();

                // Again, this is an artifact of the past: we need to deserialize the raw message
                // IDs in order to create actual `MsgBundle`s.
                // This'll go away with batching.
                //
                // NOTE: Reminder that we don't _really_ support splats, so a row with N instances
                // will actually have N message IDs.
                let msg_ids: Vec<MsgId> = TryIntoCollection::try_into_collection(msg_ids).unwrap();

                let components = all_tables
                    .iter_mut()
                    .filter_map(|(component, index)| {
                        index
                            .next()
                            .flatten()
                            .map(|data| (**component, wrap_in_listarray(data)))
                    })
                    .map(|(component, data)| ComponentBundle::new(component, data))
                    .collect_vec();

                MsgBundle {
                    // It's up to the application layer to guarantee the column-density of this
                    // index: this will panic otherwise.
                    msg_id: msg_ids[0],
                    entity_path: ent_path.clone(),
                    time_point: timepoint.clone(),
                    components,
                }
            })
        });

        msg_bundles.kmerge_by(|bundle1, bundle2| bundle1.msg_id <= bundle2.msg_id)
    }

    /// Dumps the temporal indices & tables.
    ///
    /// Panics if no index is present for `id_key` or if it isn't fully dense (i.e.: no empty
    /// rows and no empty columns either!).
    fn dump_temporal_indices(&self, id_key: ComponentName) -> impl Iterator<Item = MsgBundle> + '_ {
        let msg_bundles = self.indices.values().flat_map(|index| {
            index.buckets.values().map(move |bucket| {
                self.dump_temporal_bucket(id_key, bucket, index.ent_path.clone())
            })
        });

        msg_bundles.kmerge_by(|bundle1, bundle2| bundle1.msg_id <= bundle2.msg_id)
    }

    /// Dumps one specific temporal bucket.
    ///
    /// Panics if no index is present for `id_key` or if it isn't fully dense (i.e.: no empty
    /// rows and no empty columns either!).
    //
    // TODO(cmc): Shouldn't need to collect into a vec, but locks in the store are a mess rn.
    fn dump_temporal_bucket(
        &self,
        id_key: ComponentName,
        bucket: &IndexBucket,
        ent_path: EntityPath,
    ) -> Vec<MsgBundle> {
        let timeline = bucket.timeline;

        bucket.sort_indices_if_needed();

        let index = bucket.indices.read();

        // Gather all component indices, except for the internal `insert_id` one.
        let all_indices = index
            .indices
            .iter()
            // Definitely should _not_ dump insert IDs
            .filter(|(component, _)| **component != DataStore::insert_id_key())
            .collect_vec();

        // Find the index used to identify messages (i.e. `MsgId` in the case of Rerun).
        //
        // We currently need to fetch those to be able to create the final `MsgBundle`.
        // This is an artifact of the past and should go away as we implement batch support.
        //
        // Reminder: the store is not aware of message identification, this entirely up to
        // the application layer.
        //
        // It's up to the application layer to guarantee the presence of this index:
        // this will panic otherwise.
        let ids_index = &index.indices[&id_key];
        let ids = ids_index.iter().map(
            move |row_idx| self.get(&[id_key], &[*row_idx])[0].clone(), /* shallow */
        );

        let mut all_tables = Vec::with_capacity(all_indices.len());
        for (component, index) in &all_indices {
            all_tables.push((
                *component,
                index.iter().map(
                    |row_idx| self.get(&[**component], &[*row_idx])[0].clone(), /* shallow */
                ),
            ));
        }

        // NOTE: The store guarantees that all indices, including the primary, are always the same
        // length.
        index
            .times
            .iter()
            .zip(ids)
            .map(move |(time, msg_ids)| {
                // It's up to the application layer to guarantee the row-density of this
                // index: this will panic otherwise.
                let msg_ids = msg_ids.unwrap();

                // Again, this is an artifact of the past: we need to deserialize the raw
                // message IDs in order to create actual `MsgBundle`s.
                // This'll go away with batching.
                //
                // NOTE: Reminder that we don't _really_ support splats, so a row with N
                // instances will actually have N message IDs.
                let msg_ids: Vec<MsgId> = TryIntoCollection::try_into_collection(msg_ids).unwrap();

                // TODO(cmc): We should identify and merge back together messages spread across
                // multiple timelines.
                let timepoint = TimePoint::from([(timeline, (*time).into())]);

                let components = all_tables
                    .iter_mut()
                    .filter_map(|(component, index)| {
                        index
                            .next()
                            .flatten()
                            .map(|data| (**component, wrap_in_listarray(data)))
                    })
                    .map(|(component, data)| ComponentBundle::new(component, data))
                    .collect_vec();

                MsgBundle {
                    // It's up to the application layer to guarantee the column-density of this
                    // index: this will panic otherwise.
                    msg_id: msg_ids[0],
                    entity_path: ent_path.clone(),
                    time_point: timepoint,
                    components,
                }
            })
            .collect_vec()
    }
}
