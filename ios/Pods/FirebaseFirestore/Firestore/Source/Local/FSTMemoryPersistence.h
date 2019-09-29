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

#import "Firestore/Source/Local/FSTLRUGarbageCollector.h"
#import "Firestore/Source/Local/FSTLocalSerializer.h"
#import "Firestore/Source/Local/FSTPersistence.h"

#include "Firestore/core/src/firebase/firestore/local/lru_garbage_collector.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"

namespace local = firebase::firestore::local;
namespace model = firebase::firestore::model;

NS_ASSUME_NONNULL_BEGIN

/**
 * An in-memory implementation of the FSTPersistence protocol. Values are stored only in RAM and
 * are never persisted to any durable storage.
 */
@interface FSTMemoryPersistence : NSObject <FSTPersistence>

+ (instancetype)persistenceWithEagerGC;

+ (instancetype)persistenceWithLruParams:(local::LruParams)lruParams
                              serializer:(FSTLocalSerializer *)serializer;

@end

/**
 * Provides the eager GC implementation for memory persistence.
 */
@interface FSTMemoryEagerReferenceDelegate : NSObject <FSTReferenceDelegate, FSTTransactional>

- (instancetype)initWithPersistence:(FSTMemoryPersistence *)persistence;

@end

/**
 * Provides the LRU GC implementation for memory persistence.
 */
@interface FSTMemoryLRUReferenceDelegate
    : NSObject <FSTReferenceDelegate, FSTLRUDelegate, FSTTransactional>

- (instancetype)initWithPersistence:(FSTMemoryPersistence *)persistence
                         serializer:(FSTLocalSerializer *)serializer
                          lruParams:(local::LruParams)lruParams;

- (BOOL)isPinnedAtSequenceNumber:(model::ListenSequenceNumber)upperBound
                        document:(const model::DocumentKey &)key;

@end

NS_ASSUME_NONNULL_END
