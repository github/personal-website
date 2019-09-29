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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LEVELDB_QUERY_CACHE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LEVELDB_QUERY_CACHE_H_

#if !defined(__OBJC__)
#error "For now, this file must only be included by ObjC source files."
#endif  // !defined(__OBJC__)

#import <Foundation/Foundation.h>

#include <unordered_map>

#import "Firestore/Protos/objc/firestore/local/Target.pbobjc.h"
#include "Firestore/core/src/firebase/firestore/local/query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "absl/strings/string_view.h"
#include "leveldb/db.h"

@class FSTLevelDB;
@class FSTLocalSerializer;

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace local {

/** Cached Queries backed by LevelDB. */
class LevelDbQueryCache : public QueryCache {
 public:
  /**
   * Retrieves the global singleton metadata row from the given database, if it
   * exists.
   * TODO(gsoltis): remove this method once fully ported to transactions.
   */
  static FSTPBTargetGlobal* ReadMetadata(leveldb::DB* db);

  /**
   * Creates a new query cache in the given LevelDB.
   *
   * @param db The LevelDB in which to create the cache.
   */
  LevelDbQueryCache(FSTLevelDB* db, FSTLocalSerializer* serializer);

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

  /** Adds the given document keys to cached query results of the given target
   * ID. */
  void AddMatchingKeys(const model::DocumentKeySet& keys,
                       model::TargetId target_id) override;

  /** Removes the given document keys from the cached query results of the given
   * target ID. */
  void RemoveMatchingKeys(const model::DocumentKeySet& keys,
                          model::TargetId target_id) override;

  /** Removes all the keys in the query results of the given target ID. */
  void RemoveAllKeysForTarget(model::TargetId target_id);

  model::DocumentKeySet GetMatchingKeys(model::TargetId target_id) override;

  /**
   * Checks to see if there are any references to a document with the given key.
   */
  bool Contains(const model::DocumentKey& key) override;

  // Other methods and accessors
  size_t size() const override {
    return metadata_.targetCount;
  }

  model::TargetId highest_target_id() const override {
    return metadata_.highestTargetId;
  }

  model::ListenSequenceNumber highest_listen_sequence_number() const override {
    return metadata_.highestListenSequenceNumber;
  }

  const model::SnapshotVersion& GetLastRemoteSnapshotVersion() const override;

  void SetLastRemoteSnapshotVersion(model::SnapshotVersion version) override;

  // Non-interface methods
  void Start();

  void EnumerateOrphanedDocuments(const OrphanedDocumentCallback& callback);

 private:
  void Save(const QueryData& query_data);
  bool UpdateMetadata(const QueryData& query_data);
  void SaveMetadata();
  /**
   * Parses the given bytes as an FSTPBTarget protocol buffer and then converts
   * to the equivalent query data.
   */
  QueryData DecodeTarget(absl::string_view encoded);

  // This instance is owned by FSTLevelDB; avoid a retain cycle.
  __weak FSTLevelDB* db_;
  FSTLocalSerializer* serializer_;
  /** A write-through cached copy of the metadata for the query cache. */
  FSTPBTargetGlobal* metadata_;
  model::SnapshotVersion last_remote_snapshot_version_;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LEVELDB_QUERY_CACHE_H_
