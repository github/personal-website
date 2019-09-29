/*
 * Copyright 2017 Google
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

#import "Firestore/Source/Local/FSTLevelDB.h"

#include <memory>
#include <unordered_map>
#include <utility>

#import "FIRFirestoreErrors.h"
#import "Firestore/Source/Remote/FSTSerializerBeta.h"

#include "Firestore/core/include/firebase/firestore/firestore_errors.h"
#include "Firestore/core/src/firebase/firestore/auth/user.h"
#include "Firestore/core/src/firebase/firestore/core/database_info.h"
#include "Firestore/core/src/firebase/firestore/local/index_manager.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_index_manager.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_key.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_migrations.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_mutation_queue.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_remote_document_cache.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_transaction.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_util.h"
#include "Firestore/core/src/firebase/firestore/local/listen_sequence.h"
#include "Firestore/core/src/firebase/firestore/local/lru_garbage_collector.h"
#include "Firestore/core/src/firebase/firestore/local/reference_delegate.h"
#include "Firestore/core/src/firebase/firestore/local/reference_set.h"
#include "Firestore/core/src/firebase/firestore/local/remote_document_cache.h"
#include "Firestore/core/src/firebase/firestore/model/database_id.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/resource_path.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/util/filesystem.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"
#include "Firestore/core/src/firebase/firestore/util/ordered_code.h"
#include "Firestore/core/src/firebase/firestore/util/statusor.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"
#include "Firestore/core/src/firebase/firestore/util/string_util.h"
#include "absl/memory/memory.h"
#include "absl/strings/match.h"
#include "absl/strings/str_cat.h"
#include "leveldb/db.h"

NS_ASSUME_NONNULL_BEGIN

namespace util = firebase::firestore::util;
using firebase::firestore::Error;
using firebase::firestore::auth::User;
using firebase::firestore::core::DatabaseInfo;
using firebase::firestore::local::ConvertStatus;
using firebase::firestore::local::IndexManager;
using firebase::firestore::local::LevelDbDocumentMutationKey;
using firebase::firestore::local::LevelDbDocumentTargetKey;
using firebase::firestore::local::LevelDbIndexManager;
using firebase::firestore::local::LevelDbMigrations;
using firebase::firestore::local::LevelDbMutationKey;
using firebase::firestore::local::LevelDbMutationQueue;
using firebase::firestore::local::LevelDbQueryCache;
using firebase::firestore::local::LevelDbRemoteDocumentCache;
using firebase::firestore::local::LevelDbTransaction;
using firebase::firestore::local::ListenSequence;
using firebase::firestore::local::LruGarbageCollector;
using firebase::firestore::local::LruParams;
using firebase::firestore::local::OrphanedDocumentCallback;
using firebase::firestore::local::QueryData;
using firebase::firestore::local::ReferenceSet;
using firebase::firestore::local::RemoteDocumentCache;
using firebase::firestore::local::TargetCallback;
using firebase::firestore::model::DocumentKey;
using firebase::firestore::model::ListenSequenceNumber;
using firebase::firestore::model::ResourcePath;
using firebase::firestore::model::TargetId;
using firebase::firestore::util::OrderedCode;
using firebase::firestore::util::Path;
using firebase::firestore::util::Status;
using firebase::firestore::util::StatusOr;
using firebase::firestore::util::StringFormat;
using leveldb::DB;
using leveldb::Options;
using leveldb::ReadOptions;
using leveldb::WriteOptions;

static const char *kReservedPathComponent = "firestore";

@interface FSTLevelDB ()

- (size_t)byteSize;

@property(nonatomic, assign, getter=isStarted) BOOL started;

- (LevelDbQueryCache *)queryCache;

- (LevelDbMutationQueue *)mutationQueueForUser:(const User &)user;

@end

/**
 * Provides LRU functionality for leveldb persistence.
 *
 * Although this could implement FSTTransactional, it doesn't because it is not directly tied to
 * a transaction runner, it just happens to be called from FSTLevelDB, which is FSTTransactional.
 */
@interface FSTLevelDBLRUDelegate ()

- (void)transactionWillStart;

- (void)transactionWillCommit;

- (void)start;

@end

@implementation FSTLevelDBLRUDelegate {
  local::LruDelegateBridge _delegateBridge;
  std::unique_ptr<LruGarbageCollector> _gc;
  // This delegate should have the same lifetime as the persistence layer, but mark as
  // weak to avoid retain cycle.
  __weak FSTLevelDB *_db;
  ReferenceSet *_additionalReferences;
  ListenSequenceNumber _currentSequenceNumber;
  // PORTING NOTE: doesn't need to be a pointer once this class is ported to C++.
  std::unique_ptr<ListenSequence> _listenSequence;
}

- (instancetype)initWithPersistence:(FSTLevelDB *)persistence lruParams:(LruParams)lruParams {
  if (self = [super init]) {
    _delegateBridge = local::LruDelegateBridge(self);
    _gc = absl::make_unique<LruGarbageCollector>(&_delegateBridge, lruParams);
    _db = persistence;
    _currentSequenceNumber = local::kListenSequenceNumberInvalid;
  }
  return self;
}

- (void)start {
  ListenSequenceNumber highestSequenceNumber = _db.queryCache->highest_listen_sequence_number();
  _listenSequence = absl::make_unique<ListenSequence>(highestSequenceNumber);
}

- (void)transactionWillStart {
  HARD_ASSERT(_currentSequenceNumber == local::kListenSequenceNumberInvalid,
              "Previous sequence number is still in effect");
  _currentSequenceNumber = _listenSequence->Next();
}

- (void)transactionWillCommit {
  _currentSequenceNumber = local::kListenSequenceNumberInvalid;
}

- (ListenSequenceNumber)currentSequenceNumber {
  HARD_ASSERT(_currentSequenceNumber != local::kListenSequenceNumberInvalid,
              "Asking for a sequence number outside of a transaction");
  return _currentSequenceNumber;
}

- (void)addInMemoryPins:(ReferenceSet *)set {
  // We should be able to assert that _additionalReferences is nil, but due to restarts in spec
  // tests it would fail.
  _additionalReferences = set;
}

- (void)removeTarget:(const QueryData &)queryData {
  QueryData updated = queryData.Copy(queryData.snapshot_version(), queryData.resume_token(),
                                     [self currentSequenceNumber]);
  _db.queryCache->UpdateTarget(std::move(updated));
}

- (void)addReference:(const DocumentKey &)key {
  [self writeSentinelForKey:key];
}

- (void)removeReference:(const DocumentKey &)key {
  [self writeSentinelForKey:key];
}

- (BOOL)mutationQueuesContainKey:(const DocumentKey &)docKey {
  const std::set<std::string> &users = _db.users;
  const ResourcePath &path = docKey.path();
  std::string buffer;
  auto it = _db.currentTransaction->NewIterator();
  // For each user, if there is any batch that contains this document in any batch, we know it's
  // pinned.
  for (const std::string &user : users) {
    std::string mutationKey = LevelDbDocumentMutationKey::KeyPrefix(user, path);
    it->Seek(mutationKey);
    if (it->Valid() && absl::StartsWith(it->key(), mutationKey)) {
      return YES;
    }
  }
  return NO;
}

- (BOOL)isPinned:(const DocumentKey &)docKey {
  if (_additionalReferences->ContainsKey(docKey)) {
    return YES;
  }
  if ([self mutationQueuesContainKey:docKey]) {
    return YES;
  }
  return NO;
}

- (void)enumerateTargetsUsingCallback:(const TargetCallback &)callback {
  _db.queryCache->EnumerateTargets(callback);
}

- (void)enumerateMutationsUsingCallback:(const OrphanedDocumentCallback &)callback {
  _db.queryCache->EnumerateOrphanedDocuments(callback);
}

- (int)removeOrphanedDocumentsThroughSequenceNumber:(ListenSequenceNumber)upperBound {
  int count = 0;
  _db.queryCache->EnumerateOrphanedDocuments(
      [&count, self, upperBound](const DocumentKey &docKey, ListenSequenceNumber sequenceNumber) {
        if (sequenceNumber <= upperBound) {
          if (![self isPinned:docKey]) {
            count++;
            self->_db.remoteDocumentCache->Remove(docKey);
            [self removeSentinel:docKey];
          }
        }
      });
  return count;
}

- (void)removeSentinel:(const DocumentKey &)key {
  _db.currentTransaction->Delete(LevelDbDocumentTargetKey::SentinelKey(key));
}

- (int)removeTargetsThroughSequenceNumber:(ListenSequenceNumber)sequenceNumber
                              liveQueries:
                                  (const std::unordered_map<TargetId, QueryData> &)liveQueries {
  return _db.queryCache->RemoveTargets(sequenceNumber, liveQueries);
}

- (size_t)sequenceNumberCount {
  size_t totalCount = _db.queryCache->size();
  [self enumerateMutationsUsingCallback:[&totalCount](const DocumentKey &key,
                                                      ListenSequenceNumber sequenceNumber) {
    totalCount++;
  }];
  return totalCount;
}

- (local::LruGarbageCollector *)gc {
  return _gc.get();
}

- (void)writeSentinelForKey:(const DocumentKey &)key {
  std::string sentinelKey = LevelDbDocumentTargetKey::SentinelKey(key);
  std::string encodedSequenceNumber =
      LevelDbDocumentTargetKey::EncodeSentinelValue([self currentSequenceNumber]);
  _db.currentTransaction->Put(sentinelKey, encodedSequenceNumber);
}

- (void)removeMutationReference:(const DocumentKey &)key {
  [self writeSentinelForKey:key];
}

- (void)limboDocumentUpdated:(const DocumentKey &)key {
  [self writeSentinelForKey:key];
}

- (size_t)byteSize {
  return [_db byteSize];
}

@end

@implementation FSTLevelDB {
  Path _directory;
  std::unique_ptr<LevelDbTransaction> _transaction;
  std::unique_ptr<leveldb::DB> _ptr;
  std::unique_ptr<LevelDbRemoteDocumentCache> _documentCache;
  std::unique_ptr<LevelDbIndexManager> _indexManager;
  FSTTransactionRunner _transactionRunner;
  FSTLevelDBLRUDelegate *_referenceDelegate;
  std::unique_ptr<LevelDbQueryCache> _queryCache;
  std::set<std::string> _users;
  std::unique_ptr<LevelDbMutationQueue> _currentMutationQueue;
}

/**
 * For now this is paranoid, but perhaps disable that in production builds.
 */
+ (const ReadOptions)standardReadOptions {
  ReadOptions options;
  options.verify_checksums = true;
  return options;
}

+ (std::set<std::string>)collectUserSet:(LevelDbTransaction *)transaction {
  std::set<std::string> users;

  std::string tablePrefix = LevelDbMutationKey::KeyPrefix();
  auto it = transaction->NewIterator();
  it->Seek(tablePrefix);
  LevelDbMutationKey rowKey;
  while (it->Valid() && absl::StartsWith(it->key(), tablePrefix) && rowKey.Decode(it->key())) {
    users.insert(rowKey.user_id());

    auto userEnd = LevelDbMutationKey::KeyPrefix(rowKey.user_id());
    userEnd = util::PrefixSuccessor(userEnd);
    it->Seek(userEnd);
  }
  return users;
}

+ (firebase::firestore::util::Status)dbWithDirectory:(firebase::firestore::util::Path)directory
                                          serializer:(FSTLocalSerializer *)serializer
                                           lruParams:
                                               (firebase::firestore::local::LruParams)lruParams
                                                 ptr:(FSTLevelDB **)ptr {
  Status status = [self ensureDirectory:directory];
  if (!status.ok()) return status;

  StatusOr<std::unique_ptr<DB>> database = [self createDBWithDirectory:directory];
  if (!database.status().ok()) {
    return database.status();
  }

  std::unique_ptr<DB> ldb = std::move(database.ValueOrDie());
  LevelDbMigrations::RunMigrations(ldb.get());
  LevelDbTransaction transaction(ldb.get(), "Start LevelDB");
  std::set<std::string> users = [self collectUserSet:&transaction];
  transaction.Commit();
  FSTLevelDB *db = [[self alloc] initWithLevelDB:std::move(ldb)
                                           users:users
                                       directory:directory
                                      serializer:serializer
                                       lruParams:lruParams];
  *ptr = db;
  return Status::OK();
}

+ (Status)clearPersistence:(const DatabaseInfo &)databaseInfo {
  Path levelDBDir = [FSTLevelDB storageDirectoryForDatabaseInfo:databaseInfo
                                             documentsDirectory:[FSTLevelDB documentsDirectory]];
  LOG_DEBUG("Clearing persistence for path: %s", levelDBDir.ToUtf8String());
  return util::RecursivelyDelete(levelDBDir);
}

- (instancetype)initWithLevelDB:(std::unique_ptr<leveldb::DB>)db
                          users:(std::set<std::string>)users
                      directory:(firebase::firestore::util::Path)directory
                     serializer:(FSTLocalSerializer *)serializer
                      lruParams:(firebase::firestore::local::LruParams)lruParams {
  if (self = [super init]) {
    self.started = YES;
    _ptr = std::move(db);
    _directory = std::move(directory);
    _serializer = serializer;
    _queryCache = absl::make_unique<LevelDbQueryCache>(self, _serializer);
    _documentCache = absl::make_unique<LevelDbRemoteDocumentCache>(self, _serializer);
    _indexManager = absl::make_unique<LevelDbIndexManager>(self);
    _referenceDelegate = [[FSTLevelDBLRUDelegate alloc] initWithPersistence:self
                                                                  lruParams:lruParams];
    _transactionRunner.SetBackingPersistence(self);
    _users = std::move(users);
    // TODO(gsoltis): set up a leveldb transaction for these operations.
    _queryCache->Start();
    [_referenceDelegate start];
  }
  return self;
}

- (size_t)byteSize {
  int64_t count = 0;
  auto iter = util::DirectoryIterator::Create(_directory);
  for (; iter->Valid(); iter->Next()) {
    int64_t fileSize = util::FileSize(iter->file()).ValueOrDie();
    count += fileSize;
  }
  HARD_ASSERT(iter->status().ok(), "Failed to iterate leveldb directory: %s",
              iter->status().error_message().c_str());
  HARD_ASSERT(count >= 0 && count <= SIZE_MAX, "Overflowed counting bytes cached");
  return static_cast<size_t>(count);
}

- (const std::set<std::string> &)users {
  return _users;
}

- (leveldb::DB *)ptr {
  return _ptr.get();
}

- (const FSTTransactionRunner &)run {
  return _transactionRunner;
}

+ (Path)documentsDirectory {
#if TARGET_OS_IOS
  NSArray<NSString *> *directories =
      NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
  return Path::FromNSString(directories[0]).AppendUtf8(kReservedPathComponent);

#elif TARGET_OS_TV
  NSArray<NSString *> *directories =
      NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES);
  return Path::FromNSString(directories[0]).AppendUtf8(kReservedPathComponent);

#elif TARGET_OS_OSX
  std::string dotPrefixed = absl::StrCat(".", kReservedPathComponent);
  return Path::FromNSString(NSHomeDirectory()).AppendUtf8(dotPrefixed);

#else
#error "Don't know where to store documents on this platform."

#endif
}

+ (Path)storageDirectoryForDatabaseInfo:(const DatabaseInfo &)databaseInfo
                     documentsDirectory:(const Path &)documentsDirectory {
  // Use two different path formats:
  //
  //   * persistenceKey / projectID . databaseID / name
  //   * persistenceKey / projectID / name
  //
  // projectIDs are DNS-compatible names and cannot contain dots so there's
  // no danger of collisions.
  std::string project_key = databaseInfo.database_id().project_id();
  if (!databaseInfo.database_id().IsDefaultDatabase()) {
    absl::StrAppend(&project_key, ".", databaseInfo.database_id().database_id());
  }

  // Reserve one additional path component to allow multiple physical databases
  return Path::JoinUtf8(documentsDirectory, databaseInfo.persistence_key(), project_key, "main");
}

#pragma mark - Startup

/** Creates the directory at @a directory and marks it as excluded from iCloud backup. */
+ (Status)ensureDirectory:(const Path &)directory {
  Status status = util::RecursivelyCreateDir(directory);
  if (!status.ok()) {
    return Status{Error::Internal, "Failed to create persistence directory"}.CausedBy(status);
  }

  NSURL *dirURL = [NSURL fileURLWithPath:directory.ToNSString()];
  NSError *localError = nil;
  if (![dirURL setResourceValue:@YES forKey:NSURLIsExcludedFromBackupKey error:&localError]) {
    return Status{Error::Internal, "Failed to mark persistence directory as excluded from backups"}
        .CausedBy(Status::FromNSError(localError));
  }

  return Status::OK();
}

/** Opens the database within the given directory. */
+ (StatusOr<std::unique_ptr<DB>>)createDBWithDirectory:(const Path &)directory {
  Options options;
  options.create_if_missing = true;

  DB *database = nullptr;
  leveldb::Status status = DB::Open(options, directory.ToUtf8String(), &database);
  if (!status.ok()) {
    return Status{Error::Internal,
                  StringFormat("Failed to open LevelDB database at %s", directory.ToUtf8String())}
        .CausedBy(ConvertStatus(status));
  }

  return std::unique_ptr<DB>(database);
}

- (LevelDbTransaction *)currentTransaction {
  HARD_ASSERT(_transaction != nullptr, "Attempting to access transaction before one has started");
  return _transaction.get();
}

#pragma mark - Persistence Factory methods

- (LevelDbMutationQueue *)mutationQueueForUser:(const User &)user {
  _users.insert(user.uid());
  _currentMutationQueue.reset(new LevelDbMutationQueue(user, self, self.serializer));
  return _currentMutationQueue.get();
}

- (LevelDbQueryCache *)queryCache {
  return _queryCache.get();
}

- (RemoteDocumentCache *)remoteDocumentCache {
  return _documentCache.get();
}

- (IndexManager *)indexManager {
  return _indexManager.get();
}

- (void)startTransaction:(absl::string_view)label {
  HARD_ASSERT(_transaction == nullptr, "Starting a transaction while one is already outstanding");
  _transaction = absl::make_unique<LevelDbTransaction>(_ptr.get(), label);
  [_referenceDelegate transactionWillStart];
}

- (void)commitTransaction {
  HARD_ASSERT(_transaction != nullptr, "Committing a transaction before one is started");
  [_referenceDelegate transactionWillCommit];
  _transaction->Commit();
  _transaction.reset();
}

- (void)shutdown {
  HARD_ASSERT(self.isStarted, "FSTLevelDB shutdown without start!");
  self.started = NO;
  _ptr.reset();
}

- (id<FSTReferenceDelegate>)referenceDelegate {
  return _referenceDelegate;
}

- (ListenSequenceNumber)currentSequenceNumber {
  return [_referenceDelegate currentSequenceNumber];
}

@end

NS_ASSUME_NONNULL_END
