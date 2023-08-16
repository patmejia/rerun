// NOTE: This file was autogenerated by re_types_builder; DO NOT EDIT.
// Based on "crates/re_types/definitions/rerun/archetypes/tensor.fbs"

#include "tensor.hpp"

#include "../components/tensor_data.hpp"
#include "../components/tensor_meaning.hpp"

#include <arrow/api.h>

namespace rerun {
    namespace archetypes {
        arrow::Result<std::vector<rerun::DataCell>> Tensor::to_data_cells() const {
            std::vector<rerun::DataCell> cells;
            cells.reserve(2);

            {
                ARROW_ASSIGN_OR_RAISE(
                    const auto cell,
                    rerun::components::TensorData::to_data_cell(&data, 1)
                );
                cells.push_back(cell);
            }
            if (meaning.has_value()) {
                const auto& value = meaning.value();
                ARROW_ASSIGN_OR_RAISE(
                    const auto cell,
                    rerun::components::TensorMeaning::to_data_cell(&value, 1)
                );
                cells.push_back(cell);
            }

            return cells;
        }
    } // namespace archetypes
} // namespace rerun
