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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_PATCH_MUTATION_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_PATCH_MUTATION_H_

#include <memory>
#include <string>
#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/field_mask.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"
#include "Firestore/core/src/firebase/firestore/model/mutation.h"
#include "Firestore/core/src/firebase/firestore/model/precondition.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace model {

/**
 * A mutation that modifies fields of the document at the given key with the
 * given values. The values are applied through a field mask:
 *
 * - When a field is in both the mask and the values, the corresponding field is
 *   updated.
 * - When a field is in neither the mask nor the values, the corresponding field
 *   is unmodified.
 * - When a field is in the mask but not in the values, the corresponding field
 *   is deleted.
 * - When a field is not in the mask but is in the values, the values map is
 *   ignored.
 */
class PatchMutation : public Mutation {
 public:
  PatchMutation(DocumentKey key,
                ObjectValue value,
                FieldMask mask,
                Precondition precondition);

  /**
   * Casts a Mutation to a PatchMutation. This is a checked operation that will
   * assert if the type of the Mutation isn't actually Type::Patch.
   */
  explicit PatchMutation(const Mutation& mutation);

  /** Creates an invalid PatchMutation instance. */
  PatchMutation() = default;

  /**
   * Returns the fields and associated values to use when patching the document.
   */
  const ObjectValue& value() const {
    return patch_rep().value();
  }

  /**
   * Returns the mask to apply to value(), where only fields that are in both
   * the field_mask and the value will be updated.
   */
  const FieldMask& mask() const {
    return patch_rep().mask();
  }

 private:
  class Rep : public Mutation::Rep {
   public:
    Rep(DocumentKey&& key,
        ObjectValue&& value,
        FieldMask&& mask,
        Precondition&& precondition);

    Type type() const override {
      return Type::Patch;
    }

    const ObjectValue& value() const {
      return value_;
    }

    const FieldMask& mask() const {
      return mask_;
    }

    MaybeDocument ApplyToRemoteDocument(
        const absl::optional<MaybeDocument>& maybe_doc,
        const MutationResult& mutation_result) const override;

    absl::optional<MaybeDocument> ApplyToLocalView(
        const absl::optional<MaybeDocument>& maybe_doc,
        const absl::optional<MaybeDocument>&,
        const Timestamp&) const override;

    bool Equals(const Mutation::Rep& other) const override;

    size_t Hash() const override;

    std::string ToString() const override;

   private:
    ObjectValue PatchDocument(
        const absl::optional<MaybeDocument>& maybe_doc) const;

    ObjectValue PatchObject(ObjectValue obj) const;

    ObjectValue value_;
    FieldMask mask_;
  };

  const Rep& patch_rep() const {
    return static_cast<const Rep&>(rep());
  }
};

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_PATCH_MUTATION_H_
