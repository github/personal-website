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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_DOCUMENT_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_DOCUMENT_H_

#include <iosfwd>
#include <memory>
#include <string>

#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"
#include "absl/types/any.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace model {

/** Describes the `has_pending_writes` state of a document. */
enum class DocumentState {
  /**
   * Local mutations applied via the mutation queue. Document is potentially
   * inconsistent.
   */
  kLocalMutations,

  /**
   * Mutations applied based on a write acknowledgment. Document is potentially
   * inconsistent.
   */
  kCommittedMutations,

  /** No mutations applied. Document was sent to us by Watch. */
  kSynced,
};

std::ostream& operator<<(std::ostream& os, DocumentState state);

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
class Document : public MaybeDocument {
 public:
  Document(ObjectValue data,
           DocumentKey key,
           SnapshotVersion version,
           DocumentState document_state);

  Document(ObjectValue data,
           DocumentKey key,
           SnapshotVersion version,
           DocumentState document_state,
           absl::any proto);

  /**
   * Casts a MaybeDocument to a Document. This is a checked operation that will
   * assert if the type of the MaybeDocument isn't actually Type::Document.
   */
  explicit Document(const MaybeDocument& document);

  /** Creates an invalid Document instance. */
  Document() = default;

  const ObjectValue& data() const;

  absl::optional<FieldValue> field(const FieldPath& path) const;

  DocumentState document_state() const;

  bool has_local_mutations() const;

  bool has_committed_mutations() const;

  const absl::any& proto() const;

  /** Compares against another Document. */
  friend bool operator==(const Document& lhs, const Document& rhs);

  friend std::ostream& operator<<(std::ostream& os, const Document& doc);

 private:
  class Rep;

  const Rep& doc_rep() const;
};

inline bool operator!=(const Document& lhs, const Document& rhs) {
  return !(lhs == rhs);
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_DOCUMENT_H_
