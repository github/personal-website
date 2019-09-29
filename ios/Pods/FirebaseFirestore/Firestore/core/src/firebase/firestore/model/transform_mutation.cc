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

#include "Firestore/core/src/firebase/firestore/model/transform_mutation.h"

#include <memory>
#include <set>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/transform_operation.h"
#include "Firestore/core/src/firebase/firestore/model/unknown_document.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/to_string.h"
#include "absl/strings/str_cat.h"

namespace firebase {
namespace firestore {
namespace model {

static_assert(sizeof(Mutation) == sizeof(TransformMutation),
              "TransformMutation may not have additional members (everything "
              "goes in Rep)");

TransformMutation::TransformMutation(
    DocumentKey key, std::vector<FieldTransform> field_transforms)
    : Mutation(
          std::make_shared<Rep>(std::move(key), std::move(field_transforms))) {
}

TransformMutation::TransformMutation(const Mutation& mutation)
    : Mutation(mutation) {
  HARD_ASSERT(type() == Type::Transform);
}

TransformMutation::Rep::Rep(DocumentKey&& key,
                            std::vector<FieldTransform>&& field_transforms)
    : Mutation::Rep(std::move(key), Precondition::Exists(true)),
      field_transforms_(std::move(field_transforms)) {
  std::set<FieldPath> fields;
  for (const auto& transform : field_transforms_) {
    fields.insert(transform.path());
  }

  field_mask_ = FieldMask(std::move(fields));
}

MaybeDocument TransformMutation::Rep::ApplyToRemoteDocument(
    const absl::optional<MaybeDocument>& maybe_doc,
    const MutationResult& mutation_result) const {
  VerifyKeyMatches(maybe_doc);

  HARD_ASSERT(mutation_result.transform_results() != absl::nullopt,
              "Transform results missing from TransformMutation.");

  if (!precondition().IsValidFor(maybe_doc)) {
    // Since the mutation was not rejected, we know that the precondition
    // matched on the backend. We therefore must not have the expected version
    // of the document in our cache and return an UnknownDocument with the
    // known update_time.
    return UnknownDocument(key(), mutation_result.version());
  }

  // We only support transforms with precondition exists, so we can only apply
  // it to an existing document
  HARD_ASSERT(maybe_doc && maybe_doc->is_document(),
              "Unknown MaybeDocument type %s", maybe_doc->type());
  Document doc(*maybe_doc);

  HARD_ASSERT(mutation_result.transform_results() != absl::nullopt);

  std::vector<FieldValue> transform_results =
      ServerTransformResults(maybe_doc, *mutation_result.transform_results());

  ObjectValue new_data = TransformObject(doc.data(), transform_results);

  return Document(std::move(new_data), key(), mutation_result.version(),
                  DocumentState::kCommittedMutations);
}

absl::optional<MaybeDocument> TransformMutation::Rep::ApplyToLocalView(
    const absl::optional<MaybeDocument>& maybe_doc,
    const absl::optional<MaybeDocument>& base_doc,
    const Timestamp& local_write_time) const {
  VerifyKeyMatches(maybe_doc);

  if (!precondition().IsValidFor(maybe_doc)) {
    return maybe_doc;
  }

  // We only support transforms with precondition exists, so we can only apply
  // it to an existing document
  HARD_ASSERT(maybe_doc && maybe_doc->is_document(),
              "Unknown MaybeDocument type %s", maybe_doc->type());
  Document doc(*maybe_doc);

  std::vector<FieldValue> transform_results =
      LocalTransformResults(maybe_doc, base_doc, local_write_time);
  ObjectValue new_data = TransformObject(doc.data(), transform_results);

  return Document(std::move(new_data), doc.key(), doc.version(),
                  DocumentState::kLocalMutations);
}

absl::optional<ObjectValue> TransformMutation::Rep::ExtractBaseValue(
    const absl::optional<MaybeDocument>& maybe_doc) const {
  absl::optional<ObjectValue> base_object;

  for (const FieldTransform& transform : field_transforms_) {
    absl::optional<FieldValue> existing_value;
    if (maybe_doc && maybe_doc->is_document()) {
      existing_value = Document(*maybe_doc).field(transform.path());
    }

    absl::optional<FieldValue> coerced_value =
        transform.transformation().ComputeBaseValue(existing_value);
    if (coerced_value) {
      if (!base_object) {
        base_object = ObjectValue::Empty();
      }
      base_object = base_object->Set(transform.path(), *coerced_value);
    }
  }

  return base_object;
}

bool TransformMutation::Rep::Equals(const Mutation::Rep& other) const {
  if (!Mutation::Rep::Equals(other)) return false;

  const auto& other_rep = static_cast<const TransformMutation::Rep&>(other);
  return field_transforms_ == other_rep.field_transforms_;
}

std::string TransformMutation::Rep::ToString() const {
  return absl::StrCat("TransformMutation(key=", key().ToString(),
                      ", transforms=", util::ToString(field_transforms()), ")");
}

std::vector<FieldValue> TransformMutation::Rep::ServerTransformResults(
    const absl::optional<MaybeDocument>& base_doc,
    const std::vector<FieldValue>& server_transform_results) const {
  HARD_ASSERT(field_transforms_.size() == server_transform_results.size(),
              "server transform result size (%s) should match field transforms "
              "size (%s)",
              server_transform_results.size(), field_transforms_.size());

  std::vector<FieldValue> transform_results;
  for (size_t i = 0; i < server_transform_results.size(); i++) {
    const FieldTransform& field_transform = field_transforms_[i];
    const TransformOperation& transform = field_transform.transformation();

    absl::optional<model::FieldValue> previous_value;
    if (base_doc && base_doc->is_document()) {
      previous_value = Document(*base_doc).field(field_transform.path());
    }

    transform_results.push_back(transform.ApplyToRemoteDocument(
        previous_value, server_transform_results[i]));
  }
  return transform_results;
}

std::vector<FieldValue> TransformMutation::Rep::LocalTransformResults(
    const absl::optional<MaybeDocument>& maybe_doc,
    const absl::optional<MaybeDocument>& base_doc,
    const Timestamp& local_write_time) const {
  std::vector<FieldValue> transform_results;
  for (const FieldTransform& field_transform : field_transforms_) {
    const TransformOperation& transform = field_transform.transformation();

    absl::optional<FieldValue> previous_value;
    if (maybe_doc && maybe_doc->is_document()) {
      previous_value = Document(*maybe_doc).field(field_transform.path());
    }

    if (!previous_value && base_doc && base_doc->is_document()) {
      // If the current document does not contain a value for the mutated field,
      // use the value that existed before applying this mutation batch. This
      // solves an edge case where a PatchMutation clears the values in a nested
      // map before the TransformMutation is applied.
      previous_value = Document(*base_doc).field(field_transform.path());
    }
    transform_results.push_back(
        transform.ApplyToLocalView(previous_value, local_write_time));
  }
  return transform_results;
}

ObjectValue TransformMutation::Rep::TransformObject(
    ObjectValue object_value,
    const std::vector<FieldValue>& transform_results) const {
  HARD_ASSERT(transform_results.size() == field_transforms_.size(),
              "Transform results size mismatch.");

  for (size_t i = 0; i < field_transforms_.size(); i++) {
    const FieldTransform& field_transform = field_transforms_[i];
    const FieldPath& field_path = field_transform.path();
    object_value = object_value.Set(field_path, transform_results[i]);
  }
  return object_value;
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase
