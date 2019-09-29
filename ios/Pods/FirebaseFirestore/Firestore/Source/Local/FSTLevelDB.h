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

#import <Foundation/Foundation.h>

#include <memory>
#include <set>
#include <string>

#import "Firestore/Source/Local/FSTLRUGarbageCollector.h"
#import "Firestore/Source/Local/FSTPersistence.h"

#include "Firestore/core/src/firebase/firestore/core/database_info.h"
#include "Firestore/core/src/firebase/firestore/local/leveldb_transaction.h"
#include "Firestore/core/src/firebase/firestore/local/lru_garbage_collector.h"
#include "Firestore/core/src/firebase/firestore/util/path.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "Firestore/core/src/firebase/firestore/util/statusor.h"
#include "leveldb/db.h"

@class FSTLocalSerializer;

namespace core = firebase::firestore::core;
namespace local = firebase::firestore::local;
namespace util = firebase::firestore::util;

NS_ASSUME_NONNULL_BEGIN

@interface FSTLevelDBLRUDelegate : NSObject <FSTReferenceDelegate, FSTLRUDelegate>
@end

/** A LevelDB-backed instance of FSTPersistence. */
// TODO(mikelehen): Rename to FSTLevelDBPersistence.
@interface FSTLevelDB : NSObject <FSTPersistence, FSTTransactional>

/**
 * Creates a LevelDB in the given directory and sets `ptr` to point to it. Return value indicates
 * success in creating the leveldb instance and must be checked before accessing `ptr`. C++ note:
 * Once FSTLevelDB is ported to C++, this factory method should return StatusOr<>. It cannot
 * currently do that because ObjC references are not allowed in StatusOr.
 */
+ (util::Status)dbWithDirectory:(util::Path)directory
                     serializer:(FSTLocalSerializer *)serializer
                      lruParams:(local::LruParams)lruParams
                            ptr:(FSTLevelDB *_Nullable *_Nonnull)ptr;

- (instancetype)init NS_UNAVAILABLE;

/** Finds a suitable directory to serve as the root of all Firestore local storage. */
+ (util::Path)documentsDirectory;

/**
 * Computes a unique storage directory for the given identifying components of local storage.
 *
 * @param databaseInfo The identifying information for the local storage instance.
 * @param documentsDirectory The root document directory relative to which the storage directory
 *     will be created. Usually just +[FSTLevelDB documentsDir].
 * @return A storage directory unique to the instance identified by databaseInfo.
 */
+ (util::Path)storageDirectoryForDatabaseInfo:(const core::DatabaseInfo &)databaseInfo
                           documentsDirectory:(const util::Path &)documentsDirectory;

/**
 * @return A standard set of read options
 */
+ (const leveldb::ReadOptions)standardReadOptions;

+ (util::Status)clearPersistence:(const core::DatabaseInfo &)databaseInfo;

/** The native db pointer, allocated during start. */
@property(nonatomic, assign, readonly) leveldb::DB *ptr;

@property(nonatomic, readonly) local::LevelDbTransaction *currentTransaction;

@property(nonatomic, readonly) const std::set<std::string> &users;

@property(nonatomic, readonly, strong) FSTLevelDBLRUDelegate *referenceDelegate;

@property(nonatomic, readonly, strong) FSTLocalSerializer *serializer;

@end

NS_ASSUME_NONNULL_END
