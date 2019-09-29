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

#import <Foundation/Foundation.h>

#include <string>
#include <unordered_map>

#include "Firestore/core/src/firebase/firestore/api/settings.h"
#include "Firestore/core/src/firebase/firestore/local/query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"

namespace firebase {
namespace firestore {
namespace local {

class LruGarbageCollector;

}  // namespace local
}  // namespace firestore
}  // namespace firebase

namespace local = firebase::firestore::local;
namespace model = firebase::firestore::model;

/**
 * Persistence layers intending to use LRU Garbage collection should implement this protocol. This
 * protocol defines the operations that the LRU garbage collector needs from the persistence layer.
 */
@protocol FSTLRUDelegate

/**
 * Enumerates all the targets that the delegate is aware of. This is typically all of the targets in
 * an FSTQueryCache.
 */
- (void)enumerateTargetsUsingCallback:(const local::TargetCallback &)callback;

/**
 * Enumerates all of the outstanding mutations.
 */
- (void)enumerateMutationsUsingCallback:(const local::OrphanedDocumentCallback &)callback;

/**
 * Removes all unreferenced documents from the cache that have a sequence number less than or equal
 * to the given sequence number. Returns the number of documents removed.
 */
- (int)removeOrphanedDocumentsThroughSequenceNumber:(model::ListenSequenceNumber)sequenceNumber;

/**
 * Removes all targets that are not currently being listened to and have a sequence number less than
 * or equal to the given sequence number. Returns the number of targets removed.
 */
- (int)removeTargetsThroughSequenceNumber:(model::ListenSequenceNumber)sequenceNumber
                              liveQueries:
                                  (const std::unordered_map<model::TargetId, local::QueryData> &)
                                      liveQueries;

- (size_t)byteSize;

/** Returns the number of targets and orphaned documents cached. */
- (size_t)sequenceNumberCount;

/** Access to the underlying LRU Garbage collector instance. */
- (local::LruGarbageCollector *)gc;

@end
