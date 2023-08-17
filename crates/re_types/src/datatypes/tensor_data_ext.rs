use crate::{ArrowBuffer, TensorDataType, TensorElement};

use super::{TensorBuffer, TensorData, TensorDimension, TensorId};

// ----------------------------------------------------------------------------

#[derive(thiserror::Error, Debug, PartialEq, Clone)]
pub enum TensorCastError {
    #[error("ndarray type mismatch with tensor storage")]
    TypeMismatch,

    #[error("tensor shape did not match storage length")]
    BadTensorShape {
        #[from]
        source: ndarray::ShapeError,
    },

    #[error("ndarray Array is not contiguous and in standard order")]
    NotContiguousStdOrder,
}

// ----------------------------------------------------------------------------

impl TensorData {
    pub fn new(id: TensorId, shape: Vec<TensorDimension>, buffer: TensorBuffer) -> Self {
        Self { id, shape, buffer }
    }

    #[inline]
    pub fn id(&self) -> TensorId {
        self.id
    }

    #[inline]
    pub fn shape(&self) -> &[TensorDimension] {
        self.shape.as_slice()
    }

    /// Returns the shape of the tensor with all trailing dimensions of size 1 ignored.
    ///
    /// If all dimension sizes are one, this returns only the first dimension.
    #[inline]
    pub fn shape_short(&self) -> &[TensorDimension] {
        if self.shape.is_empty() {
            &self.shape
        } else {
            self.shape
                .iter()
                .enumerate()
                .rev()
                .find(|(_, dim)| dim.size != 1)
                .map_or(&self.shape[0..1], |(i, _)| &self.shape[..(i + 1)])
        }
    }

    #[inline]
    pub fn num_dim(&self) -> usize {
        self.shape.len()
    }

    /// If the tensor can be interpreted as an image, return the height, width, and channels/depth of it.
    pub fn image_height_width_channels(&self) -> Option<[u64; 3]> {
        let shape_short = self.shape_short();

        match shape_short.len() {
            1 => {
                // Special case: Nx1(x1x1x...) tensors are treated as Nx1 gray images.
                // Special case: Nx1(x1x1x...) tensors are treated as Nx1 gray images.
                if self.shape.len() >= 2 {
                    Some([shape_short[0].size, 1, 1])
                } else {
                    None
                }
            }
            2 => Some([shape_short[0].size, shape_short[1].size, 1]),
            3 => {
                let channels = shape_short[2].size;
                if matches!(channels, 3 | 4) {
                    // rgb, rgba
                    Some([shape_short[0].size, shape_short[1].size, channels])
                } else {
                    None
                }
            }
            _ => None,
        }
    }

    /// Returns true if the tensor can be interpreted as an image.
    pub fn is_shaped_like_an_image(&self) -> bool {
        self.image_height_width_channels().is_some()
    }

    /// Returns true if either all dimensions have size 1 or only a single dimension has a size larger than 1.
    ///
    /// Empty tensors return false.
    #[inline]
    pub fn is_vector(&self) -> bool {
        if self.shape.is_empty() {
            false
        } else {
            self.shape.iter().filter(|dim| dim.size > 1).count() <= 1
        }
    }

    /// Query with x, y, channel indices.
    ///
    /// Allows to query values for any image like tensor even if it has more or less dimensions than 3.
    /// (useful for sampling e.g. `N x M x C x 1` tensor which is a valid image)
    #[inline]
    pub fn get_with_image_coords(&self, x: u64, y: u64, channel: u64) -> Option<TensorElement> {
        match self.shape.len() {
            1 => {
                if y == 0 && channel == 0 {
                    self.get(&[x])
                } else {
                    None
                }
            }
            2 => {
                if channel == 0 {
                    self.get(&[y, x])
                } else {
                    None
                }
            }
            3 => self.get(&[y, x, channel]),
            4 => {
                // Optimization for common case, next case handles this too.
                if self.shape[3].size == 1 {
                    self.get(&[y, x, channel, 0])
                } else {
                    None
                }
            }
            dim => self.image_height_width_channels().and_then(|_| {
                self.get(
                    &[x, y, channel]
                        .into_iter()
                        .chain(std::iter::repeat(0).take(dim - 3))
                        .collect::<Vec<u64>>(),
                )
            }),
        }
    }

    pub fn get(&self, index: &[u64]) -> Option<TensorElement> {
        let mut stride: usize = 1;
        let mut offset: usize = 0;
        for (TensorDimension { size, .. }, index) in self.shape.iter().zip(index).rev() {
            if size <= index {
                return None;
            }
            offset += *index as usize * stride;
            stride *= *size as usize;
        }

        match &self.buffer {
            TensorBuffer::U8(buf) => Some(TensorElement::U8(buf.0[offset])),
            TensorBuffer::U16(buf) => Some(TensorElement::U16(buf.0[offset])),
            TensorBuffer::U32(buf) => Some(TensorElement::U32(buf.0[offset])),
            TensorBuffer::U64(buf) => Some(TensorElement::U64(buf.0[offset])),
            TensorBuffer::I8(buf) => Some(TensorElement::I8(buf.0[offset])),
            TensorBuffer::I16(buf) => Some(TensorElement::I16(buf.0[offset])),
            TensorBuffer::I32(buf) => Some(TensorElement::I32(buf.0[offset])),
            TensorBuffer::I64(buf) => Some(TensorElement::I64(buf.0[offset])),
            // TODO(jleibs): F16 Support
            //TensorBuffer::F16(buf) => Some(TensorElement::F16(buf.0[offset])),
            TensorBuffer::F32(buf) => Some(TensorElement::F32(buf.0[offset])),
            TensorBuffer::F64(buf) => Some(TensorElement::F64(buf.0[offset])),
            TensorBuffer::Jpeg(_) => None, // Too expensive to unpack here.
        }
    }

    pub fn dtype(&self) -> TensorDataType {
        self.buffer.dtype()
    }

    pub fn size_in_bytes(&self) -> usize {
        self.buffer.size_in_bytes()
    }
}

// ----------------------------------------------------------------------------

macro_rules! tensor_type {
    ($type:ty, $variant:ident) => {
        impl<'a> TryFrom<&'a TensorData> for ::ndarray::ArrayViewD<'a, $type> {
            type Error = TensorCastError;

            fn try_from(value: &'a TensorData) -> Result<Self, Self::Error> {
                let shape: Vec<_> = value.shape.iter().map(|d| d.size as usize).collect();

                if let TensorBuffer::$variant(data) = &value.buffer {
                    ndarray::ArrayViewD::from_shape(shape, data.0.as_slice())
                        .map_err(|err| TensorCastError::BadTensorShape { source: err })
                } else {
                    Err(TensorCastError::TypeMismatch)
                }
            }
        }

        impl<'a, D: ::ndarray::Dimension> TryFrom<::ndarray::ArrayView<'a, $type, D>>
            for TensorData
        {
            type Error = TensorCastError;

            fn try_from(view: ::ndarray::ArrayView<'a, $type, D>) -> Result<Self, Self::Error> {
                let shape = view
                    .shape()
                    .iter()
                    .map(|dim| TensorDimension {
                        size: *dim as u64,
                        name: None,
                    })
                    .collect();

                match view.to_slice() {
                    Some(slice) => Ok(TensorData {
                        id: TensorId::random(),
                        shape,
                        buffer: TensorBuffer::$variant(Vec::from(slice).into()),
                    }),
                    None => Ok(TensorData {
                        id: TensorId::random(),
                        shape,
                        buffer: TensorBuffer::$variant(
                            view.iter().cloned().collect::<Vec<_>>().into(),
                        ),
                    }),
                }
            }
        }

        impl<D: ::ndarray::Dimension> TryFrom<::ndarray::Array<$type, D>> for TensorData {
            type Error = TensorCastError;

            fn try_from(value: ndarray::Array<$type, D>) -> Result<Self, Self::Error> {
                let value = value.as_standard_layout();
                let shape = value
                    .shape()
                    .iter()
                    .map(|dim| TensorDimension {
                        size: *dim as u64,
                        name: None,
                    })
                    .collect();
                value
                    .is_standard_layout()
                    .then(|| TensorData {
                        id: TensorId::random(),
                        shape,
                        buffer: TensorBuffer::$variant(value.to_owned().into_raw_vec().into()),
                    })
                    .ok_or(TensorCastError::NotContiguousStdOrder)
            }
        }
    };
}

tensor_type!(u8, U8);
tensor_type!(u16, U16);
tensor_type!(u32, U32);
tensor_type!(u64, U64);

tensor_type!(i8, I8);
tensor_type!(i16, I16);
tensor_type!(i32, I32);
tensor_type!(i64, I64);

// TODO(jleibs): F16 support
//tensor_type!(arrow2::types::f16, F16);

tensor_type!(f32, F32);
tensor_type!(f64, F64);

// TODO(jleibs): F16 support
// Manual expansion of tensor_type! macro for `half::f16` types. We need to do this
// because arrow uses its own half type. The two use the same underlying representation
// but are still distinct types. `half::f16`, however, is more full-featured and
// generally a better choice to use when converting to ndarray.
// ==========================================
// TODO(jleibs): would be nice to support this with the macro definition as well
// but the bytemuck casts add a bit of complexity here.
/*
impl<'a> TryFrom<&'a TensorData> for ::ndarray::ArrayViewD<'a, half::f16> {
    type Error = TensorCastError;

    fn try_from(value: &'a TensorData) -> Result<Self, Self::Error> {
        let shape: Vec<_> = value.shape.iter().map(|d| d.size as usize).collect();
        if let TensorBuffer::F16(data) = &value.buffer {
            ndarray::ArrayViewD::from_shape(shape, bytemuck::cast_slice(data.0.as_slice()))
                .map_err(|err| TensorCastError::BadTensorShape { source: err })
        } else {
            Err(TensorCastError::TypeMismatch)
        }
    }
}

impl<'a, D: ::ndarray::Dimension> TryFrom<::ndarray::ArrayView<'a, half::f16, D>> for TensorData {
    type Error = TensorCastError;

    fn try_from(view: ::ndarray::ArrayView<'a, half::f16, D>) -> Result<Self, Self::Error> {
        let shape = view
            .shape()
            .iter()
            .map(|dim| TensorDimension {
                size: *dim as u64,
                name: None,
            })
            .collect();
        match view.to_slice() {
            Some(slice) => Ok(TensorData {
                uuid: TensorId::random(),
                shape,
                buffer: TensorBuffer::F16(Vec::from(bytemuck::cast_slice(slice)).into()),
            }),
            None => Ok(TensorData {
                uuid: TensorId::random(),
                shape,
                buffer: TensorBuffer::F16(
                    view.iter()
                        .map(|f| arrow2::types::f16::from_bits(f.to_bits()))
                        .collect::<Vec<_>>()
                        .into(),
                ),
            }),
        }
    }
}

impl<D: ::ndarray::Dimension> TryFrom<::ndarray::Array<half::f16, D>> for TensorData {
    type Error = TensorCastError;

    fn try_from(value: ndarray::Array<half::f16, D>) -> Result<Self, Self::Error> {
        let shape = value
            .shape()
            .iter()
            .map(|dim| TensorDimension {
                size: *dim as u64,
                name: None,
            })
            .collect();
        value
            .is_standard_layout()
            .then(|| TensorData {
                tensor_id: TensorId::random(),
                shape,
                data: TensorBuffer::F16(
                    bytemuck::cast_slice(value.into_raw_vec().as_slice())
                        .to_vec()
                        .into(),
                ),
                meaning: TensorDataMeaning::Unknown,
                meter: None,
            })
            .ok_or(TensorCastError::NotContiguousStdOrder)
    }
}
*/

// ----------------------------------------------------------------------------

/// Errors when loading [`TensorData`] from the [`image`] crate.
#[cfg(feature = "image")]
#[derive(thiserror::Error, Clone, Debug)]
pub enum TensorImageLoadError {
    #[error(transparent)]
    Image(std::sync::Arc<image::ImageError>),

    #[error("Expected a HxW, HxWx1 or HxWx3 tensor, but got {0:?}")]
    UnexpectedJpegShape(Vec<TensorDimension>),

    #[error("Unsupported color type: {0:?}. We support 8-bit, 16-bit, and f32 images, and RGB, RGBA, Luminance, and Luminance-Alpha.")]
    UnsupportedImageColorType(image::ColorType),

    #[error("Failed to load file: {0}")]
    ReadError(std::sync::Arc<std::io::Error>),

    #[error("The encoded tensor shape did not match its metadata {expected:?} != {found:?}")]
    InvalidMetaData { expected: Vec<u64>, found: Vec<u64> },

    #[error(transparent)]
    JpegDecode(#[from] zune_jpeg::errors::DecodeErrors),
}

#[cfg(feature = "image")]
impl From<image::ImageError> for TensorImageLoadError {
    #[inline]
    fn from(err: image::ImageError) -> Self {
        TensorImageLoadError::Image(std::sync::Arc::new(err))
    }
}

#[cfg(feature = "image")]
impl From<std::io::Error> for TensorImageLoadError {
    #[inline]
    fn from(err: std::io::Error) -> Self {
        TensorImageLoadError::ReadError(std::sync::Arc::new(err))
    }
}

/// Errors when converting [`TensorData`] to [`image`] images.
#[cfg(feature = "image")]
#[derive(thiserror::Error, Debug)]
pub enum TensorImageSaveError {
    #[error("Expected image-shaped tensor, got {0:?}")]
    ShapeNotAnImage(Vec<TensorDimension>),

    #[error("Cannot convert tensor with {0} channels and datatype {1} to an image")]
    UnsupportedChannelsDtype(u64, TensorDataType),

    #[error("The tensor data did not match tensor dimensions")]
    BadData,
}

#[cfg(feature = "image")]
impl TensorData {
    /// Construct a tensor from the contents of an image file on disk.
    ///
    /// JPEGs will be kept encoded, left to the viewer to decode on-the-fly.
    /// Other images types will be decoded directly.
    ///
    /// Requires the `image` feature.
    #[cfg(not(target_arch = "wasm32"))]
    pub fn from_image_file(path: &std::path::Path) -> Result<Self, TensorImageLoadError> {
        re_tracing::profile_function!(path.to_string_lossy());

        let img_bytes = {
            re_tracing::profile_scope!("fs::read");
            std::fs::read(path)?
        };

        let img_format = if let Some(extension) = path.extension() {
            if let Some(format) = image::ImageFormat::from_extension(extension) {
                format
            } else {
                image::guess_format(&img_bytes)?
            }
        } else {
            image::guess_format(&img_bytes)?
        };

        Self::from_image_bytes(img_bytes, img_format)
    }

    /// Construct a tensor from the contents of a JPEG file on disk.
    ///
    /// Requires the `image` feature.
    #[cfg(not(target_arch = "wasm32"))]
    pub fn from_jpeg_file(path: &std::path::Path) -> Result<Self, TensorImageLoadError> {
        re_tracing::profile_function!(path.to_string_lossy());
        let jpeg_bytes = {
            re_tracing::profile_scope!("fs::read");
            std::fs::read(path)?
        };
        Self::from_jpeg_bytes(jpeg_bytes)
    }

    #[deprecated = "Renamed 'from_jpeg_file'"]
    #[cfg(not(target_arch = "wasm32"))]
    pub fn tensor_from_jpeg_file(
        image_path: impl AsRef<std::path::Path>,
    ) -> Result<Self, TensorImageLoadError> {
        Self::from_jpeg_file(image_path.as_ref())
    }

    /// Construct a tensor from the contents of an image file.
    ///
    /// JPEGs will be kept encoded, left to the viewer to decode on-the-fly.
    /// Other images types will be decoded directly.
    ///
    /// Requires the `image` feature.
    pub fn from_image_bytes(
        bytes: Vec<u8>,
        format: image::ImageFormat,
    ) -> Result<Self, TensorImageLoadError> {
        re_tracing::profile_function!(format!("{format:?}"));
        if format == image::ImageFormat::Jpeg {
            Self::from_jpeg_bytes(bytes)
        } else {
            let image = image::load_from_memory_with_format(&bytes, format)?;
            Self::from_image(image)
        }
    }

    /// Construct a tensor from the contents of a JPEG file, without decoding it now.
    ///
    /// Requires the `image` feature.
    pub fn from_jpeg_bytes(jpeg_bytes: Vec<u8>) -> Result<Self, TensorImageLoadError> {
        re_tracing::profile_function!();

        use zune_jpeg::JpegDecoder;

        let mut decoder = JpegDecoder::new(&jpeg_bytes);
        decoder.decode_headers()?;
        let (w, h) = decoder.dimensions().unwrap(); // Can't fail after a successful decode_headers

        Ok(Self {
            id: TensorId::random(),
            shape: vec![
                TensorDimension::height(h as _),
                TensorDimension::width(w as _),
                TensorDimension::depth(3),
            ],
            buffer: TensorBuffer::Jpeg(jpeg_bytes.into()),
        })
    }

    #[deprecated = "Renamed 'from_jpeg_bytes'"]
    #[cfg(not(target_arch = "wasm32"))]
    pub fn tensor_from_jpeg_bytes(jpeg_bytes: Vec<u8>) -> Result<Self, TensorImageLoadError> {
        Self::from_jpeg_bytes(jpeg_bytes)
    }

    /// Construct a tensor from something that can be turned into a [`image::DynamicImage`].
    ///
    /// Requires the `image` feature.
    ///
    /// This is a convenience function that calls [`DecodedTensor::from_image`].
    pub fn from_image(
        image: impl Into<image::DynamicImage>,
    ) -> Result<TensorData, TensorImageLoadError> {
        Self::from_dynamic_image(image.into())
    }

    /// Construct a tensor from [`image::DynamicImage`].
    ///
    /// Requires the `image` feature.
    ///
    /// This is a convenience function that calls [`DecodedTensor::from_dynamic_image`].
    pub fn from_dynamic_image(
        image: image::DynamicImage,
    ) -> Result<TensorData, TensorImageLoadError> {
        DecodedTensor::from_dynamic_image(image).map(DecodedTensor::into_inner)
    }

    /// Predicts if [`Self::to_dynamic_image`] is likely to succeed, without doing anything expensive
    pub fn could_be_dynamic_image(&self) -> bool {
        self.is_shaped_like_an_image()
            && matches!(
                self.dtype(),
                TensorDataType::U8
                    | TensorDataType::U16
                    | TensorDataType::F16
                    | TensorDataType::F32
                    | TensorDataType::F64
            )
    }

    /// Try to convert an image-like tensor into an [`image::DynamicImage`].
    pub fn to_dynamic_image(&self) -> Result<image::DynamicImage, TensorImageSaveError> {
        use ecolor::{gamma_u8_from_linear_f32, linear_u8_from_linear_f32};
        use image::{DynamicImage, GrayImage, RgbImage, RgbaImage};

        type Rgb16Image = image::ImageBuffer<image::Rgb<u16>, Vec<u16>>;
        type Rgba16Image = image::ImageBuffer<image::Rgba<u16>, Vec<u16>>;
        type Gray16Image = image::ImageBuffer<image::Luma<u16>, Vec<u16>>;

        let [h, w, channels] = self
            .image_height_width_channels()
            .ok_or_else(|| TensorImageSaveError::ShapeNotAnImage(self.shape.clone()))?;
        let w = w as u32;
        let h = h as u32;

        let dyn_img_result = match (channels, &self.buffer) {
            (1, TensorBuffer::U8(buf)) => {
                GrayImage::from_raw(w, h, buf.0.as_slice().to_vec()).map(DynamicImage::ImageLuma8)
            }
            (1, TensorBuffer::U16(buf)) => Gray16Image::from_raw(w, h, buf.0.as_slice().to_vec())
                .map(DynamicImage::ImageLuma16),
            // TODO(emilk) f16
            (1, TensorBuffer::F32(buf)) => {
                let pixels = buf
                    .0
                    .iter()
                    .map(|pixel| gamma_u8_from_linear_f32(*pixel))
                    .collect();
                GrayImage::from_raw(w, h, pixels).map(DynamicImage::ImageLuma8)
            }
            (1, TensorBuffer::F64(buf)) => {
                let pixels = buf
                    .0
                    .iter()
                    .map(|&pixel| gamma_u8_from_linear_f32(pixel as f32))
                    .collect();
                GrayImage::from_raw(w, h, pixels).map(DynamicImage::ImageLuma8)
            }

            (3, TensorBuffer::U8(buf)) => {
                RgbImage::from_raw(w, h, buf.0.as_slice().to_vec()).map(DynamicImage::ImageRgb8)
            }
            (3, TensorBuffer::U16(buf)) => {
                Rgb16Image::from_raw(w, h, buf.0.as_slice().to_vec()).map(DynamicImage::ImageRgb16)
            }
            (3, TensorBuffer::F32(buf)) => {
                let pixels = buf
                    .0
                    .iter()
                    .copied()
                    .map(gamma_u8_from_linear_f32)
                    .collect();
                RgbImage::from_raw(w, h, pixels).map(DynamicImage::ImageRgb8)
            }
            (3, TensorBuffer::F64(buf)) => {
                let pixels = buf
                    .0
                    .iter()
                    .map(|&comp| gamma_u8_from_linear_f32(comp as f32))
                    .collect();
                RgbImage::from_raw(w, h, pixels).map(DynamicImage::ImageRgb8)
            }

            (4, TensorBuffer::U8(buf)) => {
                RgbaImage::from_raw(w, h, buf.0.as_slice().to_vec()).map(DynamicImage::ImageRgba8)
            }
            (4, TensorBuffer::U16(buf)) => Rgba16Image::from_raw(w, h, buf.0.as_slice().to_vec())
                .map(DynamicImage::ImageRgba16),
            (4, TensorBuffer::F32(buf)) => {
                let rgba: &[[f32; 4]] = bytemuck::cast_slice(buf.0.as_slice());
                let pixels: Vec<u8> = rgba
                    .iter()
                    .flat_map(|&[r, g, b, a]| {
                        let r = gamma_u8_from_linear_f32(r);
                        let g = gamma_u8_from_linear_f32(g);
                        let b = gamma_u8_from_linear_f32(b);
                        let a = linear_u8_from_linear_f32(a);
                        [r, g, b, a]
                    })
                    .collect();
                RgbaImage::from_raw(w, h, pixels).map(DynamicImage::ImageRgba8)
            }
            (4, TensorBuffer::F64(buf)) => {
                let rgba: &[[f64; 4]] = bytemuck::cast_slice(buf.0.as_slice());
                let pixels: Vec<u8> = rgba
                    .iter()
                    .flat_map(|&[r, g, b, a]| {
                        let r = gamma_u8_from_linear_f32(r as _);
                        let g = gamma_u8_from_linear_f32(g as _);
                        let b = gamma_u8_from_linear_f32(b as _);
                        let a = linear_u8_from_linear_f32(a as _);
                        [r, g, b, a]
                    })
                    .collect();
                RgbaImage::from_raw(w, h, pixels).map(DynamicImage::ImageRgba8)
            }

            (_, _) => {
                return Err(TensorImageSaveError::UnsupportedChannelsDtype(
                    channels,
                    self.buffer.dtype(),
                ))
            }
        };

        dyn_img_result.ok_or(TensorImageSaveError::BadData)
    }
}

// ----------------------------------------------------------------------------

/// A thin wrapper around a [`TensorData`] that is guaranteed to not be compressed (never a jpeg).
///
/// All clones are shallow, like for [`TensorData`].
#[derive(Clone)]
pub struct DecodedTensor(TensorData);

impl DecodedTensor {
    #[inline(always)]
    pub fn inner(&self) -> &TensorData {
        &self.0
    }

    #[inline(always)]
    pub fn into_inner(self) -> TensorData {
        self.0
    }
}

impl TryFrom<TensorData> for DecodedTensor {
    type Error = TensorData;

    fn try_from(tensor: TensorData) -> Result<Self, TensorData> {
        match &tensor.buffer {
            TensorBuffer::U8(_)
            | TensorBuffer::U16(_)
            | TensorBuffer::U32(_)
            | TensorBuffer::U64(_)
            | TensorBuffer::I8(_)
            | TensorBuffer::I16(_)
            | TensorBuffer::I32(_)
            | TensorBuffer::I64(_)
            // TODO(jleibs): F16 support
            //| TensorBuffer::F16(_)
            | TensorBuffer::F32(_)
            | TensorBuffer::F64(_) => Ok(Self(tensor)),
            TensorBuffer::Jpeg(_) => Err(tensor),
        }
    }
}

#[cfg(feature = "image")]
impl DecodedTensor {
    /// Construct a tensor from something that can be turned into a [`image::DynamicImage`].
    ///
    /// Requires the `image` feature.
    pub fn from_image(
        image: impl Into<image::DynamicImage>,
    ) -> Result<DecodedTensor, TensorImageLoadError> {
        Self::from_dynamic_image(image.into())
    }

    /// Construct a tensor from [`image::DynamicImage`].
    ///
    /// Requires the `image` feature.
    pub fn from_dynamic_image(
        image: image::DynamicImage,
    ) -> Result<DecodedTensor, TensorImageLoadError> {
        re_tracing::profile_function!();

        let (w, h) = (image.width(), image.height());

        let (depth, buffer) = match image {
            image::DynamicImage::ImageLuma8(image) => {
                (1, TensorBuffer::U8(image.into_raw().into()))
            }
            image::DynamicImage::ImageRgb8(image) => (3, TensorBuffer::U8(image.into_raw().into())),
            image::DynamicImage::ImageRgba8(image) => {
                (4, TensorBuffer::U8(image.into_raw().into()))
            }
            image::DynamicImage::ImageLuma16(image) => {
                (1, TensorBuffer::U16(image.into_raw().into()))
            }
            image::DynamicImage::ImageRgb16(image) => {
                (3, TensorBuffer::U16(image.into_raw().into()))
            }
            image::DynamicImage::ImageRgba16(image) => {
                (4, TensorBuffer::U16(image.into_raw().into()))
            }
            image::DynamicImage::ImageRgb32F(image) => {
                (3, TensorBuffer::F32(image.into_raw().into()))
            }
            image::DynamicImage::ImageRgba32F(image) => {
                (4, TensorBuffer::F32(image.into_raw().into()))
            }
            image::DynamicImage::ImageLumaA8(image) => {
                re_log::warn!(
                    "Rerun doesn't have native support for 8-bit Luma + Alpha. The image will be convert to RGBA."
                );
                return Self::from_image(image::DynamicImage::ImageLumaA8(image).to_rgba8());
            }
            image::DynamicImage::ImageLumaA16(image) => {
                re_log::warn!(
                    "Rerun doesn't have native support for 16-bit Luma + Alpha. The image will be convert to RGBA."
                );
                return Self::from_image(image::DynamicImage::ImageLumaA16(image).to_rgba16());
            }
            _ => {
                // It is very annoying that DynamicImage is #[non_exhaustive]
                return Err(TensorImageLoadError::UnsupportedImageColorType(
                    image.color(),
                ));
            }
        };
        let tensor = TensorData {
            id: TensorId::random(),
            shape: vec![
                TensorDimension::height(h as _),
                TensorDimension::width(w as _),
                TensorDimension::depth(depth),
            ],
            buffer,
        };
        Ok(DecodedTensor(tensor))
    }

    pub fn try_decode(maybe_encoded_tensor: TensorData) -> Result<Self, TensorImageLoadError> {
        match &maybe_encoded_tensor.buffer {
            TensorBuffer::U8(_)
            | TensorBuffer::U16(_)
            | TensorBuffer::U32(_)
            | TensorBuffer::U64(_)
            | TensorBuffer::I8(_)
            | TensorBuffer::I16(_)
            | TensorBuffer::I32(_)
            | TensorBuffer::I64(_)
            // TODO(jleibs): F16 support
            //| TensorBuffer::F16(_)
            | TensorBuffer::F32(_)
            | TensorBuffer::F64(_) => Ok(Self(maybe_encoded_tensor)),

            TensorBuffer::Jpeg(jpeg_bytes) => {
                let [h, w, c] = maybe_encoded_tensor
                    .image_height_width_channels()
                    .ok_or_else(|| {
                        TensorImageLoadError::UnexpectedJpegShape(
                            maybe_encoded_tensor.shape().to_vec(),
                        )
                    })?;

                Self::decode_jpeg_bytes(jpeg_bytes, [h, w, c])
            }
        }
    }

    pub fn decode_jpeg_bytes(
        jpeg_bytes: &ArrowBuffer<u8>,
        [expected_height, expected_width, expected_channels]: [u64; 3],
    ) -> Result<DecodedTensor, TensorImageLoadError> {
        re_tracing::profile_function!();

        re_log::debug!("Decoding {expected_width}x{expected_height} JPEG");

        use zune_core::colorspace::ColorSpace;
        use zune_core::options::DecoderOptions;
        use zune_jpeg::JpegDecoder;

        let mut options = DecoderOptions::default();

        let depth = if expected_channels == 1 {
            options = options.jpeg_set_out_colorspace(ColorSpace::Luma);
            1
        } else {
            // We decode to RGBA directly so we don't need to pad to four bytes later when uploading to GPU.
            options = options.jpeg_set_out_colorspace(ColorSpace::RGBA);
            4
        };

        let mut decoder = JpegDecoder::new_with_options(options, jpeg_bytes.0.as_slice());
        let pixels = decoder.decode()?;
        let (w, h) = decoder.dimensions().unwrap(); // Can't fail after a successful decode

        let (w, h) = (w as u64, h as u64);

        if w != expected_width || h != expected_height {
            return Err(TensorImageLoadError::InvalidMetaData {
                expected: [expected_height, expected_width, expected_channels].into(),
                found: [h, w, depth].into(),
            });
        }

        if pixels.len() as u64 != w * h * depth {
            return Err(zune_jpeg::errors::DecodeErrors::Format(format!(
                "Bug in zune-jpeg: Expected {w}x{h}x{depth}={} bytes, got {}",
                w * h * depth,
                pixels.len()
            ))
            .into());
        }

        let tensor = TensorData {
            id: TensorId::random(),
            shape: vec![
                TensorDimension::height(h),
                TensorDimension::width(w),
                TensorDimension::depth(depth),
            ],
            buffer: TensorBuffer::U8(pixels.into()),
        };
        let decoded_tensor = DecodedTensor(tensor);

        Ok(decoded_tensor)
    }
}

impl AsRef<TensorData> for DecodedTensor {
    #[inline(always)]
    fn as_ref(&self) -> &TensorData {
        &self.0
    }
}

impl std::ops::Deref for DecodedTensor {
    type Target = TensorData;

    #[inline(always)]
    fn deref(&self) -> &TensorData {
        &self.0
    }
}

impl std::borrow::Borrow<TensorData> for DecodedTensor {
    #[inline(always)]
    fn borrow(&self) -> &TensorData {
        &self.0
    }
}
