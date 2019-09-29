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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_MUTATION_BATCH_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_MUTATION_BATCH_H_

#include <iosfwd>
#include <memory>
#include <string>
#include <vector>

#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/model/document_map.h"
#include "Firestore/core/src/firebase/firestore/model/mutation.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"

namespace firebase {
namespace firestore {
namespace model {

class MutationBatchResult;

/**
 * A BatchID that was searched for and not found or a batch ID value known to
 * be before all known batches.
 *
 * BatchId values from the local store are non-negative so this value is before
 * all batches.
 */
constexpr BatchId kBatchIdUnknown = -1;

// TODO(rsgowman): Port MutationBatchResult

/**
 * A batch of mutations that will be sent as one unit to the backend. Batches
 * can be marked as a tombstone if the mutation queue does not remove them
 * immediately. When a batch is a tombstone it has no mutations.
 */
class MutationBatch {
 public:
  /**
   * A batch ID that was searched for and not found or a batch ID value known
   * to be before all known batches.
   *
   * Batch ID values from the local store are non-negative so this value is
   * before all batches.
   */
  constexpr static int kUnknown = -1;

  MutationBatch(int batch_id,
                Timestamp local_write_time,
                std::vector<Mutation> base_mutations,
                std::vector<Mutation> mutations);

  /** The unique ID of this mutation batch. */
  int batch_id() const {
    return batch_id_;
  }

  /**
   * Returns the local time at which the mutation batch was created / written;
   * used to assign local times to server timestamps, etc.
   */
  const Timestamp& local_write_time() const {
    return local_write_time_;
  }

  /**
   * Mutations that are used to populate the base values when this mutation is
   * applied locally. This can be used to locally overwrite values that are
   * persisted in the remote document cache. Base mutations are never sent to
   * the backend.
   */
  const std::vector<Mutation>& base_mutations() const {
    return base_mutations_;
  }

  /**
   * The user-provided mutations in this mutation batch. User-provided
   * mutations are applied both locally and remotely on the backend.
   */
  const std::vector<Mutation>& mutations() const {
    return mutations_;
  }

  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to create a new remote document.
   *
   * @param maybe_doc The document to which to apply mutations or nullopt if
   *     there's no existing document.
   * @param document_key The key of the document to apply mutations to.
   * @param mutation_batch_result The result of applying the MutationBatch to
   *     the backend.
   */
  absl::optional<MaybeDocument> ApplyToRemoteDocument(
      absl::optional<MaybeDocument> maybe_doc,
      const DocumentKey& document_key,
      const MutationBatchResult& mutation_batch_result) const;

  /**
   * Estimates the latency compensated view of all the mutations in this batch
   * applied to the given MaybeDocument.
   *
   * Unlike ApplyToRemoteDocument, this method is used before the mutation has
   * been committed and so it's possible that the mutation is operating on a
   * locally non-existent document and may produce a non-existent document.
   *
   * @param maybe_doc The document to which to apply mutations or nullopt if
   *     there's no existing document.
   * @param document_key The key of the document to apply mutations to.
   */
  absl::optional<MaybeDocument> ApplyToLocalDocument(
      absl::optional<MaybeDocument> maybe_doc,
      const DocumentKey& document_key) const;

  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch.
   */
  MaybeDocumentMap ApplyToLocalDocumentSet(
      const MaybeDocumentMap& document_set) const;

  /**
   * Returns the set of unique keys referenced by all mutations in the batch.
   */
  DocumentKeySet keys() const;

  friend bool operator==(const MutationBatch& lhs, const MutationBatch& rhs);

  std::string ToString() const;

  friend std::ostream& operator<<(std::ostream& os, const MutationBatch& batch);

 private:
  int batch_id_;
  Timestamp local_write_time_;
  std::vector<Mutation> base_mutations_;
  std::vector<Mutation> mutations_;
};

inline bool operator!=(const MutationBatch& lhs, const MutationBatch& rhs) {
  return !(lhs == rhs);
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_MUTATION_BATCH_H_
