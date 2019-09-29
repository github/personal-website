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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_TRANSFORM_MUTATION_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_TRANSFORM_MUTATION_H_

#include <string>
#include <vector>

#include "Firestore/core/src/firebase/firestore/model/field_mask.h"
#include "Firestore/core/src/firebase/firestore/model/field_transform.h"
#include "Firestore/core/src/firebase/firestore/model/mutation.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace model {

/**
 * A mutation that modifies specific fields of the document with transform
 * operations. Tranforms include operation like increment and server
 * timestamps. See tranform_operations.h for all supported operations.
 *
 * It is somewhat similar to a PatchMutation in that it patches specific fields
 * and has no effect when applied to nullopt or a DeletedDocument (see comments
 * on PatchMutation for more details).
 */
class TransformMutation : public Mutation {
 public:
  TransformMutation(DocumentKey key,
                    std::vector<FieldTransform> field_transforms);

  /**
   * Casts a Mutation to a TransformMutation. This is a checked operation that
   * will assert if the type of the Mutation isn't actually Type::Transform.
   */
  explicit TransformMutation(const Mutation& mutation);

  /** Creates an invalid TransformMutation instance. */
  TransformMutation() = default;

  /** Returns the field transforms to use when transforming the document. */
  const std::vector<FieldTransform>& field_transforms() const {
    return set_rep().field_transforms();
  }

 private:
  class Rep : public Mutation::Rep {
   public:
    Rep(DocumentKey&& key, std::vector<FieldTransform>&& field_transforms);

    Type type() const override {
      return Type::Transform;
    }

    const std::vector<FieldTransform>& field_transforms() const {
      return field_transforms_;
    }

    MaybeDocument ApplyToRemoteDocument(
        const absl::optional<MaybeDocument>& maybe_doc,
        const MutationResult& mutation_result) const override;

    absl::optional<MaybeDocument> ApplyToLocalView(
        const absl::optional<MaybeDocument>& maybe_doc,
        const absl::optional<MaybeDocument>&,
        const Timestamp&) const override;

    absl::optional<ObjectValue> ExtractBaseValue(
        const absl::optional<MaybeDocument>& maybe_doc) const override;

    bool Equals(const Mutation::Rep& other) const override;

    std::string ToString() const override;

   private:
    /**
     * Creates an array of "transform results" (a transform result is a field
     * value representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param base_doc The document prior to applying this mutation batch.
     * @param server_transform_results The transform results received by the
     *     server.
     * @return The transform results array.
     */
    std::vector<FieldValue> ServerTransformResults(
        const absl::optional<MaybeDocument>& base_doc,
        const std::vector<FieldValue>& server_transform_results) const;

    /**
     * Creates an array of "transform results" (a transform result is a field
     * value representing the result of applying a transform) for use when
     * applying an TransformMutation locally.
     *
     * @param maybe_doc The current state of the document after applying all
     *     previous mutations.
     * @param base_doc The document prior to applying this mutation batch.
     * @param local_write_time The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @return The transform results array.
     */
    std::vector<FieldValue> LocalTransformResults(
        const absl::optional<MaybeDocument>& maybe_doc,
        const absl::optional<MaybeDocument>& base_doc,
        const Timestamp& local_write_time) const;

    ObjectValue TransformObject(
        ObjectValue object_value,
        const std::vector<FieldValue>& transform_results) const;

    std::vector<FieldTransform> field_transforms_;
    FieldMask field_mask_;
  };

  const Rep& set_rep() const {
    return static_cast<const Rep&>(rep());
  }
};

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_TRANSFORM_MUTATION_H_
