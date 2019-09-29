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

#import "Firestore/Source/Local/FSTLocalSerializer.h"

#include <cinttypes>
#include <utility>
#include <vector>

#import "FIRTimestamp.h"
#import "Firestore/Protos/objc/firestore/local/MaybeDocument.pbobjc.h"
#import "Firestore/Protos/objc/firestore/local/Mutation.pbobjc.h"
#import "Firestore/Protos/objc/firestore/local/Target.pbobjc.h"
#import "Firestore/Protos/objc/google/firestore/v1/Document.pbobjc.h"
#import "Firestore/Source/Remote/FSTSerializerBeta.h"

#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/core/query.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/mutation_batch.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/model/unknown_document.h"
#include "Firestore/core/src/firebase/firestore/nanopb/nanopb_util.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"

using firebase::Timestamp;
using firebase::firestore::core::Query;
using firebase::firestore::local::QueryData;
using firebase::firestore::local::QueryPurpose;
using firebase::firestore::model::Document;
using firebase::firestore::model::DocumentKey;
using firebase::firestore::model::DocumentState;
using firebase::firestore::model::ListenSequenceNumber;
using firebase::firestore::model::MaybeDocument;
using firebase::firestore::model::Mutation;
using firebase::firestore::model::MutationBatch;
using firebase::firestore::model::NoDocument;
using firebase::firestore::model::ObjectValue;
using firebase::firestore::model::SnapshotVersion;
using firebase::firestore::model::TargetId;
using firebase::firestore::model::UnknownDocument;
using firebase::firestore::nanopb::ByteString;
using firebase::firestore::nanopb::MakeByteString;
using firebase::firestore::nanopb::MakeNSData;

@interface FSTLocalSerializer ()

@property(nonatomic, strong, readonly) FSTSerializerBeta *remoteSerializer;

@end

/** Serializer for values stored in the LocalStore. */
@implementation FSTLocalSerializer

- (instancetype)initWithRemoteSerializer:(FSTSerializerBeta *)remoteSerializer {
  self = [super init];
  if (self) {
    _remoteSerializer = remoteSerializer;
  }
  return self;
}

- (FSTPBMaybeDocument *)encodedMaybeDocument:(const MaybeDocument &)document {
  FSTPBMaybeDocument *proto = [FSTPBMaybeDocument message];

  if (document.is_no_document()) {
    NoDocument deletedDocument(document);
    proto.noDocument = [self encodedDeletedDocument:deletedDocument];
    proto.hasCommittedMutations = deletedDocument.has_committed_mutations();
  } else if (document.is_document()) {
    Document existingDocument(document);
    const absl::any &docProto = existingDocument.proto();
    if (docProto.has_value()) {
      proto.document = absl::any_cast<GCFSDocument *>(docProto);
    } else {
      proto.document = [self encodedDocument:existingDocument];
    }
    proto.hasCommittedMutations = existingDocument.has_committed_mutations();
  } else if (document.is_unknown_document()) {
    UnknownDocument unknownDocument(document);
    proto.unknownDocument = [self encodedUnknownDocument:unknownDocument];
    proto.hasCommittedMutations = YES;
  } else {
    HARD_FAIL("Unknown document type %s", document.type());
  }

  return proto;
}

- (MaybeDocument)decodedMaybeDocument:(FSTPBMaybeDocument *)proto {
  switch (proto.documentTypeOneOfCase) {
    case FSTPBMaybeDocument_DocumentType_OneOfCase_Document:
      return [self decodedDocument:proto.document
            withCommittedMutations:proto.hasCommittedMutations];

    case FSTPBMaybeDocument_DocumentType_OneOfCase_NoDocument:
      return [self decodedDeletedDocument:proto.noDocument
                   withCommittedMutations:proto.hasCommittedMutations];

    case FSTPBMaybeDocument_DocumentType_OneOfCase_UnknownDocument:
      return [self decodedUnknownDocument:proto.unknownDocument];

    default:
      HARD_FAIL("Unknown MaybeDocument %s", proto);
  }
}

/**
 * Encodes a Document for local storage. This differs from the v1 RPC serializer for Documents in
 * that it preserves the updateTime, which is considered an output only value by the server.
 */
- (GCFSDocument *)encodedDocument:(const Document &)document {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  GCFSDocument *proto = [GCFSDocument message];
  proto.name = [remoteSerializer encodedDocumentKey:document.key()];
  proto.fields = [remoteSerializer encodedFields:document.data()];
  proto.updateTime = [remoteSerializer encodedVersion:document.version()];

  return proto;
}

/** Decodes a Document proto to the equivalent model. */
- (Document)decodedDocument:(GCFSDocument *)document
     withCommittedMutations:(BOOL)committedMutations {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  ObjectValue data = [remoteSerializer decodedFields:document.fields];
  DocumentKey key = [remoteSerializer decodedDocumentKey:document.name];
  SnapshotVersion version = [remoteSerializer decodedVersion:document.updateTime];
  DocumentState state =
      committedMutations ? DocumentState::kCommittedMutations : DocumentState::kSynced;
  return Document(std::move(data), std::move(key), version, state);
}

/** Encodes a NoDocument value to the equivalent proto. */
- (FSTPBNoDocument *)encodedDeletedDocument:(const NoDocument &)document {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  FSTPBNoDocument *proto = [FSTPBNoDocument message];
  proto.name = [remoteSerializer encodedDocumentKey:document.key()];
  proto.readTime = [remoteSerializer encodedVersion:document.version()];
  return proto;
}

/** Decodes a NoDocument proto to the equivalent model. */
- (NoDocument)decodedDeletedDocument:(FSTPBNoDocument *)proto
              withCommittedMutations:(BOOL)committedMutations {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  DocumentKey key = [remoteSerializer decodedDocumentKey:proto.name];
  SnapshotVersion version = [remoteSerializer decodedVersion:proto.readTime];
  return NoDocument(std::move(key), version, committedMutations);
}

/** Encodes an UnknownDocument value to the equivalent proto. */
- (FSTPBUnknownDocument *)encodedUnknownDocument:(const UnknownDocument &)document {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  FSTPBUnknownDocument *proto = [FSTPBUnknownDocument message];
  proto.name = [remoteSerializer encodedDocumentKey:document.key()];
  proto.version = [remoteSerializer encodedVersion:document.version()];
  return proto;
}

/** Decodes an UnknownDocument proto to the equivalent model. */
- (UnknownDocument)decodedUnknownDocument:(FSTPBUnknownDocument *)proto {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  DocumentKey key = [remoteSerializer decodedDocumentKey:proto.name];
  SnapshotVersion version = [remoteSerializer decodedVersion:proto.version];
  return UnknownDocument(std::move(key), version);
}

- (FSTPBWriteBatch *)encodedMutationBatch:(const MutationBatch &)batch {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  FSTPBWriteBatch *proto = [FSTPBWriteBatch message];
  proto.batchId = batch.batch_id();
  proto.localWriteTime = [remoteSerializer encodedTimestamp:batch.local_write_time()];

  NSMutableArray<GCFSWrite *> *baseWrites = proto.baseWritesArray;
  for (const Mutation &baseMutation : batch.base_mutations()) {
    [baseWrites addObject:[remoteSerializer encodedMutation:baseMutation]];
  }
  NSMutableArray<GCFSWrite *> *writes = proto.writesArray;
  for (const Mutation &mutation : batch.mutations()) {
    [writes addObject:[remoteSerializer encodedMutation:mutation]];
  }
  return proto;
}

- (MutationBatch)decodedMutationBatch:(FSTPBWriteBatch *)batch {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  int batchID = batch.batchId;

  std::vector<Mutation> baseMutations;
  for (GCFSWrite *write in batch.baseWritesArray) {
    baseMutations.push_back([remoteSerializer decodedMutation:write]);
  }
  std::vector<Mutation> mutations;
  for (GCFSWrite *write in batch.writesArray) {
    mutations.push_back([remoteSerializer decodedMutation:write]);
  }

  Timestamp localWriteTime = [remoteSerializer decodedTimestamp:batch.localWriteTime];

  return MutationBatch(batchID, localWriteTime, std::move(baseMutations), std::move(mutations));
}

- (FSTPBTarget *)encodedQueryData:(const QueryData &)queryData {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  HARD_ASSERT(queryData.purpose() == QueryPurpose::Listen,
              "only queries with purpose %s may be stored, got %s", QueryPurpose::Listen,
              queryData.purpose());

  FSTPBTarget *proto = [FSTPBTarget message];
  proto.targetId = queryData.target_id();
  proto.lastListenSequenceNumber = queryData.sequence_number();
  proto.snapshotVersion = [remoteSerializer encodedVersion:queryData.snapshot_version()];
  proto.resumeToken = MakeNullableNSData(queryData.resume_token());

  const Query &query = queryData.query();
  if (query.IsDocumentQuery()) {
    proto.documents = [remoteSerializer encodedDocumentsTarget:query];
  } else {
    proto.query = [remoteSerializer encodedQueryTarget:query];
  }

  return proto;
}

- (QueryData)decodedQueryData:(FSTPBTarget *)target {
  FSTSerializerBeta *remoteSerializer = self.remoteSerializer;

  TargetId targetID = target.targetId;
  ListenSequenceNumber sequenceNumber = target.lastListenSequenceNumber;
  SnapshotVersion version = [remoteSerializer decodedVersion:target.snapshotVersion];
  ByteString resumeToken = MakeByteString(target.resumeToken);

  Query query;
  switch (target.targetTypeOneOfCase) {
    case FSTPBTarget_TargetType_OneOfCase_Documents:
      query = [remoteSerializer decodedQueryFromDocumentsTarget:target.documents];
      break;

    case FSTPBTarget_TargetType_OneOfCase_Query:
      query = [remoteSerializer decodedQueryFromQueryTarget:target.query];
      break;

    default:
      HARD_FAIL("Unknown Target.targetType %s", target.targetTypeOneOfCase);
  }

  return QueryData(std::move(query), targetID, sequenceNumber, QueryPurpose::Listen, version,
                   std::move(resumeToken));
}

- (GPBTimestamp *)encodedVersion:(const SnapshotVersion &)version {
  return [self.remoteSerializer encodedVersion:version];
}

- (SnapshotVersion)decodedVersion:(GPBTimestamp *)version {
  return [self.remoteSerializer decodedVersion:version];
}

@end
