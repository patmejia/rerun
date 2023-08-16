# NOTE: This file was autogenerated by re_types_builder; DO NOT EDIT.

from __future__ import annotations

from typing import Sequence, Union

import pyarrow as pa
from attrs import define, field

from .. import datatypes
from .._baseclasses import (
    BaseExtensionArray,
    BaseExtensionType,
)

__all__ = ["TensorData", "TensorDataArray", "TensorDataArrayLike", "TensorDataLike", "TensorDataType"]


def _tensordata_id_converter(x: datatypes.TensorIdLike) -> datatypes.TensorId:
    if isinstance(x, datatypes.TensorId):
        return x
    else:
        return datatypes.TensorId(x)


def _tensordata_buffer_converter(x: datatypes.TensorBufferLike) -> datatypes.TensorBuffer:
    if isinstance(x, datatypes.TensorBuffer):
        return x
    else:
        return datatypes.TensorBuffer(x)


@define
class TensorData:
    """Storage for a `Tensor`."""

    id: datatypes.TensorId = field(converter=_tensordata_id_converter)
    shape: list[datatypes.TensorDimension] = field()
    buffer: datatypes.TensorBuffer = field(converter=_tensordata_buffer_converter)


TensorDataLike = TensorData
TensorDataArrayLike = Union[
    TensorData,
    Sequence[TensorDataLike],
]


# --- Arrow support ---


class TensorDataType(BaseExtensionType):
    def __init__(self) -> None:
        pa.ExtensionType.__init__(
            self,
            pa.struct(
                [
                    pa.field(
                        "id",
                        pa.list_(pa.field("item", pa.uint8(), nullable=False, metadata={}), 16),
                        nullable=False,
                        metadata={},
                    ),
                    pa.field(
                        "shape",
                        pa.list_(
                            pa.field(
                                "item",
                                pa.struct(
                                    [
                                        pa.field("size", pa.uint64(), nullable=False, metadata={}),
                                        pa.field("name", pa.utf8(), nullable=True, metadata={}),
                                    ]
                                ),
                                nullable=False,
                                metadata={},
                            )
                        ),
                        nullable=False,
                        metadata={},
                    ),
                    pa.field(
                        "buffer",
                        pa.dense_union(
                            [
                                pa.field("_null_markers", pa.null(), nullable=True, metadata={}),
                                pa.field(
                                    "U8",
                                    pa.list_(pa.field("item", pa.uint8(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "U16",
                                    pa.list_(pa.field("item", pa.uint16(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "U32",
                                    pa.list_(pa.field("item", pa.uint32(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "U64",
                                    pa.list_(pa.field("item", pa.uint64(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "I8",
                                    pa.list_(pa.field("item", pa.int8(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "I16",
                                    pa.list_(pa.field("item", pa.int16(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "I32",
                                    pa.list_(pa.field("item", pa.int32(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "I64",
                                    pa.list_(pa.field("item", pa.int64(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "F16",
                                    pa.list_(pa.field("item", pa.float32(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "F32",
                                    pa.list_(pa.field("item", pa.float32(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "F64",
                                    pa.list_(pa.field("item", pa.float64(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                                pa.field(
                                    "JPEG",
                                    pa.list_(pa.field("item", pa.uint8(), nullable=False, metadata={})),
                                    nullable=False,
                                    metadata={},
                                ),
                            ]
                        ),
                        nullable=False,
                        metadata={},
                    ),
                ]
            ),
            "rerun.datatypes.TensorData",
        )


class TensorDataArray(BaseExtensionArray[TensorDataArrayLike]):
    _EXTENSION_NAME = "rerun.datatypes.TensorData"
    _EXTENSION_TYPE = TensorDataType

    @staticmethod
    def _native_to_pa_array(data: TensorDataArrayLike, data_type: pa.DataType) -> pa.Array:
        raise NotImplementedError


TensorDataType._ARRAY_TYPE = TensorDataArray

# TODO(cmc): bring back registration to pyarrow once legacy types are gone
# pa.register_extension_type(TensorDataType())
