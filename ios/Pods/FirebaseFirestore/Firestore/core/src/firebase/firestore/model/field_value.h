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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_FIELD_VALUE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_FIELD_VALUE_H_

#include <cmath>
#include <cstdint>
#include <iosfwd>
#include <memory>
#include <string>
#include <utility>
#include <vector>

#include "Firestore/core/include/firebase/firestore/geo_point.h"
#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/immutable/sorted_map.h"
#include "Firestore/core/src/firebase/firestore/model/database_id.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/field_mask.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "absl/base/attributes.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace model {

class ObjectValue;

/**
 * tagged-union class representing an immutable data value as stored in
 * Firestore. FieldValue represents all the different kinds of values
 * that can be stored in fields in a document.
 */
class FieldValue {
 public:
  class Reference;
  class ServerTimestamp;
  using Array = std::vector<FieldValue>;
  using Map = immutable::SortedMap<std::string, FieldValue>;

  /**
   * All the different kinds of values that can be stored in fields in
   * a document. The types of the same comparison order should be defined
   * together as a group. The order of each group is defined by the Firestore
   * backend and is available at:
   *     https://firebase.google.com/docs/firestore/manage-data/data-types
   */
  enum class Type {
    Null,     // Null
    Boolean,  // Boolean
    Integer,  // Number type starts here
    Double,
    Timestamp,  // Timestamp type starts here
    ServerTimestamp,
    String,     // String
    Blob,       // Blob
    Reference,  // Reference
    GeoPoint,   // GeoPoint
    Array,      // Array
    Object,     // Object
    // New enum should not always been added at the tail. Add it to the correct
    // position instead, see the doc comment above.
  };

  FieldValue();

  FieldValue(ObjectValue object);  // NOLINT(runtime/explicit)

  /** Returns the true type for this value. */
  Type type() const {
    return rep_->type();
  }

  bool is_boolean() const {
    return type() == Type::Boolean;
  }

  bool is_integer() const {
    return type() == Type::Integer;
  }

  bool is_double() const {
    return type() == Type::Double;
  }

  bool is_timestamp() const {
    return type() == Type::Timestamp;
  }

  bool is_server_timestamp() const {
    return type() == Type::ServerTimestamp;
  }

  bool is_string() const {
    return type() == Type::String;
  }

  bool is_blob() const {
    return type() == Type::Blob;
  }

  bool is_reference() const {
    return type() == Type::Reference;
  }

  bool is_geo_point() const {
    return type() == Type::GeoPoint;
  }

  bool is_array() const {
    return type() == Type::Array;
  }

  bool is_object() const {
    return type() == Type::Object;
  }

  /**
   * Checks if the given type is a numeric, such as Type::Integer or
   * Type::Double.
   */
  bool is_number() const {
    Type t = type();
    return t == Type::Integer || t == Type::Double;
  }

  /**
   * PORTING NOTE: This deviates from the other platforms that define TypeOrder.
   * Since we already define Type for union types, we use it together with this
   * function to achieve the equivalent order of types i.e.
   *     i) if two types are comparable, then they are of equal order;
   *    ii) otherwise, their order is the same as the order of their Type.
   */
  static bool Comparable(Type lhs, Type rhs);

  bool boolean_value() const;

  int64_t integer_value() const;

  double double_value() const;

  Timestamp timestamp_value() const;

  const ServerTimestamp& server_timestamp_value() const;

  const std::string& string_value() const;

  const nanopb::ByteString& blob_value() const;

  const Reference& reference_value() const;

  const GeoPoint& geo_point_value() const;

  const Array& array_value() const;

  const Map& object_value() const;

  bool is_null() const {
    return type() == Type::Null;
  }

  bool is_nan() const {
    if (type() != Type::Double) return false;
    return std::isnan(double_value());
  }

  /** factory methods. */
  static FieldValue Null();
  static FieldValue True();
  static FieldValue False();
  static FieldValue Nan();
  static FieldValue EmptyObject();
  static FieldValue FromBoolean(bool value);
  static FieldValue FromInteger(int64_t value);
  static FieldValue FromDouble(double value);
  static FieldValue FromTimestamp(const Timestamp& value);
  static FieldValue FromServerTimestamp(
      const Timestamp& local_write_time,
      absl::optional<FieldValue> previous_value = absl::nullopt);
  static FieldValue FromString(const char* value);
  static FieldValue FromString(const std::string& value);
  static FieldValue FromString(std::string&& value);
  static FieldValue FromBlob(nanopb::ByteString blob);
  static FieldValue FromReference(DatabaseId database_id, DocumentKey value);
  static FieldValue FromGeoPoint(const GeoPoint& value);
  static FieldValue FromArray(const Array& value);
  static FieldValue FromArray(Array&& value);
  static FieldValue FromMap(const Map& value);
  static FieldValue FromMap(Map&& value);

  size_t Hash() const {
    return rep_->Hash();
  }

  util::ComparisonResult CompareTo(const FieldValue& rhs) const {
    return rep_->CompareTo(*rhs.rep_);
  }

  /**
   * Checks if the two values are equal, returning false if the value is
   * perceptibly different in any regard.
   *
   * Comparison for FieldValues is defined by whether or not values should
   * match for the purposes of querying. Comparison therefore makes the broadest
   * possible allowance, looking only for logical equality. This means that e.g.
   * -0.0, +0.0 and 0 (floating point and integer zeros) are all considered the
   * same value for comparison purposes.
   *
   * Equality for FieldValues is defined by whether or not a user could
   * perceive a change to the value. That is, a change from integer zero to
   * a double zero can be perceived and so these values are unequal despite
   * comparing same.
   *
   * This makes FieldValue one of the special cases where equality is
   * inconsistent with comparison. There are cases where CompareTo will return
   * Same but operator== will return false.
   */
  friend bool operator==(const FieldValue& lhs, const FieldValue& rhs);

  std::string ToString() const {
    return rep_->ToString();
  }

  friend std::ostream& operator<<(std::ostream& os, const FieldValue& value);

  friend class ObjectValue;
  class BaseValue {
   public:
    virtual ~BaseValue() = default;

    virtual Type type() const = 0;

    virtual std::string ToString() const = 0;

    virtual bool Equals(const BaseValue& other) const = 0;

    virtual util::ComparisonResult CompareTo(const BaseValue& other) const = 0;

    virtual size_t Hash() const = 0;

   protected:
    util::ComparisonResult CompareTypes(const BaseValue& other) const;
  };

 private:
  explicit FieldValue(std::shared_ptr<BaseValue> rep) : rep_(std::move(rep)) {
  }

  std::shared_ptr<BaseValue> rep_;
};

/** A structured object value stored in Firestore. */
class ObjectValue : public util::Comparable<ObjectValue> {
 public:
  // Default constructible to make using this easy, though prefer
  // ObjectValue::Empty() to make intentions clear to readers.
  ObjectValue();

  explicit ObjectValue(FieldValue fv) : fv_(std::move(fv)) {
    HARD_ASSERT(fv_.type() == FieldValue::Type::Object);
  }

  static ObjectValue Empty() {
    return ObjectValue(FieldValue::EmptyObject());
  }

  static ObjectValue FromMap(const FieldValue::Map& value);
  static ObjectValue FromMap(FieldValue::Map&& value);

  /**
   * Returns the value at the given path or absl::nullopt. If the path is empty,
   * an identical copy of the FieldValue is returned.
   *
   * @param field_path the path to search.
   * @return The value at the path or absl::nullopt if it doesn't exist.
   */
  absl::optional<FieldValue> Get(const FieldPath& field_path) const;

  /**
   * Returns a FieldValue with the field at the named path set to value.
   * Any absent parent of the field will also be created accordingly.
   *
   * @param field_path The field path to set. Cannot be empty.
   * @param value The value to set.
   * @return A new FieldValue with the field set.
   */
  ObjectValue Set(const FieldPath& field_path, const FieldValue& value) const;
  ObjectValue Set(const FieldPath& field_path, const ObjectValue& value) const {
    return Set(field_path, value.fv_);
  }

  /**
   * Returns a FieldValue with the field path deleted. If there is no field at
   * the specified path, the returned value is an identical copy.
   *
   * @param field_path The field path to remove. Cannot be empty.
   * @return A new FieldValue with the field path removed.
   */
  ObjectValue Delete(const FieldPath& field_path) const;

  /**
   * Returns a FieldMask built from all FieldPaths starting from this
   * ObjectValue, including paths from nested objects.
   */
  FieldMask ToFieldMask() const;

  // TODO(rsgowman): Add Value() method?
  //
  // Java has a value() method which returns a (non-immutable) java.util.Map,
  // which is a copy of the immutable map, but with some fields (such as server
  // timestamps) optionally resolved. Do we need the same here?

  const FieldValue::Map& GetInternalValue() const;

  const FieldValue& AsFieldValue() const {
    return fv_;
  }

  util::ComparisonResult CompareTo(const ObjectValue& rhs) const;

  std::string ToString() const;
  friend std::ostream& operator<<(std::ostream& os, const ObjectValue& value);

  size_t Hash() const;

  size_t size() const {
    return fv_.object_value().size();
  }

 private:
  ObjectValue SetChild(const std::string& child_name,
                       const FieldValue& value) const;

  FieldValue fv_;
};

class FieldValue::Reference {
 public:
  Reference(DatabaseId database_id, DocumentKey key)
      : database_id_(std::move(database_id)), key_(std::move(key)) {
  }

  const DatabaseId& database_id() const {
    return database_id_;
  }

  const DocumentKey& key() const {
    return key_;
  }

 private:
  DatabaseId database_id_;
  DocumentKey key_;
};

class FieldValue::ServerTimestamp {
 public:
  ServerTimestamp(Timestamp local_write_time,
                  absl::optional<FieldValue> previous_value)
      : local_write_time_(local_write_time),
        previous_value_(std::move(previous_value)) {
  }

  const Timestamp& local_write_time() const {
    return local_write_time_;
  }

  const absl::optional<FieldValue>& previous_value() const {
    return previous_value_;
  }

 private:
  Timestamp local_write_time_;
  absl::optional<FieldValue> previous_value_;
};

// Pretend you can automatically upcast from ObjectValue to FieldValue.
inline FieldValue::FieldValue(ObjectValue object)
    : FieldValue(object.AsFieldValue()) {
}

inline bool operator!=(const FieldValue& lhs, const FieldValue& rhs) {
  // See operator== for why this isn't using util::Same().
  return !(lhs == rhs);
}

inline bool operator<(const FieldValue& lhs, const FieldValue& rhs) {
  return util::Ascending(lhs.CompareTo(rhs));
}
inline bool operator>(const FieldValue& lhs, const FieldValue& rhs) {
  return util::Descending(lhs.CompareTo(rhs));
}
inline bool operator<=(const FieldValue& lhs, const FieldValue& rhs) {
  return !(rhs < lhs);
}
inline bool operator>=(const FieldValue& lhs, const FieldValue& rhs) {
  return !(lhs < rhs);
}

// A bit pattern for our canonical NaN value. Exposed here for testing.
ABSL_CONST_INIT extern const uint64_t kCanonicalNanBits;

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_FIELD_VALUE_H_
