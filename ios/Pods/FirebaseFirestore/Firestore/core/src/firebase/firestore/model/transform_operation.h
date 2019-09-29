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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_TRANSFORM_OPERATION_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_TRANSFORM_OPERATION_H_

#include <iosfwd>
#include <memory>
#include <string>
#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "absl/types/optional.h"

namespace firebase {

class Timestamp;

namespace firestore {
namespace model {

/**
 * Represents a transform within a TransformMutation.
 *
 * Note: TransformOperation and its subclasses are specially designed to avoid
 * slicing. You can assign a subclass of TransformOperation to an instance of
 * TransformOperation and the full value is preserved, unsliced. Each subclass
 * declares an explicit constructor that can recover the derived type. This
 * means that code like this will work:
 *
 *     ArrayTransform array_transform(...);
 *     TransformOperation transform = array_transform;
 *     ArrayTransform recovered(transform);
 *
 * The final line results in an explicit check that will fail if the type of
 * the underlying data is not actually an ArrayTransform.
 */
class TransformOperation {
 public:
  /** All the different kinds to TransformOperation. */
  enum class Type {
    ServerTimestamp,
    ArrayUnion,
    ArrayRemove,
    Increment,
  };

  TransformOperation() = default;

  /** Returns the actual type. */
  Type type() const {
    return rep().type();
  }

  /**
   * Computes the local transform result against the provided `previous_value`,
   * optionally using the provided local_write_time.
   */
  FieldValue ApplyToLocalView(const absl::optional<FieldValue>& previous_value,
                              const Timestamp& local_write_time) const {
    return rep().ApplyToLocalView(previous_value, local_write_time);
  }

  /**
   * Computes a final transform result after the transform has been acknowledged
   * by the server, potentially using the server-provided transform_result.
   */
  FieldValue ApplyToRemoteDocument(
      const absl::optional<FieldValue>& previous_value,
      const FieldValue& transform_result) const {
    return rep().ApplyToRemoteDocument(previous_value, transform_result);
  }

  /**
   * If this transform operation is not idempotent, returns the base value to
   * persist for this transform operation. If a base value is returned, the
   * transform operation is always applied to this base value, even if document
   * has already been updated.
   *
   * Base values provide consistent behavior for non-idempotent transforms and
   * allow us to return the same latency-compensated value even if the backend
   * has already applied the transform operation. The base value is empty for
   * idempotent transforms, as they can be re-played even if the backend has
   * already applied them.
   *
   * @return a base value to store along with the mutation, or empty for
   *     idempotent transforms.
   */
  absl::optional<FieldValue> ComputeBaseValue(
      const absl::optional<FieldValue>& previous_value) const {
    return rep().ComputeBaseValue(previous_value);
  }

  /** Returns whether the two are equal. */
  friend bool operator==(const TransformOperation& lhs,
                         const TransformOperation& rhs);

  size_t Hash() const {
    return rep().Hash();
  }

  std::string ToString() const {
    return rep_ ? rep().ToString() : "(invalid)";
  }

  friend std::ostream& operator<<(std::ostream& os,
                                  const TransformOperation& op);

 protected:
  class Rep {
   public:
    virtual ~Rep() = default;

    virtual Type type() const = 0;

    virtual FieldValue ApplyToLocalView(
        const absl::optional<FieldValue>& previous_value,
        const Timestamp& local_write_time) const = 0;

    virtual FieldValue ApplyToRemoteDocument(
        const absl::optional<FieldValue>& previous_value,
        const FieldValue& transform_result) const = 0;

    virtual absl::optional<FieldValue> ComputeBaseValue(
        const absl::optional<FieldValue>& previous_value) const = 0;

    virtual bool Equals(const TransformOperation::Rep& other) const = 0;

    virtual size_t Hash() const = 0;

    virtual std::string ToString() const = 0;
  };

  explicit TransformOperation(std::shared_ptr<const Rep> rep);

  const Rep& rep() const {
    return *NOT_NULL(rep_);
  }

 private:
  std::shared_ptr<const Rep> rep_;
};

/** Transforms a value into a server-generated timestamp. */
class ServerTimestampTransform : public TransformOperation {
 public:
  ServerTimestampTransform();

 private:
  class Rep;
};

/**
 * Transforms an array via a union or remove operation (for convenience, we use
 * this class for both `Type::ArrayUnion` and `Type::ArrayRemove`).
 */
class ArrayTransform : public TransformOperation {
 public:
  ArrayTransform(Type type, std::vector<FieldValue> elements);

  /**
   * Casts a TransformOperation to an ArrayTransform. This is a checked
   * operation that will assert if the type of the TransformOperation isn't
   * actually `Type::ArrayUnion` or `Type::ArrayRemove`.
   */
  explicit ArrayTransform(const TransformOperation& op);

  ArrayTransform() = default;

  const std::vector<model::FieldValue>& elements() const;

 private:
  class Rep;

  const Rep& array_rep() const;
};

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to longs or doubles and resolves
 * overflows to LONG_MAX/LONG_MIN.
 */
class NumericIncrementTransform : public TransformOperation {
 public:
  explicit NumericIncrementTransform(FieldValue operand);

  /**
   * Casts a TransformOperation to a NumericIncrementTransform. This is a
   * checked operation that will assert if the type of the TransformOperation
   * isn't actually Type::Increment.
   */
  explicit NumericIncrementTransform(const TransformOperation& op);

  const FieldValue& operand() const;

 private:
  class Rep;
};

/** Returns whether the two are not equal. */
inline bool operator!=(const TransformOperation& lhs,
                       const TransformOperation& rhs) {
  return !(lhs == rhs);
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_TRANSFORM_OPERATION_H_
