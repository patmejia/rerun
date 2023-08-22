use re_types::{components::AnnotationContext, Loggable};
use re_viewer_context::{
    AnnotationMap, ArchetypeDefinition, NamedViewSystem, ViewContextSystem, ViewSystemName,
};

#[derive(Default)]
pub struct AnnotationSceneContext(pub AnnotationMap);

impl NamedViewSystem for AnnotationSceneContext {
    fn name() -> ViewSystemName {
        "AnnotationSceneContext".into()
    }
}

impl ViewContextSystem for AnnotationSceneContext {
    fn archetypes(&self) -> Vec<ArchetypeDefinition> {
        vec![vec1::vec1![AnnotationContext::name()]]
    }

    fn execute(
        &mut self,
        ctx: &mut re_viewer_context::ViewerContext<'_>,
        query: &re_viewer_context::ViewQuery<'_>,
    ) {
        // We create a list of *all* entities here, do not only iterate over those with annotation context.
        // TODO(andreas): But knowing ahead of time where we have annotation contexts could be used for optimization.
        // TODO(andreas): This curiously seems to be the only place where we get a view query and are interested in _all_ entities.
        //                We know that this deals with duplicates entities just fine, so we just concat all per-system entities here.
        let entities = query
            .per_system_entities
            .values()
            .flat_map(|entities| entities.iter());
        self.0.load(ctx, &query.latest_at_query(), entities);
    }

    fn as_any(&self) -> &dyn std::any::Any {
        self
    }
}
