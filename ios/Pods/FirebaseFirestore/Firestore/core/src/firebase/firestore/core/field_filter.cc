/*
 * Copyright 2018 Google
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

#include "Firestore/core/src/firebase/firestore/core/field_filter.h"

#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/api/input_validation.h"
#include "Firestore/core/src/firebase/firestore/core/array_contains_any_filter.h"
#include "Firestore/core/src/firebase/firestore/core/array_contains_filter.h"
#include "Firestore/core/src/firebase/firestore/core/in_filter.h"
#include "Firestore/core/src/firebase/firestore/core/key_field_filter.h"
#include "Firestore/core/src/firebase/firestore/core/key_field_in_filter.h"
#include "Firestore/core/src/firebase/firestore/core/operator.h"
#include "Firestore/core/src/firebase/firestore/util/hashing.h"
#include "absl/algorithm/container.h"
#include "absl/strings/str_cat.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace core {

using api::ThrowInvalidArgument;
using model::FieldPath;
using model::FieldValue;
using util::ComparisonResult;

namespace {

const char* CanonicalName(Filter::Operator op) {
  switch (op) {
    case Filter::Operator::LessThan:
      return "<";
    case Filter::Operator::LessThanOrEqual:
      return "<=";
    case Filter::Operator::Equal:
      return "==";
    case Filter::Operator::GreaterThanOrEqual:
      return ">=";
    case Filter::Operator::GreaterThan:
      return ">";
    case Filter::Operator::ArrayContains:
      // The canonical name for this is array_contains for compatibility with
      // existing entries in `query_targets` stored on user devices. This cannot
      // be changed without causing users to lose their associated resume
      // tokens.
      return "array_contains";
    case Filter::Operator::In:
      return "in";
    case Filter::Operator::ArrayContainsAny:
      return "array-contains-any";
  }

  UNREACHABLE();
}

}  // namespace

FieldFilter FieldFilter::Create(FieldPath path,
                                Operator op,
                                FieldValue value_rhs) {
  if (path.IsKeyFieldPath()) {
    if (op == Filter::Operator::In) {
      HARD_ASSERT(value_rhs.type() == FieldValue::Type::Array,
                  "Comparing on key with IN, but the value was not an Array");
      return KeyFieldInFilter(std::move(path), std::move(value_rhs));
    } else {
      HARD_ASSERT(value_rhs.type() == FieldValue::Type::Reference,
                  "Comparing on key, but filter value not a Reference.");
      HARD_ASSERT(!IsArrayOperator(op),
                  "%s queries don't make sense on document keys.",
                  CanonicalName(op));
      return KeyFieldFilter(std::move(path), op, std::move(value_rhs));
    }

  } else if (value_rhs.type() == FieldValue::Type::Null) {
    if (op != Filter::Operator::Equal) {
      ThrowInvalidArgument(
          "Invalid Query. Null supports only equality comparisons.");
    }
    Rep filter(std::move(path), op, std::move(value_rhs));
    return FieldFilter(std::make_shared<const Rep>(std::move(filter)));

  } else if (value_rhs.is_nan()) {
    if (op != Filter::Operator::Equal) {
      ThrowInvalidArgument(
          "Invalid Query. NaN supports only equality comparisons.");
    }
    Rep filter(std::move(path), op, std::move(value_rhs));
    return FieldFilter(std::make_shared<const Rep>(std::move(filter)));

  } else if (op == Operator::ArrayContains) {
    return ArrayContainsFilter(std::move(path), std::move(value_rhs));

  } else if (op == Operator::In) {
    HARD_ASSERT(value_rhs.type() == FieldValue::Type::Array,
                "IN filter has invalid value: %s", value_rhs.type());
    return InFilter(std::move(path), std::move(value_rhs));

  } else if (op == Operator::ArrayContainsAny) {
    HARD_ASSERT(value_rhs.type() == FieldValue::Type::Array,
                "arrayContainsAny filter has invalid value: %s",
                value_rhs.type());
    return ArrayContainsAnyFilter(std::move(path), std::move(value_rhs));
  } else {
    Rep filter(std::move(path), op, std::move(value_rhs));
    return FieldFilter(std::make_shared<const Rep>(std::move(filter)));
  }
}

FieldFilter::FieldFilter(const Filter& other) : Filter(other) {
  HARD_ASSERT(IsAFieldFilter());
}

FieldFilter::FieldFilter(std::shared_ptr<const Filter::Rep> rep)
    : Filter(std::move(rep)) {
}

FieldFilter::Rep::Rep(FieldPath field, Operator op, FieldValue value_rhs)
    : field_(std::move(field)), op_(op), value_rhs_(std::move(value_rhs)) {
}

bool FieldFilter::Rep::IsInequality() const {
  return op_ == Operator::LessThan || op_ == Operator::LessThanOrEqual ||
         op_ == Operator::GreaterThan || op_ == Operator::GreaterThanOrEqual;
}

bool FieldFilter::Rep::Matches(const model::Document& doc) const {
  absl::optional<FieldValue> maybe_lhs = doc.field(field_);
  if (!maybe_lhs) return false;

  const FieldValue& lhs = *maybe_lhs;

  // Only compare types with matching backend order (such as double and int).
  return FieldValue::Comparable(lhs.type(), value_rhs_.type()) &&
         MatchesComparison(lhs.CompareTo(value_rhs_));
}

bool FieldFilter::Rep::MatchesComparison(ComparisonResult comparison) const {
  switch (op_) {
    case Operator::LessThan:
      return comparison == ComparisonResult::Ascending;
    case Operator::LessThanOrEqual:
      return comparison == ComparisonResult::Ascending ||
             comparison == ComparisonResult::Same;
    case Operator::Equal:
      return comparison == ComparisonResult::Same;
    case Operator::GreaterThanOrEqual:
      return comparison == ComparisonResult::Descending ||
             comparison == ComparisonResult::Same;
    case Operator::GreaterThan:
      return comparison == ComparisonResult::Descending;
    default:
      HARD_FAIL("Operator %s unsuitable for comparison", op_);
  }
}

std::string FieldFilter::Rep::CanonicalId() const {
  return absl::StrCat(field_.CanonicalString(), CanonicalName(op_),
                      value_rhs_.ToString());
}

std::string FieldFilter::Rep::ToString() const {
  return util::StringFormat("%s %s %s", field_.CanonicalString(),
                            CanonicalName(op_), value_rhs_.ToString());
}

size_t FieldFilter::Rep::Hash() const {
  return util::Hash(field_, op_, value_rhs_);
}

bool FieldFilter::Rep::Equals(const Filter::Rep& other) const {
  if (type() != other.type()) return false;

  const auto& other_rep = static_cast<const FieldFilter::Rep&>(other);
  return op_ == other_rep.op_ && field_ == other_rep.field_ &&
         value_rhs_ == other_rep.value_rhs_;
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase
