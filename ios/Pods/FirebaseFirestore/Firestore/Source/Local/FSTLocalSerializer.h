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

#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"
#include "Firestore/core/src/firebase/firestore/model/mutation_batch.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"

@class FSTSerializerBeta;

@class FSTPBMaybeDocument;
@class FSTPBTarget;
@class FSTPBWriteBatch;

@class GPBTimestamp;

namespace local = firebase::firestore::local;
namespace model = firebase::firestore::model;

NS_ASSUME_NONNULL_BEGIN

/**
 * Serializer for values stored in the LocalStore.
 *
 * Note that FSTLocalSerializer currently delegates to the serializer for the Firestore v1 RPC
 * protocol to save implementation time and code duplication. We'll need to revisit this when the
 * RPC protocol we use diverges from local storage.
 */
@interface FSTLocalSerializer : NSObject

- (instancetype)initWithRemoteSerializer:(FSTSerializerBeta *)remoteSerializer;

- (instancetype)init NS_UNAVAILABLE;

/** Encodes a MaybeDocument model to the equivalent protocol buffer for local storage. */
- (FSTPBMaybeDocument *)encodedMaybeDocument:(const model::MaybeDocument &)document;

/** Decodes an FSTPBMaybeDocument proto to the equivalent model. */
- (model::MaybeDocument)decodedMaybeDocument:(FSTPBMaybeDocument *)proto;

/** Encodes an MutationBatch model for local storage in the mutation queue. */
- (FSTPBWriteBatch *)encodedMutationBatch:(const model::MutationBatch &)batch;

/** Decodes an FSTPBWriteBatch proto into a MutationBatch model. */
- (model::MutationBatch)decodedMutationBatch:(FSTPBWriteBatch *)batch;

/** Encodes a QueryData model for local storage in the query cache. */
- (FSTPBTarget *)encodedQueryData:(const local::QueryData &)queryData;

/** Decodes an FSTPBTarget proto from local storage into a QueryData model. */
- (local::QueryData)decodedQueryData:(FSTPBTarget *)target;

/** Encodes a SnapshotVersion model into a GPBTimestamp proto. */
- (GPBTimestamp *)encodedVersion:(const model::SnapshotVersion &)version;

/** Decodes a GPBTimestamp proto into a SnapshotVersion model. */
- (model::SnapshotVersion)decodedVersion:(GPBTimestamp *)version;

@end

NS_ASSUME_NONNULL_END
