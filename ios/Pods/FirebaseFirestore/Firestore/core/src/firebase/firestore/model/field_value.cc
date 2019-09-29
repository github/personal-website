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

#include "Firestore/core/src/firebase/firestore/model/field_value.h"

#include <algorithm>
#include <cmath>
#include <iostream>
#include <memory>
#include <new>
#include <set>
#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/immutable/sorted_map.h"
#include "Firestore/core/src/firebase/firestore/model/field_mask.h"
#include "Firestore/core/src/firebase/firestore/timestamp_internal.h"
#include "Firestore/core/src/firebase/firestore/util/comparison.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/hashing.h"
#include "Firestore/core/src/firebase/firestore/util/to_string.h"
#include "absl/algorithm/container.h"
#include "absl/base/casts.h"
#include "absl/memory/memory.h"
#include "absl/strings/escaping.h"

namespace firebase {
namespace firestore {
namespace model {

namespace {

using BaseValue = FieldValue::BaseValue;
using Reference = FieldValue::Reference;
using ServerTimestamp = FieldValue::ServerTimestamp;
using Type = FieldValue::Type;

using nanopb::ByteString;
using util::Compare;
using util::CompareContainer;
using util::ComparisonResult;

template <typename T>
const T& Cast(const BaseValue& rep) {
  return static_cast<const T&>(rep);
}

class NullValue : public FieldValue::BaseValue {
 public:
  Type type() const override {
    return Type::Null;
  }

  std::string ToString() const override {
    return util::ToString(nullptr);
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    // NullValue is the only instance of itself
    return true;
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    // Null is only comparable with itself and is defined to be the same.
    return ComparisonResult::Same;
  }

  size_t Hash() const override {
    // std::hash is not defined for nullptr_t.
    return util::Hash(static_cast<void*>(nullptr));
  }
};

/**
 * A base class for implementing a "simple" field value type. Simple field
 * values:
 *
 *   * Are only comparable with values of their own type
 *   * Can be implemented by delegating to standard utilities, e.g. ToString()
 *     by calling util::ToString.
 */
template <Type type_enum, typename ValueType>
class SimpleFieldValue : public FieldValue::BaseValue {
 public:
  explicit SimpleFieldValue(ValueType value) : value_(std::move(value)) {
  }

  Type type() const override {
    return type_enum;
  }

  std::string ToString() const override {
    return util::ToString(value_);
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<SimpleFieldValue>(other);
    return value_ == other_value.value();
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    auto& other_value = Cast<SimpleFieldValue>(other);
    return Compare(value_, other_value.value());
  }

  size_t Hash() const override {
    return util::Hash(value_);
  }

  const ValueType& value() const {
    return value_;
  }

 private:
  ValueType value_;
};

class BooleanValue : public SimpleFieldValue<Type::Boolean, bool> {
 public:
  using SimpleFieldValue::SimpleFieldValue;
};

template <Type type_enum, typename ValueType>
class NumberValue : public SimpleFieldValue<type_enum, ValueType> {
 public:
  using SimpleFieldValue<type_enum, ValueType>::SimpleFieldValue;

  ComparisonResult CompareTo(const BaseValue& other) const override;
};

class IntegerValue : public NumberValue<Type::Integer, int64_t> {
 public:
  using NumberValue<Type::Integer, int64_t>::NumberValue;
};

int64_t Integer(const BaseValue& rep) {
  return Cast<IntegerValue>(rep).value();
}

class DoubleValue : public NumberValue<Type::Double, double> {
 public:
  using NumberValue<Type::Double, double>::NumberValue;

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<DoubleValue>(other);
    return util::DoubleBitwiseEquals(value(), other_value.value());
  }

  size_t Hash() const override {
    return util::DoubleBitwiseHash(value());
  }
};

double Double(const BaseValue& rep) {
  return Cast<DoubleValue>(rep).value();
}

template <Type type_enum, typename ValueType>
ComparisonResult NumberValue<type_enum, ValueType>::CompareTo(
    const BaseValue& other) const {
  ComparisonResult cmp = this->CompareTypes(other);
  if (!util::Same(cmp)) return cmp;

  Type this_type = this->type();
  Type other_type = other.type();

  if (this_type == other_type) {
    if (this_type == Type::Integer) {
      return Compare(Integer(*this), Integer(other));
    } else {
      return Compare(Double(*this), Double(other));
    }

  } else {
    if (this_type == Type::Integer) {
      // CompareMixedNumber only takes (double, int64_t) so reverse the argument
      // order and then reverse the result.
      return util::ReverseOrder(
          util::CompareMixedNumber(Double(other), Integer(*this)));
    } else {
      return util::CompareMixedNumber(Double(*this), Integer(other));
    }
  }
}

// TODO(wilhuff): Use SimpleFieldValue as a base once we migrate to absl::Hash.
//
// This can't extend SimpleFieldValue because `util::Hash` is undefined for
// Timestamp (and you can't override a compile-time error in a base class out
// of existence). absl::Hash allows us to implement hashing in a way that
// requires no public declaration of conformance.
class TimestampValue : public BaseValue {
 public:
  explicit TimestampValue(Timestamp value) : value_(value) {
  }

  Type type() const override {
    return Type::Timestamp;
  }

  std::string ToString() const override {
    return util::ToString(value_);
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<TimestampValue>(other);
    return value_ == other_value.value_;
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    if (other.type() == Type::Timestamp) {
      return Compare(value_, Cast<TimestampValue>(other).value_);
    } else {
      return ComparisonResult::Ascending;
    }
  }

  size_t Hash() const override {
    return TimestampInternal::Hash(value());
  }

  const Timestamp& value() const {
    return value_;
  }

 private:
  Timestamp value_;
};

/**
 * Represents a locally-applied Server Timestamp.
 *
 * Notes:
 *   - ServerTimestampValue instances are created as the result of applying an
 *     TransformMutation. They can only exist in the local view of a document.
 *     Therefore they do not need to be parsed or serialized.
 *   - When evaluated locally (e.g. via DocumentSnapshot data), they by default
 *     evaluate to null.
 *   - This behavior can be configured by passing custom FieldValueOptions to
 *     `valueWithOptions:`.
 *   - They sort after all Timestamp values. With respect to other
 *     ServerTimestampValues, they sort by their local_write_time.
 */
class ServerTimestampValue : public FieldValue::BaseValue {
 public:
  explicit ServerTimestampValue(ServerTimestamp server_timestamp)
      : server_timestamp_(server_timestamp) {
  }

  Type type() const override {
    return Type::ServerTimestamp;
  }

  std::string ToString() const override {
    std::string time = value().local_write_time().ToString();
    return absl::StrCat("ServerTimestamp(local_write_time=", time, ")");
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<ServerTimestampValue>(other);
    return value().local_write_time() == other_value.value().local_write_time();
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    if (other.type() == Type::ServerTimestamp) {
      return Compare(
          value().local_write_time(),
          Cast<ServerTimestampValue>(other).value().local_write_time());
    } else {
      return ComparisonResult::Descending;
    }
  }

  size_t Hash() const override {
    size_t result = TimestampInternal::Hash(value().local_write_time());
    if (value().previous_value()) {
      result = util::Hash(result, *value().previous_value());
    }
    return result;
  }

  const ServerTimestamp& value() const {
    return server_timestamp_;
  }

 private:
  ServerTimestamp server_timestamp_;
};

class StringValue : public SimpleFieldValue<Type::String, std::string> {
 public:
  using SimpleFieldValue::SimpleFieldValue;
};

class BlobValue : public SimpleFieldValue<Type::Blob, ByteString> {
 public:
  using SimpleFieldValue::SimpleFieldValue;
};

class ReferenceValue : public FieldValue::BaseValue {
 public:
  explicit ReferenceValue(Reference reference)
      : reference_(std::move(reference)) {
  }

  Type type() const override {
    return Type::Reference;
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<ReferenceValue>(other);
    return database_id() == other_value.database_id() &&
           key() == other_value.key();
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    auto& other_value = Cast<ReferenceValue>(other);
    cmp = Compare(database_id(), other_value.database_id());
    if (!util::Same(cmp)) return cmp;

    return Compare(key(), other_value.key());
  }

  std::string ToString() const override {
    return absl::StrCat("Reference(key=", key().ToString(), ")");
  }

  size_t Hash() const override {
    return util::Hash(database_id(), key());
  }

  const Reference& value() const {
    return reference_;
  }

  const DatabaseId& database_id() const {
    return reference_.database_id();
  }

  const DocumentKey& key() const {
    return reference_.key();
  }

 private:
  Reference reference_;
};

class GeoPointValue : public BaseValue {
 public:
  explicit GeoPointValue(GeoPoint value) : value_(value) {
  }

  Type type() const override {
    return Type::GeoPoint;
  }

  std::string ToString() const override {
    return util::ToString(value_);
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<GeoPointValue>(other);
    return value_ == other_value.value_;
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    auto& other_value = Cast<GeoPointValue>(other);
    return Compare(value_, other_value.value_);
  }

  size_t Hash() const override {
    return util::Hash(value_.latitude(), value_.longitude());
  }

  const GeoPoint& value() const {
    return value_;
  }

 private:
  GeoPoint value_;
};

class ArrayContents : public FieldValue::BaseValue {
 public:
  explicit ArrayContents(FieldValue::Array value) : value_(std::move(value)) {
  }

  Type type() const override {
    return Type::Array;
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<ArrayContents>(other);
    return absl::c_equal(value_, other_value.value_);
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    auto& other_value = Cast<ArrayContents>(other);
    return util::CompareContainer(value_, other_value.value_);
  }

  std::string ToString() const override {
    return util::ToString(value_);
  }

  size_t Hash() const override {
    return util::Hash(value_);
  }

  const FieldValue::Array& value() const {
    return value_;
  }

 private:
  FieldValue::Array value_;
};

class MapContents : public FieldValue::BaseValue {
 public:
  explicit MapContents(FieldValue::Map value) : value_(std::move(value)) {
  }

  Type type() const override {
    return Type::Object;
  }

  bool Equals(const BaseValue& other) const override {
    if (type() != other.type()) return false;

    auto& other_value = Cast<MapContents>(other);
    return absl::c_equal(value_, other_value.value_);
  }

  ComparisonResult CompareTo(const BaseValue& other) const override {
    ComparisonResult cmp = CompareTypes(other);
    if (!util::Same(cmp)) return cmp;

    auto& other_value = Cast<MapContents>(other);
    return util::CompareContainer(value_, other_value.value_);
  }

  std::string ToString() const override {
    return util::ToString(value_);
  }

  size_t Hash() const override {
    size_t result = 0;
    for (auto&& entry : value_) {
      result = util::Hash(result, entry.first, entry.second);
    }
    return result;
  }

  const FieldValue::Map& value() const {
    return value_;
  }

 private:
  FieldValue::Map value_;
};

}  // namespace

FieldValue::FieldValue() : FieldValue(std::make_shared<NullValue>()) {
}

bool FieldValue::Comparable(Type lhs, Type rhs) {
  switch (lhs) {
    case Type::Integer:
    case Type::Double:
      return rhs == Type::Integer || rhs == Type::Double;
    case Type::Timestamp:
    case Type::ServerTimestamp:
      return rhs == Type::Timestamp || rhs == Type::ServerTimestamp;
    default:
      return lhs == rhs;
  }
}

bool FieldValue::boolean_value() const {
  HARD_ASSERT(type() == Type::Boolean);
  return Cast<BooleanValue>(*rep_).value();
}

int64_t FieldValue::integer_value() const {
  HARD_ASSERT(type() == Type::Integer);
  return Cast<IntegerValue>(*rep_).value();
}

double FieldValue::double_value() const {
  HARD_ASSERT(type() == Type::Double);
  return Cast<DoubleValue>(*rep_).value();
}

Timestamp FieldValue::timestamp_value() const {
  HARD_ASSERT(type() == Type::Timestamp);
  return Cast<TimestampValue>(*rep_).value();
}

const ServerTimestamp& FieldValue::server_timestamp_value() const {
  HARD_ASSERT(type() == Type::ServerTimestamp);
  return Cast<ServerTimestampValue>(*rep_).value();
}

const std::string& FieldValue::string_value() const {
  HARD_ASSERT(type() == Type::String);
  return Cast<StringValue>(*rep_).value();
}

const ByteString& FieldValue::blob_value() const {
  HARD_ASSERT(type() == Type::Blob);
  return Cast<BlobValue>(*rep_).value();
}

const Reference& FieldValue::reference_value() const {
  HARD_ASSERT(type() == Type::Reference);
  return Cast<ReferenceValue>(*rep_).value();
}

const GeoPoint& FieldValue::geo_point_value() const {
  HARD_ASSERT(type() == Type::GeoPoint);
  return Cast<GeoPointValue>(*rep_).value();
}

const FieldValue::Array& FieldValue::array_value() const {
  HARD_ASSERT(type() == Type::Array);
  return Cast<ArrayContents>(*rep_).value();
}

const FieldValue::Map& FieldValue::object_value() const {
  HARD_ASSERT(type() == Type::Object);
  return Cast<MapContents>(*rep_).value();
}

// TODO(rsgowman): Reorder this file to match its header.
ObjectValue ObjectValue::Set(const FieldPath& field_path,
                             const FieldValue& value) const {
  HARD_ASSERT(!field_path.empty(),
              "Cannot set field for empty path on FieldValue");

  // Set the value by recursively calling on child object.
  const std::string& child_name = field_path.first_segment();
  if (field_path.size() == 1) {
    // Recursive base case:
    return SetChild(child_name, value);
  } else {
    // Nested path. Recursively generate a new sub-object and then wrap a new
    // ObjectValue around the result.
    ObjectValue child = ObjectValue::Empty();
    const FieldValue::Map& entries = fv_.object_value();
    const auto iter = entries.find(child_name);
    if (iter != entries.end() && iter->second.type() == Type::Object) {
      child = ObjectValue(iter->second);
    }
    ObjectValue new_child = child.Set(field_path.PopFirst(), value);
    return SetChild(child_name, new_child.fv_);
  }
}

ObjectValue ObjectValue::Delete(const FieldPath& field_path) const {
  HARD_ASSERT(!field_path.empty(),
              "Cannot delete field for empty path on FieldValue");
  // Delete the value by recursively calling on child object.
  const std::string& child_name = field_path.first_segment();
  if (field_path.size() == 1) {
    return ObjectValue::FromMap(fv_.object_value().erase(child_name));
  } else {
    const FieldValue::Map& entries = fv_.object_value();
    const auto iter = entries.find(child_name);
    if (iter != entries.end() && iter->second.type() == Type::Object) {
      ObjectValue new_child =
          ObjectValue(iter->second).Delete(field_path.PopFirst());
      return SetChild(child_name, new_child.fv_);
    } else {
      // If the found value isn't an object, it cannot contain the remaining
      // segments of the path. We don't actually change a primitive value to
      // an object for a delete.
      return *this;
    }
  }
}

absl::optional<FieldValue> ObjectValue::Get(const FieldPath& field_path) const {
  const FieldValue* current = &this->fv_;
  for (const auto& path : field_path) {
    if (current->type() != Type::Object) {
      return absl::nullopt;
    }

    const FieldValue::Map& entries = current->object_value();
    const auto iter = entries.find(path);
    if (iter == entries.end()) {
      return absl::nullopt;
    } else {
      current = &iter->second;
    }
  }
  return *current;
}

FieldMask ObjectValue::ToFieldMask() const {
  std::set<FieldPath> fields;

  for (FieldValue::Map::const_iterator iter = fv_.object_value().begin();
       iter != fv_.object_value().end(); ++iter) {
    FieldPath current_path{iter->first};
    FieldValue value = iter->second;

    if (value.type() == Type::Object) {
      ObjectValue nested_map{value};
      FieldMask nested_mask = nested_map.ToFieldMask();
      if (nested_mask.size() == 0) {
        // Preserve the empty map by adding it to the FieldMask.
        fields.insert(current_path);
      } else {
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        for (const FieldPath& nested_path : nested_mask) {
          fields.insert(current_path.Append(nested_path));
        }
      }
    } else {
      fields.insert(current_path);
    }
  }
  return FieldMask(fields);
}

ObjectValue ObjectValue::SetChild(const std::string& child_name,
                                  const FieldValue& value) const {
  return ObjectValue::FromMap(fv_.object_value().insert(child_name, value));
}

FieldValue FieldValue::Null() {
  return FieldValue();
}

FieldValue FieldValue::True() {
  return FieldValue(std::make_shared<BooleanValue>(true));
}

FieldValue FieldValue::False() {
  return FieldValue(std::make_shared<BooleanValue>(false));
}

FieldValue FieldValue::FromBoolean(bool value) {
  return value ? True() : False();
}

FieldValue FieldValue::Nan() {
  return FieldValue::FromDouble(NAN);
}

FieldValue FieldValue::EmptyObject() {
  return FieldValue::FromMap(FieldValue::Map());
}

FieldValue FieldValue::FromInteger(int64_t value) {
  return FieldValue(std::make_shared<IntegerValue>(value));
}

// We use a canonical NaN bit pattern that's common for both Objective-C and
// Java. Specifically:
//
//   - sign: 0
//   - exponent: 11 bits, all 1
//   - significand: 52 bits, MSB=1, rest=0
//
// This matches the Firestore backend which uses Double.doubleToLongBits from
// the JDK (which is defined to normalize all NaNs to this value). This also
// happens to be a common value for NAN in C++, but C++ does not require this
// specific NaN value to be used, so we normalize.
const uint64_t kCanonicalNanBits = 0x7ff8000000000000ULL;

FieldValue FieldValue::FromDouble(double value) {
  static double canonical_nan = absl::bit_cast<double>(kCanonicalNanBits);
  if (std::isnan(value)) {
    value = canonical_nan;
  }

  return FieldValue(std::make_shared<DoubleValue>(value));
}

FieldValue FieldValue::FromTimestamp(const Timestamp& value) {
  return FieldValue(std::make_shared<TimestampValue>(value));
}

FieldValue FieldValue::FromServerTimestamp(
    const Timestamp& local_write_time,
    absl::optional<FieldValue> previous_value) {
  return FieldValue(std::make_shared<ServerTimestampValue>(
      ServerTimestamp(local_write_time, std::move(previous_value))));
}

FieldValue FieldValue::FromString(const char* value) {
  return FieldValue(std::make_shared<StringValue>(value));
}

FieldValue FieldValue::FromString(const std::string& value) {
  return FieldValue(std::make_shared<StringValue>(value));
}

FieldValue FieldValue::FromString(std::string&& value) {
  return FieldValue(std::make_shared<StringValue>(std::move(value)));
}

FieldValue FieldValue::FromBlob(ByteString blob) {
  return FieldValue(std::make_shared<BlobValue>(std::move(blob)));
}

FieldValue FieldValue::FromReference(DatabaseId database_id, DocumentKey key) {
  return FieldValue(std::make_shared<ReferenceValue>(
      Reference(std::move(database_id), std::move(key))));
}

FieldValue FieldValue::FromGeoPoint(const GeoPoint& value) {
  return FieldValue(std::make_shared<GeoPointValue>(value));
}

FieldValue FieldValue::FromArray(const Array& value) {
  return FieldValue(std::make_shared<ArrayContents>(value));
}

FieldValue FieldValue::FromArray(Array&& value) {
  return FieldValue(std::make_shared<ArrayContents>(std::move(value)));
}

FieldValue FieldValue::FromMap(const Map& value) {
  return FieldValue(std::make_shared<MapContents>(value));
}

FieldValue FieldValue::FromMap(FieldValue::Map&& value) {
  return FieldValue(std::make_shared<MapContents>(std::move(value)));
}

bool operator==(const FieldValue& lhs, const FieldValue& rhs) {
  return lhs.rep_->Equals(*rhs.rep_);
}

std::ostream& operator<<(std::ostream& os, const FieldValue& value) {
  return os << value.ToString();
}

ComparisonResult FieldValue::BaseValue::CompareTypes(
    const BaseValue& other) const {
  Type this_type = type();
  Type other_type = other.type();

  // This does not necessarily mean the types are actually the same. For those
  // types that allow mixed types they'll need to handle this further.
  if (FieldValue::Comparable(this_type, other_type)) {
    return ComparisonResult::Same;
  }

  // Otherwise, the types themselves are defined in order.
  return Compare(this_type, other_type);
}

// Default construction is insufficient because FieldValue's default constructor
// would make this have Type::Null, which then blows up when you try to Set
// on it.
ObjectValue::ObjectValue() : fv_(FieldValue::EmptyObject()) {
}

ObjectValue ObjectValue::FromMap(const FieldValue::Map& value) {
  return ObjectValue(FieldValue::FromMap(value));
}

ObjectValue ObjectValue::FromMap(FieldValue::Map&& value) {
  return ObjectValue(FieldValue::FromMap(std::move(value)));
}

ComparisonResult ObjectValue::CompareTo(const ObjectValue& rhs) const {
  return fv_.CompareTo(rhs.fv_);
}

const FieldValue::Map& ObjectValue::GetInternalValue() const {
  return fv_.object_value();
}

std::string ObjectValue::ToString() const {
  return fv_.ToString();
}

std::ostream& operator<<(std::ostream& os, const ObjectValue& value) {
  return os << value.ToString();
}

size_t ObjectValue::Hash() const {
  return fv_.Hash();
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase
