/*
 * Copyright 2019 Google
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "Firestore/core/src/firebase/firestore/core/in_filter.h"

#include <memory>
#include <utility>

#include "absl/algorithm/container.h"

namespace firebase {
namespace firestore {
namespace core {

using model::Document;
using model::FieldPath;
using model::FieldValue;

using Operator = Filter::Operator;

class InFilter::Rep : public FieldFilter::Rep {
 public:
  Rep(FieldPath field, FieldValue value)
      : FieldFilter::Rep(std::move(field), Operator::In, std::move(value)) {
  }

  Type type() const override {
    return Type::kInFilter;
  }

  bool Matches(const model::Document& doc) const override;
};

InFilter::InFilter(FieldPath field, FieldValue value)
    : FieldFilter(
          std::make_shared<const Rep>(std::move(field), std::move(value))) {
}

bool InFilter::Rep::Matches(const Document& doc) const {
  const FieldValue::Array& array_value = value().array_value();
  absl::optional<FieldValue> maybe_lhs = doc.field(field());
  if (!maybe_lhs) return false;
  return absl::c_linear_search(array_value, *maybe_lhs);
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase
