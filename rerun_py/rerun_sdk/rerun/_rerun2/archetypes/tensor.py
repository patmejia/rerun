# NOTE: This file was autogenerated by re_types_builder; DO NOT EDIT.

from __future__ import annotations

from attrs import define, field

from .. import components
from .._baseclasses import (
    Archetype,
)

__all__ = ["Tensor"]


@define(str=False, repr=False)
class Tensor(Archetype):
    """A Generic Tensor."""

    data: components.TensorDataArray = field(
        metadata={"component": "primary"},
        converter=components.TensorDataArray.from_similar,  # type: ignore[misc]
    )
    meaning: components.TensorMeaningArray | None = field(
        metadata={"component": "secondary"},
        default=None,
        converter=components.TensorMeaningArray.from_similar,  # type: ignore[misc]
    )
    __str__ = Archetype.__str__
    __repr__ = Archetype.__repr__
