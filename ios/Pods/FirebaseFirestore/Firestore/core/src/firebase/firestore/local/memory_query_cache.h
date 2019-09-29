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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_MEMORY_QUERY_CACHE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_MEMORY_QUERY_CACHE_H_

#if !defined(__OBJC__)
#error "For now, this file must only be included by ObjC source files."
#endif  // !defined(__OBJC__)

#import <Foundation/Foundation.h>

#include <cstdint>
#include <unordered_map>
#include <utility>

#include "Firestore/core/src/firebase/firestore/local/query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/reference_set.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/objc/objc_compatibility.h"

@class FSTLocalSerializer;
@class FSTMemoryPersistence;

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace local {

class Sizer;

class MemoryQueryCache : public QueryCache {
 public:
  explicit MemoryQueryCache(FSTMemoryPersistence* persistence);

  // Target-related methods
  void AddTarget(const QueryData& query_data) override;

  void UpdateTarget(const QueryData& query_data) override;

  void RemoveTarget(const QueryData& query_data) override;

  absl::optional<QueryData> GetTarget(const core::Query& query) override;

  void EnumerateTargets(const TargetCallback& callback) override;

  int RemoveTargets(model::ListenSequenceNumber upper_bound,
                    const std::unordered_map<model::TargetId, QueryData>&
                        live_targets) override;

  // Key-related methods
  void AddMatchingKeys(const model::DocumentKeySet& keys,
                       model::TargetId target_id) override;

  void RemoveMatchingKeys(const model::DocumentKeySet& keys,
                          model::TargetId target_id) override;

  model::DocumentKeySet GetMatchingKeys(model::TargetId target_id) override;

  bool Contains(const model::DocumentKey& key) override;

  // Other methods and accessors
  size_t CalculateByteSize(const Sizer& sizer);

  size_t size() const override {
    return queries_.size();
  }

  model::ListenSequenceNumber highest_listen_sequence_number() const override {
    return highest_listen_sequence_number_;
  }

  model::TargetId highest_target_id() const override {
    return highest_target_id_;
  }

  const model::SnapshotVersion& GetLastRemoteSnapshotVersion() const override;

  void SetLastRemoteSnapshotVersion(model::SnapshotVersion version) override;

 private:
  // This instance is owned by FSTMemoryPersistence; avoid a retain cycle.
  __weak FSTMemoryPersistence* persistence_;

  /** The highest sequence number encountered */
  model::ListenSequenceNumber highest_listen_sequence_number_;
  /** The highest numbered target ID encountered. */
  model::TargetId highest_target_id_;
  /** The last received snapshot version. */
  model::SnapshotVersion last_remote_snapshot_version_;

  /** Maps a query to the data about that query. */
  std::unordered_map<core::Query, QueryData> queries_;

  /**
   * A ordered bidirectional mapping between documents and the remote target
   * IDs.
   */
  ReferenceSet references_;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_MEMORY_QUERY_CACHE_H_
