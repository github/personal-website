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

#include "Firestore/core/src/firebase/firestore/local/leveldb_query_cache.h"

#include <string>
#include <utility>

#import "Firestore/Protos/objc/firestore/local/Target.pbobjc.h"
#import "Firestore/Source/Local/FSTLevelDB.h"
#import "Firestore/Source/Local/FSTLocalSerializer.h"

#include "Firestore/core/src/firebase/firestore/local/leveldb_key.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"
#include "absl/strings/match.h"

namespace firebase {
namespace firestore {
namespace local {

using core::Query;
using model::DocumentKey;
using model::DocumentKeySet;
using model::ListenSequenceNumber;
using model::SnapshotVersion;
using model::TargetId;
using util::MakeString;
using leveldb::Status;

FSTPBTargetGlobal* LevelDbQueryCache::ReadMetadata(leveldb::DB* db) {
  std::string key = LevelDbTargetGlobalKey::Key();
  std::string value;
  Status status = db->Get([FSTLevelDB standardReadOptions], key, &value);
  if (status.IsNotFound()) {
    return nil;
  } else if (!status.ok()) {
    HARD_FAIL("metadataForKey: failed loading key %s with status: %s", key,
              status.ToString());
  }

  NSData* data = [[NSData alloc] initWithBytesNoCopy:(void*)value.data()
                                              length:value.size()
                                        freeWhenDone:NO];

  NSError* error;
  FSTPBTargetGlobal* proto = [FSTPBTargetGlobal parseFromData:data
                                                        error:&error];
  if (!proto) {
    HARD_FAIL("FSTPBTargetGlobal failed to parse: %s", error);
  }

  return proto;
}

LevelDbQueryCache::LevelDbQueryCache(FSTLevelDB* db,
                                     FSTLocalSerializer* serializer)
    : db_(db), serializer_(serializer) {
}

// TODO(gsoltis): revisit having a Start method vs a static factory function
// that returns a started instance.
void LevelDbQueryCache::Start() {
  // TODO(gsoltis): switch this usage of ptr to currentTransaction
  metadata_ = ReadMetadata(db_.ptr);
  HARD_ASSERT(metadata_ != nil,
              "Found nil metadata, expected schema to be at version 0 which "
              "ensures metadata existence");
  last_remote_snapshot_version_ =
      [serializer_ decodedVersion:metadata_.lastRemoteSnapshotVersion];
}

void LevelDbQueryCache::AddTarget(const QueryData& query_data) {
  Save(query_data);

  const std::string& canonical_id = query_data.query().CanonicalId();
  std::string index_key =
      LevelDbQueryTargetKey::Key(canonical_id, query_data.target_id());
  std::string empty_buffer;
  db_.currentTransaction->Put(index_key, empty_buffer);

  metadata_.targetCount++;
  UpdateMetadata(query_data);
  SaveMetadata();
}

void LevelDbQueryCache::UpdateTarget(const QueryData& query_data) {
  Save(query_data);

  if (UpdateMetadata(query_data)) {
    SaveMetadata();
  }
}

void LevelDbQueryCache::RemoveTarget(const QueryData& query_data) {
  TargetId target_id = query_data.target_id();

  RemoveAllKeysForTarget(target_id);

  std::string key = LevelDbTargetKey::Key(target_id);
  db_.currentTransaction->Delete(key);

  std::string index_key =
      LevelDbQueryTargetKey::Key(query_data.query().CanonicalId(), target_id);
  db_.currentTransaction->Delete(index_key);

  metadata_.targetCount--;
  SaveMetadata();
}

absl::optional<QueryData> LevelDbQueryCache::GetTarget(const Query& query) {
  // Scan the query-target index starting with a prefix starting with the given
  // query's canonicalID. Note that this is a scan rather than a get because
  // canonicalIDs are not required to be unique per target.
  const std::string& canonical_id = query.CanonicalId();
  auto index_iterator = db_.currentTransaction->NewIterator();
  std::string index_prefix = LevelDbQueryTargetKey::KeyPrefix(canonical_id);
  index_iterator->Seek(index_prefix);

  // Simultaneously scan the targets table. This works because each
  // (canonicalID, targetID) pair is unique and ordered, so when scanning a
  // table prefixed by exactly one canonicalID, all the targetIDs will be unique
  // and in order.
  std::string target_prefix = LevelDbTargetKey::KeyPrefix();
  auto target_iterator = db_.currentTransaction->NewIterator();

  LevelDbQueryTargetKey row_key;
  for (; index_iterator->Valid(); index_iterator->Next()) {
    // Only consider rows matching exactly the specific canonicalID of interest.
    if (!absl::StartsWith(index_iterator->key(), index_prefix) ||
        !row_key.Decode(index_iterator->key()) ||
        canonical_id != row_key.canonical_id()) {
      // End of this canonicalID's possible targets.
      break;
    }

    // Each row is a unique combination of canonicalID and targetID, so this
    // foreign key reference can only occur once.
    std::string target_key = LevelDbTargetKey::Key(row_key.target_id());
    target_iterator->Seek(target_key);
    if (!target_iterator->Valid() || target_iterator->key() != target_key) {
      HARD_FAIL("Dangling query-target reference found: "
                "%s points to %s; seeking there found %s",
                DescribeKey(index_iterator), DescribeKey(target_key),
                DescribeKey(target_iterator));
    }

    // Finally after finding a potential match, check that the query is actually
    // equal to the requested query.
    QueryData target = DecodeTarget(target_iterator->value());
    if (target.query() == query) {
      return target;
    }
  }

  return absl::nullopt;
}

void LevelDbQueryCache::EnumerateTargets(const TargetCallback& callback) {
  // Enumerate all targets, give their sequence numbers.
  std::string target_prefix = LevelDbTargetKey::KeyPrefix();
  auto it = db_.currentTransaction->NewIterator();
  it->Seek(target_prefix);
  for (; it->Valid() && absl::StartsWith(it->key(), target_prefix);
       it->Next()) {
    QueryData target = DecodeTarget(it->value());
    callback(target);
  }
}

int LevelDbQueryCache::RemoveTargets(
    ListenSequenceNumber upper_bound,
    const std::unordered_map<model::TargetId, QueryData>& live_targets) {
  int count = 0;
  std::string target_prefix = LevelDbTargetKey::KeyPrefix();
  auto it = db_.currentTransaction->NewIterator();
  it->Seek(target_prefix);
  for (; it->Valid() && absl::StartsWith(it->key(), target_prefix);
       it->Next()) {
    QueryData query_data = DecodeTarget(it->value());
    if (query_data.sequence_number() <= upper_bound &&
        live_targets.find(query_data.target_id()) == live_targets.end()) {
      RemoveTarget(query_data);
      count++;
    }
  }
  return count;
}

void LevelDbQueryCache::AddMatchingKeys(const DocumentKeySet& keys,
                                        TargetId target_id) {
  // Store an empty value in the index which is equivalent to serializing a
  // GPBEmpty message. In the future if we wanted to store some other kind of
  // value here, we can parse these empty values as with some other protocol
  // buffer (and the parser will see all default values).
  std::string empty_buffer;

  for (const DocumentKey& key : keys) {
    db_.currentTransaction->Put(LevelDbTargetDocumentKey::Key(target_id, key),
                                empty_buffer);
    db_.currentTransaction->Put(LevelDbDocumentTargetKey::Key(key, target_id),
                                empty_buffer);
    [db_.referenceDelegate addReference:key];
  };
}

void LevelDbQueryCache::RemoveMatchingKeys(const DocumentKeySet& keys,
                                           TargetId target_id) {
  for (const DocumentKey& key : keys) {
    db_.currentTransaction->Delete(
        LevelDbTargetDocumentKey::Key(target_id, key));
    db_.currentTransaction->Delete(
        LevelDbDocumentTargetKey::Key(key, target_id));
    [db_.referenceDelegate removeReference:key];
  }
}

void LevelDbQueryCache::RemoveAllKeysForTarget(TargetId target_id) {
  std::string index_prefix = LevelDbTargetDocumentKey::KeyPrefix(target_id);
  auto index_iterator = db_.currentTransaction->NewIterator();
  index_iterator->Seek(index_prefix);

  LevelDbTargetDocumentKey row_key;
  for (; index_iterator->Valid(); index_iterator->Next()) {
    absl::string_view index_key = index_iterator->key();

    // Only consider rows matching this specific targetID.
    if (!row_key.Decode(index_key) || row_key.target_id() != target_id) {
      break;
    }
    const DocumentKey& document_key = row_key.document_key();

    // Delete both index rows
    db_.currentTransaction->Delete(index_key);
    db_.currentTransaction->Delete(
        LevelDbDocumentTargetKey::Key(document_key, target_id));
  }
}

DocumentKeySet LevelDbQueryCache::GetMatchingKeys(TargetId target_id) {
  std::string index_prefix = LevelDbTargetDocumentKey::KeyPrefix(target_id);
  auto index_iterator = db_.currentTransaction->NewIterator();
  index_iterator->Seek(index_prefix);

  DocumentKeySet result;
  LevelDbTargetDocumentKey row_key;
  for (; index_iterator->Valid(); index_iterator->Next()) {
    // TODO(gsoltis): could we use a StartsWith instead?
    // Only consider rows matching this specific target_id.
    if (!row_key.Decode(index_iterator->key()) ||
        row_key.target_id() != target_id) {
      break;
    }

    result = result.insert(row_key.document_key());
  }

  return result;
}

bool LevelDbQueryCache::Contains(const DocumentKey& key) {
  // ignore sentinel rows when determining if a key belongs to a target.
  // Sentinel row just says the document exists, not that it's a member of any
  // particular target.
  std::string index_prefix = LevelDbDocumentTargetKey::KeyPrefix(key.path());
  auto index_iterator = db_.currentTransaction->NewIterator();
  index_iterator->Seek(index_prefix);

  for (; index_iterator->Valid() &&
         absl::StartsWith(index_iterator->key(), index_prefix);
       index_iterator->Next()) {
    LevelDbDocumentTargetKey row_key;
    if (row_key.Decode(index_iterator->key()) && !row_key.IsSentinel() &&
        row_key.document_key() == key) {
      return true;
    }
  }

  return false;
}

const SnapshotVersion& LevelDbQueryCache::GetLastRemoteSnapshotVersion() const {
  return last_remote_snapshot_version_;
}

void LevelDbQueryCache::SetLastRemoteSnapshotVersion(SnapshotVersion version) {
  last_remote_snapshot_version_ = std::move(version);
  metadata_.lastRemoteSnapshotVersion =
      [serializer_ encodedVersion:last_remote_snapshot_version_];
  SaveMetadata();
}

void LevelDbQueryCache::EnumerateOrphanedDocuments(
    const OrphanedDocumentCallback& callback) {
  std::string document_target_prefix = LevelDbDocumentTargetKey::KeyPrefix();
  auto it = db_.currentTransaction->NewIterator();
  it->Seek(document_target_prefix);
  ListenSequenceNumber next_to_report = 0;
  DocumentKey key_to_report;
  LevelDbDocumentTargetKey key;

  for (; it->Valid() && absl::StartsWith(it->key(), document_target_prefix);
       it->Next()) {
    HARD_ASSERT(key.Decode(it->key()), "Failed to decode DocumentTarget key");
    if (key.IsSentinel()) {
      // if next_to_report is non-zero, report it, this is a new key so the last
      // one must be not be a member of any targets.
      if (next_to_report != 0) {
        callback(key_to_report, next_to_report);
      }
      // set next_to_report to be this sequence number. It's the next one we
      // might report, if we don't find any targets for this document.
      next_to_report =
          LevelDbDocumentTargetKey::DecodeSentinelValue(it->value());
      key_to_report = key.document_key();
    } else {
      // set next_to_report to be 0, we know we don't need to report this one
      // since we found a target for it.
      next_to_report = 0;
    }
  }
  // if next_to_report is non-zero, report it. We didn't find any targets for
  // that document, and we weren't asked to stop.
  if (next_to_report != 0) {
    callback(key_to_report, next_to_report);
  }
}

void LevelDbQueryCache::Save(const QueryData& query_data) {
  TargetId target_id = query_data.target_id();
  std::string key = LevelDbTargetKey::Key(target_id);
  db_.currentTransaction->Put(key, [serializer_ encodedQueryData:query_data]);
}

bool LevelDbQueryCache::UpdateMetadata(const QueryData& query_data) {
  bool updated = false;
  if (query_data.target_id() > metadata_.highestTargetId) {
    metadata_.highestTargetId = query_data.target_id();
    updated = true;
  }

  if (query_data.sequence_number() > metadata_.highestListenSequenceNumber) {
    metadata_.highestListenSequenceNumber = query_data.sequence_number();
    updated = true;
  }

  return updated;
}

void LevelDbQueryCache::SaveMetadata() {
  db_.currentTransaction->Put(LevelDbTargetGlobalKey::Key(), metadata_);
}

QueryData LevelDbQueryCache::DecodeTarget(absl::string_view encoded) {
  NSData* data = [[NSData alloc] initWithBytesNoCopy:(void*)encoded.data()
                                              length:encoded.size()
                                        freeWhenDone:NO];

  NSError* error;
  FSTPBTarget* proto = [FSTPBTarget parseFromData:data error:&error];
  if (!proto) {
    HARD_FAIL("FSTPBTarget failed to parse: %s", error);
  }

  return [serializer_ decodedQueryData:proto];
}

}  // namespace local
}  // namespace firestore
}  // namespace firebase
