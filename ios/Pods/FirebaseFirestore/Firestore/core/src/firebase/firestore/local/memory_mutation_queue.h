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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_MEMORY_MUTATION_QUEUE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_MEMORY_MUTATION_QUEUE_H_

#if !defined(__OBJC__)
#error "For now, this file must only be included by ObjC source files."
#endif  // !defined(__OBJC__)

#import <Foundation/Foundation.h>

#include <set>
#include <vector>

#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/immutable/sorted_set.h"
#include "Firestore/core/src/firebase/firestore/local/document_key_reference.h"
#include "Firestore/core/src/firebase/firestore/local/mutation_queue.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"

@class FSTLocalSerializer;
@class FSTMemoryPersistence;

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace local {

class MemoryMutationQueue : public MutationQueue {
 public:
  explicit MemoryMutationQueue(FSTMemoryPersistence* persistence);

  void Start() override;

  bool IsEmpty() override;

  void AcknowledgeBatch(const model::MutationBatch& batch,
                        const nanopb::ByteString& stream_token) override;

  model::MutationBatch AddMutationBatch(
      const Timestamp& local_write_time,
      std::vector<model::Mutation>&& base_mutations,
      std::vector<model::Mutation>&& mutations) override;

  void RemoveMutationBatch(const model::MutationBatch& batch) override;

  std::vector<model::MutationBatch> AllMutationBatches() override {
    return queue_;
  }

  std::vector<model::MutationBatch> AllMutationBatchesAffectingDocumentKeys(
      const model::DocumentKeySet& document_keys) override;

  std::vector<model::MutationBatch> AllMutationBatchesAffectingDocumentKey(
      const model::DocumentKey& key) override;

  std::vector<model::MutationBatch> AllMutationBatchesAffectingQuery(
      const core::Query& query) override;

  absl::optional<model::MutationBatch> LookupMutationBatch(
      model::BatchId batch_id) override;

  absl::optional<model::MutationBatch> NextMutationBatchAfterBatchId(
      model::BatchId batch_id) override;

  model::BatchId GetHighestUnacknowledgedBatchId() override;

  void PerformConsistencyCheck() override;

  bool ContainsKey(const model::DocumentKey& key);

  size_t CalculateByteSize(FSTLocalSerializer* serializer);

  nanopb::ByteString GetLastStreamToken() override;
  void SetLastStreamToken(const nanopb::ByteString& token) override;

 private:
  using DocumentKeyReferenceSet =
      immutable::SortedSet<DocumentKeyReference, DocumentKeyReference::ByKey>;

  std::vector<model::MutationBatch> AllMutationBatchesWithIds(
      const std::set<model::BatchId>& batch_ids);

  /**
   * Finds the index of the given batchID in the mutation queue. This operation
   * is O(1).
   *
   * @return The computed index of the batch with the given BatchID, based on
   * the state of the queue. Note this index can negative if the requested
   * BatchID has already been removed from the queue or past the end of the
   * queue if the BatchID is larger than the last added batch.
   */
  int IndexOfBatchId(model::BatchId batch_id);

  // This instance is owned by FSTMemoryPersistence; avoid a retain cycle.
  __weak FSTMemoryPersistence* persistence_;
  /**
   * A FIFO queue of all mutations to apply to the backend. Mutations are added
   * to the end of the queue as they're written, and removed from the front of
   * the queue as the mutations become visible or are rejected.
   *
   * When successfully applied, mutations must be acknowledged by the write
   * stream and made visible on the watch stream. It's possible for the watch
   * stream to fall behind in which case the batches at the head of the queue
   * will be acknowledged but held until the watch stream sees the changes.
   *
   * If a batch is rejected while there are held write acknowledgements at the
   * head of the queue the rejected batch is converted to a tombstone: its
   * mutations are removed but the batch remains in the queue. This maintains a
   * simple consecutive ordering of batches in the queue.
   *
   * Once the held write acknowledgements become visible they are removed from
   * the head of the queue along with any tombstones that follow.
   */
  std::vector<model::MutationBatch> queue_;

  /**
   * The next value to use when assigning sequential IDs to each mutation
   * batch.
   */
  model::BatchId next_batch_id_ = 1;

  /**
   * The last received stream token from the server, used to acknowledge which
   * responses the client has processed. Stream tokens are opaque checkpoint
   * markers whose only real value is their inclusion in the next request.
   */
  nanopb::ByteString last_stream_token_;

  /** An ordered mapping between documents and the mutation batch IDs. */
  DocumentKeyReferenceSet batches_by_document_key_;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_MEMORY_MUTATION_QUEUE_H_
