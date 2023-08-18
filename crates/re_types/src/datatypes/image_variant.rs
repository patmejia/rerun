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

/// An enum indicating the type of `Image`
#[derive(Clone, Debug, Copy, Eq, PartialEq)]
pub enum ImageVariant {
    /// An MxN tensor, treated as a grayscale image.
    Mono(bool),

    /// An MxNx3 tensor, treated as an RGB image.
    Rgb(bool),

    /// An MxNx4 tensor, treated as an RGBA image.
    Rgba(bool),

    /// An MxN tensor where each element is a ClassID, to be used with an AnnotationContext.
    Segmentation(bool),

    /// An MxN tensor where each element represents a depth value.
    Depth(bool),
}

impl<'a> From<ImageVariant> for ::std::borrow::Cow<'a, ImageVariant> {
    #[inline]
    fn from(value: ImageVariant) -> Self {
        std::borrow::Cow::Owned(value)
    }
}

impl<'a> From<&'a ImageVariant> for ::std::borrow::Cow<'a, ImageVariant> {
    #[inline]
    fn from(value: &'a ImageVariant) -> Self {
        std::borrow::Cow::Borrowed(value)
    }
}

impl crate::Loggable for ImageVariant {
    type Name = crate::DatatypeName;
    type Item<'a> = Option<Self>;
    type Iter<'a> = <Vec<Self::Item<'a>> as IntoIterator>::IntoIter;

    #[inline]
    fn name() -> Self::Name {
        "rerun.datatypes.ImageVariant".into()
    }

    #[allow(unused_imports, clippy::wildcard_imports)]
    #[inline]
    fn to_arrow_datatype() -> arrow2::datatypes::DataType {
        use ::arrow2::datatypes::*;
        DataType::Union(
            vec![
                Field {
                    name: "_null_markers".to_owned(),
                    data_type: DataType::Null,
                    is_nullable: true,
                    metadata: [].into(),
                },
                Field {
                    name: "Mono".to_owned(),
                    data_type: DataType::Boolean,
                    is_nullable: false,
                    metadata: [].into(),
                },
                Field {
                    name: "Rgb".to_owned(),
                    data_type: DataType::Boolean,
                    is_nullable: false,
                    metadata: [].into(),
                },
                Field {
                    name: "Rgba".to_owned(),
                    data_type: DataType::Boolean,
                    is_nullable: false,
                    metadata: [].into(),
                },
                Field {
                    name: "Segmentation".to_owned(),
                    data_type: DataType::Boolean,
                    is_nullable: false,
                    metadata: [].into(),
                },
                Field {
                    name: "Depth".to_owned(),
                    data_type: DataType::Boolean,
                    is_nullable: false,
                    metadata: [].into(),
                },
            ],
            Some(vec![0i32, 1i32, 2i32, 3i32, 4i32, 5i32]),
            UnionMode::Dense,
        )
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
            let data: Vec<_> = data
                .into_iter()
                .map(|datum| {
                    let datum: Option<::std::borrow::Cow<'a, Self>> = datum.map(Into::into);
                    datum
                })
                .collect();
            UnionArray::new(
                (if let Some(ext) = extension_wrapper {
                    DataType::Extension(
                        ext.to_owned(),
                        Box::new(<crate::datatypes::ImageVariant>::to_arrow_datatype()),
                        None,
                    )
                } else {
                    <crate::datatypes::ImageVariant>::to_arrow_datatype()
                })
                .to_logical_type()
                .clone(),
                data.iter()
                    .map(|a| match a.as_deref() {
                        None => 0,
                        Some(ImageVariant::Mono(_)) => 1i8,
                        Some(ImageVariant::Rgb(_)) => 2i8,
                        Some(ImageVariant::Rgba(_)) => 3i8,
                        Some(ImageVariant::Segmentation(_)) => 4i8,
                        Some(ImageVariant::Depth(_)) => 5i8,
                    })
                    .collect(),
                vec![
                    NullArray::new(DataType::Null, data.iter().filter(|v| v.is_none()).count())
                        .boxed(),
                    {
                        let (somes, mono): (Vec<_>, Vec<_>) = data
                            .iter()
                            .filter(|datum| matches!(datum.as_deref(), Some(ImageVariant::Mono(_))))
                            .map(|datum| {
                                let datum = match datum.as_deref() {
                                    Some(ImageVariant::Mono(v)) => Some(v.clone()),
                                    _ => None,
                                };
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let mono_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        BooleanArray::new(
                            {
                                _ = extension_wrapper;
                                DataType::Boolean.to_logical_type().clone()
                            },
                            mono.into_iter().map(|v| v.unwrap_or_default()).collect(),
                            mono_bitmap,
                        )
                        .boxed()
                    },
                    {
                        let (somes, rgb): (Vec<_>, Vec<_>) = data
                            .iter()
                            .filter(|datum| matches!(datum.as_deref(), Some(ImageVariant::Rgb(_))))
                            .map(|datum| {
                                let datum = match datum.as_deref() {
                                    Some(ImageVariant::Rgb(v)) => Some(v.clone()),
                                    _ => None,
                                };
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let rgb_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        BooleanArray::new(
                            {
                                _ = extension_wrapper;
                                DataType::Boolean.to_logical_type().clone()
                            },
                            rgb.into_iter().map(|v| v.unwrap_or_default()).collect(),
                            rgb_bitmap,
                        )
                        .boxed()
                    },
                    {
                        let (somes, rgba): (Vec<_>, Vec<_>) = data
                            .iter()
                            .filter(|datum| matches!(datum.as_deref(), Some(ImageVariant::Rgba(_))))
                            .map(|datum| {
                                let datum = match datum.as_deref() {
                                    Some(ImageVariant::Rgba(v)) => Some(v.clone()),
                                    _ => None,
                                };
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let rgba_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        BooleanArray::new(
                            {
                                _ = extension_wrapper;
                                DataType::Boolean.to_logical_type().clone()
                            },
                            rgba.into_iter().map(|v| v.unwrap_or_default()).collect(),
                            rgba_bitmap,
                        )
                        .boxed()
                    },
                    {
                        let (somes, segmentation): (Vec<_>, Vec<_>) = data
                            .iter()
                            .filter(|datum| {
                                matches!(datum.as_deref(), Some(ImageVariant::Segmentation(_)))
                            })
                            .map(|datum| {
                                let datum = match datum.as_deref() {
                                    Some(ImageVariant::Segmentation(v)) => Some(v.clone()),
                                    _ => None,
                                };
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let segmentation_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        BooleanArray::new(
                            {
                                _ = extension_wrapper;
                                DataType::Boolean.to_logical_type().clone()
                            },
                            segmentation
                                .into_iter()
                                .map(|v| v.unwrap_or_default())
                                .collect(),
                            segmentation_bitmap,
                        )
                        .boxed()
                    },
                    {
                        let (somes, depth): (Vec<_>, Vec<_>) = data
                            .iter()
                            .filter(|datum| {
                                matches!(datum.as_deref(), Some(ImageVariant::Depth(_)))
                            })
                            .map(|datum| {
                                let datum = match datum.as_deref() {
                                    Some(ImageVariant::Depth(v)) => Some(v.clone()),
                                    _ => None,
                                };
                                (datum.is_some(), datum)
                            })
                            .unzip();
                        let depth_bitmap: Option<::arrow2::bitmap::Bitmap> = {
                            let any_nones = somes.iter().any(|some| !*some);
                            any_nones.then(|| somes.into())
                        };
                        BooleanArray::new(
                            {
                                _ = extension_wrapper;
                                DataType::Boolean.to_logical_type().clone()
                            },
                            depth.into_iter().map(|v| v.unwrap_or_default()).collect(),
                            depth_bitmap,
                        )
                        .boxed()
                    },
                ],
                Some({
                    let mut mono_offset = 0;
                    let mut rgb_offset = 0;
                    let mut rgba_offset = 0;
                    let mut segmentation_offset = 0;
                    let mut depth_offset = 0;
                    let mut nulls_offset = 0;
                    data.iter()
                        .map(|v| match v.as_deref() {
                            None => {
                                let offset = nulls_offset;
                                nulls_offset += 1;
                                offset
                            }
                            Some(ImageVariant::Mono(_)) => {
                                let offset = mono_offset;
                                mono_offset += 1;
                                offset
                            }
                            Some(ImageVariant::Rgb(_)) => {
                                let offset = rgb_offset;
                                rgb_offset += 1;
                                offset
                            }
                            Some(ImageVariant::Rgba(_)) => {
                                let offset = rgba_offset;
                                rgba_offset += 1;
                                offset
                            }
                            Some(ImageVariant::Segmentation(_)) => {
                                let offset = segmentation_offset;
                                segmentation_offset += 1;
                                offset
                            }
                            Some(ImageVariant::Depth(_)) => {
                                let offset = depth_offset;
                                depth_offset += 1;
                                offset
                            }
                        })
                        .collect()
                }),
            )
            .boxed()
        })
    }

    #[allow(unused_imports, clippy::wildcard_imports)]
    fn try_from_arrow_opt(
        arrow_data: &dyn ::arrow2::array::Array,
    ) -> crate::DeserializationResult<Vec<Option<Self>>>
    where
        Self: Sized,
    {
        use crate::{Loggable as _, ResultExt as _};
        use ::arrow2::{array::*, buffer::*, datatypes::*};
        Ok({
            let arrow_data = arrow_data
                .as_any()
                .downcast_ref::<::arrow2::array::UnionArray>()
                .ok_or_else(|| {
                    crate::DeserializationError::datatype_mismatch(
                        DataType::Union(
                            vec![
                                Field {
                                    name: "_null_markers".to_owned(),
                                    data_type: DataType::Null,
                                    is_nullable: true,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "Mono".to_owned(),
                                    data_type: DataType::Boolean,
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "Rgb".to_owned(),
                                    data_type: DataType::Boolean,
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "Rgba".to_owned(),
                                    data_type: DataType::Boolean,
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "Segmentation".to_owned(),
                                    data_type: DataType::Boolean,
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                                Field {
                                    name: "Depth".to_owned(),
                                    data_type: DataType::Boolean,
                                    is_nullable: false,
                                    metadata: [].into(),
                                },
                            ],
                            Some(vec![0i32, 1i32, 2i32, 3i32, 4i32, 5i32]),
                            UnionMode::Dense,
                        ),
                        arrow_data.data_type().clone(),
                    )
                })
                .with_context("rerun.datatypes.ImageVariant")?;
            if arrow_data.is_empty() {
                Vec::new()
            } else {
                let (arrow_data_types, arrow_data_arrays) =
                    (arrow_data.types(), arrow_data.fields());
                let arrow_data_offsets = arrow_data
                    .offsets()
                    .ok_or_else(|| {
                        crate::DeserializationError::datatype_mismatch(
                            Self::to_arrow_datatype(),
                            arrow_data.data_type().clone(),
                        )
                    })
                    .with_context("rerun.datatypes.ImageVariant")?;
                if arrow_data_types.len() != arrow_data_offsets.len() {
                    return Err(crate::DeserializationError::offset_slice_oob(
                        (0, arrow_data_types.len()),
                        arrow_data_offsets.len(),
                    ))
                    .with_context("rerun.datatypes.ImageVariant");
                }
                let mono = {
                    if 1usize >= arrow_data_arrays.len() {
                        return Ok(Vec::new());
                    }
                    let arrow_data = &*arrow_data_arrays[1usize];
                    arrow_data
                        .as_any()
                        .downcast_ref::<BooleanArray>()
                        .ok_or_else(|| {
                            crate::DeserializationError::datatype_mismatch(
                                DataType::Boolean,
                                arrow_data.data_type().clone(),
                            )
                        })
                        .with_context("rerun.datatypes.ImageVariant#Mono")?
                        .into_iter()
                        .collect::<Vec<_>>()
                };
                let rgb = {
                    if 2usize >= arrow_data_arrays.len() {
                        return Ok(Vec::new());
                    }
                    let arrow_data = &*arrow_data_arrays[2usize];
                    arrow_data
                        .as_any()
                        .downcast_ref::<BooleanArray>()
                        .ok_or_else(|| {
                            crate::DeserializationError::datatype_mismatch(
                                DataType::Boolean,
                                arrow_data.data_type().clone(),
                            )
                        })
                        .with_context("rerun.datatypes.ImageVariant#Rgb")?
                        .into_iter()
                        .collect::<Vec<_>>()
                };
                let rgba = {
                    if 3usize >= arrow_data_arrays.len() {
                        return Ok(Vec::new());
                    }
                    let arrow_data = &*arrow_data_arrays[3usize];
                    arrow_data
                        .as_any()
                        .downcast_ref::<BooleanArray>()
                        .ok_or_else(|| {
                            crate::DeserializationError::datatype_mismatch(
                                DataType::Boolean,
                                arrow_data.data_type().clone(),
                            )
                        })
                        .with_context("rerun.datatypes.ImageVariant#Rgba")?
                        .into_iter()
                        .collect::<Vec<_>>()
                };
                let segmentation = {
                    if 4usize >= arrow_data_arrays.len() {
                        return Ok(Vec::new());
                    }
                    let arrow_data = &*arrow_data_arrays[4usize];
                    arrow_data
                        .as_any()
                        .downcast_ref::<BooleanArray>()
                        .ok_or_else(|| {
                            crate::DeserializationError::datatype_mismatch(
                                DataType::Boolean,
                                arrow_data.data_type().clone(),
                            )
                        })
                        .with_context("rerun.datatypes.ImageVariant#Segmentation")?
                        .into_iter()
                        .collect::<Vec<_>>()
                };
                let depth = {
                    if 5usize >= arrow_data_arrays.len() {
                        return Ok(Vec::new());
                    }
                    let arrow_data = &*arrow_data_arrays[5usize];
                    arrow_data
                        .as_any()
                        .downcast_ref::<BooleanArray>()
                        .ok_or_else(|| {
                            crate::DeserializationError::datatype_mismatch(
                                DataType::Boolean,
                                arrow_data.data_type().clone(),
                            )
                        })
                        .with_context("rerun.datatypes.ImageVariant#Depth")?
                        .into_iter()
                        .collect::<Vec<_>>()
                };
                arrow_data_types
                    .iter()
                    .enumerate()
                    .map(|(i, typ)| {
                        let offset = arrow_data_offsets[i];
                        if *typ == 0 {
                            Ok(None)
                        } else {
                            Ok(Some(match typ {
                                1i8 => ImageVariant::Mono({
                                    if offset as usize >= mono.len() {
                                        return Err(crate::DeserializationError::offset_oob(
                                            offset as _,
                                            mono.len(),
                                        ))
                                        .with_context("rerun.datatypes.ImageVariant#Mono");
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    unsafe { mono.get_unchecked(offset as usize) }
                                        .clone()
                                        .ok_or_else(crate::DeserializationError::missing_data)
                                        .with_context("rerun.datatypes.ImageVariant#Mono")?
                                }),
                                2i8 => ImageVariant::Rgb({
                                    if offset as usize >= rgb.len() {
                                        return Err(crate::DeserializationError::offset_oob(
                                            offset as _,
                                            rgb.len(),
                                        ))
                                        .with_context("rerun.datatypes.ImageVariant#Rgb");
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    unsafe { rgb.get_unchecked(offset as usize) }
                                        .clone()
                                        .ok_or_else(crate::DeserializationError::missing_data)
                                        .with_context("rerun.datatypes.ImageVariant#Rgb")?
                                }),
                                3i8 => ImageVariant::Rgba({
                                    if offset as usize >= rgba.len() {
                                        return Err(crate::DeserializationError::offset_oob(
                                            offset as _,
                                            rgba.len(),
                                        ))
                                        .with_context("rerun.datatypes.ImageVariant#Rgba");
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    unsafe { rgba.get_unchecked(offset as usize) }
                                        .clone()
                                        .ok_or_else(crate::DeserializationError::missing_data)
                                        .with_context("rerun.datatypes.ImageVariant#Rgba")?
                                }),
                                4i8 => ImageVariant::Segmentation({
                                    if offset as usize >= segmentation.len() {
                                        return Err(crate::DeserializationError::offset_oob(
                                            offset as _,
                                            segmentation.len(),
                                        ))
                                        .with_context("rerun.datatypes.ImageVariant#Segmentation");
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    unsafe { segmentation.get_unchecked(offset as usize) }
                                        .clone()
                                        .ok_or_else(crate::DeserializationError::missing_data)
                                        .with_context("rerun.datatypes.ImageVariant#Segmentation")?
                                }),
                                5i8 => ImageVariant::Depth({
                                    if offset as usize >= depth.len() {
                                        return Err(crate::DeserializationError::offset_oob(
                                            offset as _,
                                            depth.len(),
                                        ))
                                        .with_context("rerun.datatypes.ImageVariant#Depth");
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    unsafe { depth.get_unchecked(offset as usize) }
                                        .clone()
                                        .ok_or_else(crate::DeserializationError::missing_data)
                                        .with_context("rerun.datatypes.ImageVariant#Depth")?
                                }),
                                _ => {
                                    return Err(crate::DeserializationError::missing_union_arm(
                                        Self::to_arrow_datatype(),
                                        "<invalid>",
                                        *typ as _,
                                    ))
                                    .with_context("rerun.datatypes.ImageVariant");
                                }
                            }))
                        }
                    })
                    .collect::<crate::DeserializationResult<Vec<_>>>()
                    .with_context("rerun.datatypes.ImageVariant")?
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
    fn convert_item_to_opt_self(item: Self::Item<'_>) -> Option<Self> {
        item
    }
}

impl crate::Datatype for ImageVariant {}
