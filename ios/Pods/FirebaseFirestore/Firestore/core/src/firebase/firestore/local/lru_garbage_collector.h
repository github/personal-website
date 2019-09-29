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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LRU_GARBAGE_COLLECTOR_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LRU_GARBAGE_COLLECTOR_H_

#if __OBJC__
#import "Firestore/Source/Local/FSTLRUGarbageCollector.h"
#endif

#include <unordered_map>

#include "Firestore/core/src/firebase/firestore/local/query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"

namespace firebase {
namespace firestore {
namespace local {

class LruGarbageCollector;

ABSL_CONST_INIT extern const model::ListenSequenceNumber
    kListenSequenceNumberInvalid;

struct LruParams {
  static LruParams Default();

  static LruParams Disabled();

  static LruParams WithCacheSize(int64_t cacheSize);

  int64_t min_bytes_threshold;
  int percentile_to_collect;
  int maximum_sequence_numbers_to_collect;
};

struct LruResults {
  static LruResults DidNotRun() {
    return LruResults{/* did_run= */ false, 0, 0, 0};
  }

  bool did_run;
  int sequence_numbers_collected;
  int targets_removed;
  int documents_removed;
};

using LiveQueryMap = std::unordered_map<model::TargetId, QueryData>;

/**
 * Persistence layers intending to use LRU Garbage collection should implement
 * this interface. This interface defines the operations that the LRU garbage
 * collector needs from the persistence layer.
 */
class LruDelegate {
 public:
  virtual ~LruDelegate() = default;

  /** Access to the underlying LRU Garbage collector instance. */
  virtual LruGarbageCollector* garbage_collector() = 0;

  virtual size_t CalculateByteSize() const = 0;

  /** Returns the number of targets and orphaned documents cached. */
  virtual size_t GetSequenceNumberCount() = 0;

  /**
   * Enumerates all the targets that the delegate is aware of. This is typically
   * all of the targets in an FSTQueryCache.
   */
  virtual void EnumerateTargets(const TargetCallback& callback) = 0;

  /**
   * Enumerates all of the outstanding mutations.
   */
  virtual void EnumerateOrphanedDocuments(
      const OrphanedDocumentCallback& callback) = 0;

  /**
   * Removes all unreferenced documents from the cache that have a sequence
   * number less than or equal to the given sequence number. Returns the number
   * of documents removed.
   */
  virtual int RemoveOrphanedDocuments(
      model::ListenSequenceNumber sequence_number) = 0;

  /**
   * Removes all targets that are not currently being listened to and have a
   * sequence number less than or equal to the given sequence number. Returns
   * the number of targets removed.
   */
  virtual int RemoveTargets(model::ListenSequenceNumber sequence_number,
                            const LiveQueryMap& live_queries) = 0;
};

#if __OBJC__

class LruDelegateBridge : public LruDelegate {
 public:
  LruDelegateBridge() = default;

  explicit LruDelegateBridge(id<FSTLRUDelegate> target) : target_(target) {
  }

  /** Access to the underlying LRU Garbage collector instance. */
  LruGarbageCollector* garbage_collector() override {
    return target_.gc;
  }

  size_t CalculateByteSize() const override {
    return [target_ byteSize];
  }

  size_t GetSequenceNumberCount() override {
    return [target_ sequenceNumberCount];
  }

  void EnumerateTargets(const TargetCallback& callback) override {
    [target_ enumerateTargetsUsingCallback:callback];
  }

  /**
   * Enumerates all of the outstanding mutations.
   */
  void EnumerateOrphanedDocuments(
      const OrphanedDocumentCallback& callback) override {
    [target_ enumerateMutationsUsingCallback:callback];
  }

  /**
   * Removes all unreferenced documents from the cache that have a sequence
   * number less than or equal to the given sequence number. Returns the number
   * of documents removed.
   */
  int RemoveOrphanedDocuments(
      model::ListenSequenceNumber sequence_number) override {
    return
        [target_ removeOrphanedDocumentsThroughSequenceNumber:sequence_number];
  }

  /**
   * Removes all targets that are not currently being listened to and have a
   * sequence number less than or equal to the given sequence number. Returns
   * the number of targets removed.
   */
  int RemoveTargets(model::ListenSequenceNumber sequence_number,
                    const LiveQueryMap& live_queries) override {
    return [target_ removeTargetsThroughSequenceNumber:sequence_number
                                           liveQueries:live_queries];
  }

 private:
  id<FSTLRUDelegate> target_;
};

#endif  // __OBJC__

/**
 * LruGarbageCollector defines the LRU algorithm used to clean up old documents
 * and targets. It is persistence-agnostic, as long as proper delegate is
 * provided.
 */
class LruGarbageCollector {
 public:
  LruGarbageCollector(LruDelegate* delegate, LruParams params);

  size_t CalculateByteSize() const {
    return delegate_->CalculateByteSize();
  }

  /**
   * Given a target percentile, return the number of queries that make up that
   * percentage of the queries that are cached. For instance, if 20 queries are
   * cached, and the percentile is 40, the result will be 8.
   */
  int QueryCountForPercentile(int percentile);

  /**
   * Given a number of queries n, return the nth sequence number in the cache.
   */
  model::ListenSequenceNumber SequenceNumberForQueryCount(int query_count);

  /**
   * Removes queries that are not currently live (as indicated by presence in
   * the liveQueries map) and have a sequence number less than or equal to the
   * given sequence number.
   */
  int RemoveTargets(model::ListenSequenceNumber sequence_number,
                    const LiveQueryMap& live_queries);

  /**
   * Removes all unreferenced documents from the cache that have a sequence
   * number less than or equal to the given sequence number. Returns the number
   * of documents removed.
   */
  int RemoveOrphanedDocuments(model::ListenSequenceNumber sequence_number);

  local::LruResults Collect(const LiveQueryMap& live_targets);

 private:
  LruResults RunGarbageCollection(const LiveQueryMap& liveTargets);

  // Delegate owns the LruGarbageCollector; this is a back pointer.
  LruDelegate* delegate_;

  LruParams params_ = LruParams::Default();
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LRU_GARBAGE_COLLECTOR_H_
