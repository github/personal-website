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

#include "Firestore/core/src/firebase/firestore/core/key_field_in_filter.h"

#include <memory>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "absl/algorithm/container.h"

namespace firebase {
namespace firestore {
namespace core {

using model::Document;
using model::DocumentKey;
using model::FieldPath;
using model::FieldValue;

using Operator = Filter::Operator;

class KeyFieldInFilter::Rep : public FieldFilter::Rep {
 public:
  Rep(FieldPath field, FieldValue value)
      : FieldFilter::Rep(std::move(field), Operator::In, std::move(value)) {
    const FieldValue::Array& array_value = this->value().array_value();
    for (const auto& ref_value : array_value) {
      HARD_ASSERT(ref_value.type() == FieldValue::Type::Reference,
                  "Comparing on key with IN, but an array value was not"
                  " a Reference");
    }
  }

  Type type() const override {
    return Type::kKeyFieldInFilter;
  }

  bool Matches(const model::Document& doc) const override;
};

KeyFieldInFilter::KeyFieldInFilter(FieldPath field, FieldValue value)
    : FieldFilter(
          std::make_shared<const Rep>(std::move(field), std::move(value))) {
}

bool KeyFieldInFilter::Rep::Matches(const Document& doc) const {
  const FieldValue::Array& array_value = value().array_value();
  for (const auto& rhs : array_value) {
    if (doc.key() == rhs.reference_value().key()) {
      return true;
    }
  }
  return false;
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase
