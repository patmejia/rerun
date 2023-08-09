// NOTE: This file was autogenerated by re_types_builder; DO NOT EDIT.

#![allow(trivial_numeric_casts)]
#![allow(unused_parens)]
#![allow(clippy::clone_on_copy)]
#![allow(clippy::iter_on_single_items)]
#![allow(clippy::map_flatten)]
#![allow(clippy::match_wildcard_for_single_variants)]
#![allow(clippy::needless_question_mark)]
#![allow(clippy::redundant_closure)]
#![allow(clippy::too_many_arguments)]
#![allow(clippy::too_many_lines)]
#![allow(clippy::unnecessary_cast)]

/// 3D rotation represented by a rotation around a given axis.
#[derive(Clone, Debug, Copy, PartialEq)]
pub struct RotationAxisAngle {
    /// Axis to rotate around.
    ///
    /// This is not required to be normalized.
    /// If normalization fails (typically because the vector is length zero), the rotation is silently
    /// ignored.
    pub axis: crate::datatypes::Vec3D,

    /// How much to rotate around the axis.
    pub angle: crate::datatypes::Angle,
}

impl<'a> From<RotationAxisAngle> for ::std::borrow::Cow<'a, RotationAxisAngle> {
    #[inline]
    fn from(value: RotationAxisAngle) -> Self {
        std::borrow::Cow::Owned(value)
    }
}

impl<'a> From<&'a RotationAxisAngle> for ::std::borrow::Cow<'a, RotationAxisAngle> {
    #[inline]
    fn from(value: &'a RotationAxisAngle) -> Self {
        std::borrow::Cow::Borrowed(value)
    }
}

impl crate::Loggable for RotationAxisAngle {
    type Name = crate::DatatypeName;
    type Item<'a> = Option<Self>;
    type Iter<'a> = <Vec<Self::Item<'a>> as IntoIterator>::IntoIter;

    #[inline]
    fn name() -> Self::Name {
        "rerun.datatypes.RotationAxisAngle".into()
    }

    #[allow(unused_imports, clippy::wildcard_imports)]
    #[inline]
    fn to_arrow_datatype() -> arrow2::datatypes::DataType {
        use ::arrow2::datatypes::*;
        DataType::Struct(vec![
            Field {
                name: "axis".to_owned(),
                data_type: <crate::datatypes::Vec3D>::to_arrow_datatype(),
                is_nullable: false,
                metadata: [].into(),
            },
            Field {
                name: "angle".to_owned(),
                data_type: <crate::datatypes::Angle>::to_arrow_datatype(),
                is_nullable: false,
                metadata: [].into(),
            },
        ])
    }

    #[allow(unused_imports, clippy::wildcard_imports)]
    fn try_to_arrow_opt<'a>(
        data: impl IntoIterator<Item = Option<impl Into<::std::borrow::Cow<'a, Self>>>>,
        extension_wrapper: Option<&str>,
    ) -> crate::SerializationResult<Box<dyn ::arrow2::array::Array>>
    where
        Self: Clone + 'a,
    {
        use crate::{Loggable as _, ResultExt as _};
        use ::arrow2::{array::*, datatypes::*};
        Ok({
            let (somes, data): (Vec<_>, Vec<_>) = data
                .into_iter()
                .map(|datum| {
                    let datum: Option<::std::borrow::Cow<'a, Self>> = datum.map(Into::into);
                    (datum.is_some(), datum)
                })
                .unzip();
            let bitmap: Option<::arrow2::bitmap::Bitmap> = {
                let any_nones = somes.iter().any(|some| !*some);
                any_nones.then(|| somes.into())
            };
            StructArray::new(
                (if let Some(ext) = extension_wrapper {
                    DataType::Extension(
                        ext.to_owned(),
                        Box::new(<crate::datatypes::RotationAxisAngle>::to_arrow_datatype()),
                        None,
                    )
                } else {
                    <crate::datatypes::RotationAxisAngle>::to_arrow_datatype()
                })
                .to_logical_type()
                .clone(),
                vec![
                    {
                        let (somes, axis): (Vec<_>, Vec<_>) = data
                            .iter()
                            .map(|datum| {
                                let datum = datum.as_ref().map(|datum| {
                                    let Self { axis, .. } = &**datum;
                                    axis.clone()
                                });
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let axis_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        {
                            use arrow2::{buffer::Buffer, offset::OffsetsBuffer};
                            let axis_inner_data: Vec<_> = axis
                                .iter()
                                .map(|datum| {
                                    datum
                                        .map(|datum| {
                                            let crate::datatypes::Vec3D(data0) = datum;
                                            data0
                                        })
                                        .unwrap_or_default()
                                })
                                .flatten()
                                .map(Some)
                                .collect();
                            let axis_inner_bitmap: Option<::arrow2::bitmap::Bitmap> = None;
                            FixedSizeListArray::new(
                                {
                                    _ = extension_wrapper;
                                    DataType::FixedSizeList(
                                        Box::new(Field {
                                            name: "item".to_owned(),
                                            data_type: DataType::Float32,
                                            is_nullable: false,
                                            metadata: [].into(),
                                        }),
                                        3usize,
                                    )
                                    .to_logical_type()
                                    .clone()
                                },
                                PrimitiveArray::new(
                                    {
                                        _ = extension_wrapper;
                                        DataType::Float32.to_logical_type().clone()
                                    },
                                    axis_inner_data
                                        .into_iter()
                                        .map(|v| v.unwrap_or_default())
                                        .collect(),
                                    axis_inner_bitmap,
                                )
                                .boxed(),
                                axis_bitmap,
                            )
                            .boxed()
                        }
                    },
                    {
                        let (somes, angle): (Vec<_>, Vec<_>) = data
                            .iter()
                            .map(|datum| {
                                let datum = datum.as_ref().map(|datum| {
                                    let Self { angle, .. } = &**datum;
                                    angle.clone()
                                });
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let angle_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        {
                            _ = angle_bitmap;
                            _ = extension_wrapper;
                            crate::datatypes::Angle::try_to_arrow_opt(angle, None::<&str>)?
                        }
                    },
                ],
                bitmap,
            )
            .boxed()
        })
    }

    #[allow(unused_imports, clippy::wildcard_imports)]
    fn try_from_arrow_opt(
        data: &dyn ::arrow2::array::Array,
    ) -> crate::DeserializationResult<Vec<Option<Self>>>
    where
        Self: Sized,
    {
        use crate::{Loggable as _, ResultExt as _};
        use ::arrow2::{array::*, datatypes::*};
        Ok({
            let data = data
                .as_any()
                .downcast_ref::<::arrow2::array::StructArray>()
                .ok_or_else(|| {
                    crate::DeserializationError::datatype_mismatch(
                        DataType::Struct(vec![
                            Field {
                                name: "axis".to_owned(),
                                data_type: <crate::datatypes::Vec3D>::to_arrow_datatype(),
                                is_nullable: false,
                                metadata: [].into(),
                            },
                            Field {
                                name: "angle".to_owned(),
                                data_type: <crate::datatypes::Angle>::to_arrow_datatype(),
                                is_nullable: false,
                                metadata: [].into(),
                            },
                        ]),
                        data.data_type().clone(),
                    )
                })
                .with_context("rerun.datatypes.RotationAxisAngle")?;
            if data.is_empty() {
                Vec::new()
            } else {
                let (data_fields, data_arrays) = (data.fields(), data.values());
                let arrays_by_name: ::std::collections::HashMap<_, _> = data_fields
                    .iter()
                    .map(|field| field.name.as_str())
                    .zip(data_arrays)
                    .collect();
                let axis = {
                    if !arrays_by_name.contains_key("axis") {
                        return Err(crate::DeserializationError::missing_struct_field(
                            DataType::Struct(vec![
                                Field {
                                    name: "axis".to_owned(),
                                    data_type: <crate::datatypes::Vec3D>::to_arrow_datatype(),
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "angle".to_owned(),
                                    data_type: <crate::datatypes::Angle>::to_arrow_datatype(),
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                            ]),
                            "axis",
                        ))
                        .with_context("rerun.datatypes.RotationAxisAngle");
                    }
                    let data = &**arrays_by_name["axis"];
                    {
                        let data = data
                            .as_any()
                            .downcast_ref::<::arrow2::array::FixedSizeListArray>()
                            .ok_or_else(|| {
                                crate::DeserializationError::datatype_mismatch(
                                    DataType::FixedSizeList(
                                        Box::new(Field {
                                            name: "item".to_owned(),
                                            data_type: DataType::Float32,
                                            is_nullable: false,
                                            metadata: [].into(),
                                        }),
                                        3usize,
                                    ),
                                    data.data_type().clone(),
                                )
                            })
                            .with_context("rerun.datatypes.RotationAxisAngle#axis")?;
                        if data.is_empty() {
                            Vec::new()
                        } else {
                            let offsets = (0..)
                                .step_by(3usize)
                                .zip((3usize..).step_by(3usize).take(data.len()));
                            let data_inner = {
                                let data_inner = &**data.values();
                                data_inner
                                    .as_any()
                                    .downcast_ref::<Float32Array>()
                                    .ok_or_else(|| {
                                        crate::DeserializationError::datatype_mismatch(
                                            DataType::Float32,
                                            data_inner.data_type().clone(),
                                        )
                                    })
                                    .with_context("rerun.datatypes.RotationAxisAngle#axis")?
                                    .into_iter()
                                    .map(|opt| opt.copied())
                                    .collect::<Vec<_>>()
                            };
                            arrow2::bitmap::utils::ZipValidity::new_with_validity(
                                offsets,
                                data.validity(),
                            )
                            .map(|elem| {
                                elem.map(|(start, end)| {
                                    debug_assert!(end - start == 3usize);
                                    if end as usize > data_inner.len() {
                                        return Err(crate::DeserializationError::offsets_mismatch(
                                            (start, end),
                                            data_inner.len(),
                                        ));
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    let data = unsafe {
                                        data_inner.get_unchecked(start as usize..end as usize)
                                    };
                                    let data = data.iter().cloned().map(Option::unwrap_or_default);
                                    let arr = array_init::from_iter(data).unwrap();
                                    Ok(arr)
                                })
                                .transpose()
                            })
                            .map(|res_or_opt| {
                                res_or_opt.map(|res_or_opt| {
                                    res_or_opt.map(|v| crate::datatypes::Vec3D(v))
                                })
                            })
                            .collect::<crate::DeserializationResult<Vec<Option<_>>>>()?
                        }
                        .into_iter()
                    }
                };
                let angle = {
                    if !arrays_by_name.contains_key("angle") {
                        return Err(crate::DeserializationError::missing_struct_field(
                            DataType::Struct(vec![
                                Field {
                                    name: "axis".to_owned(),
                                    data_type: <crate::datatypes::Vec3D>::to_arrow_datatype(),
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "angle".to_owned(),
                                    data_type: <crate::datatypes::Angle>::to_arrow_datatype(),
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                            ]),
                            "angle",
                        ))
                        .with_context("rerun.datatypes.RotationAxisAngle");
                    }
                    let data = &**arrays_by_name["angle"];
                    crate::datatypes::Angle::try_from_arrow_opt(data)
                        .with_context("rerun.datatypes.RotationAxisAngle#angle")?
                        .into_iter()
                };
                arrow2::bitmap::utils::ZipValidity::new_with_validity(
                    ::itertools::izip!(axis, angle),
                    data.validity(),
                )
                .map(|opt| {
                    opt.map(|(axis, angle)| {
                        Ok(Self {
                            axis: axis
                                .ok_or_else(crate::DeserializationError::missing_data)
                                .with_context("rerun.datatypes.RotationAxisAngle#axis")?,
                            angle: angle
                                .ok_or_else(crate::DeserializationError::missing_data)
                                .with_context("rerun.datatypes.RotationAxisAngle#angle")?,
                        })
                    })
                    .transpose()
                })
                .collect::<crate::DeserializationResult<Vec<_>>>()
                .with_context("rerun.datatypes.RotationAxisAngle")?
            }
        })
    }

    #[inline]
    fn try_iter_from_arrow(
        data: &dyn ::arrow2::array::Array,
    ) -> crate::DeserializationResult<Self::Iter<'_>>
    where
        Self: Sized,
    {
        Ok(Self::try_from_arrow_opt(data)?.into_iter())
    }

    #[inline]
    fn convert_item_to_self(item: Self::Item<'_>) -> Option<Self> {
        item
    }
}

impl crate::Datatype for RotationAxisAngle {}
