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

#include "Firestore/core/src/firebase/firestore/remote/remote_objc_bridge.h"

#include <iomanip>
#include <map>
#include <sstream>
#include <utility>
#include <vector>

#import "Firestore/Source/API/FIRFirestore+Internal.h"

#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/nanopb/nanopb_util.h"
#include "Firestore/core/src/firebase/firestore/util/error_apple.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"
#include "grpcpp/support/status.h"

namespace firebase {
namespace firestore {
namespace remote {
namespace bridge {

using core::DatabaseInfo;
using local::QueryData;
using model::DocumentKey;
using model::MaybeDocument;
using model::Mutation;
using model::MutationResult;
using model::TargetId;
using model::SnapshotVersion;
using nanopb::MakeByteString;
using nanopb::MakeNSData;
using util::MakeString;
using util::MakeNSError;
using util::Status;
using util::StringFormat;

namespace {

std::string ToHexString(const grpc::ByteBuffer& buffer) {
  std::vector<grpc::Slice> slices;
  grpc::Status status = buffer.Dump(&slices);

  std::stringstream output;
  // The output will look like "0x00 0x0a"
  output << std::hex << std::setfill('0') << std::setw(2);
  for (const auto& slice : slices) {
    for (uint8_t c : slice) {
      output << "0x" << static_cast<int>(c) << " ";
    }
  }

  return output.str();
}

NSData* ConvertToNsData(const grpc::ByteBuffer& buffer, NSError** out_error) {
  std::vector<grpc::Slice> slices;
  grpc::Status status = buffer.Dump(&slices);
  if (!status.ok()) {
    *out_error = MakeNSError(Status{
        Error::Internal, "Trying to convert an invalid grpc::ByteBuffer"});
    return nil;
  }

  if (slices.size() == 1) {
    return [NSData dataWithBytes:slices.front().begin()
                          length:slices.front().size()];
  } else {
    NSMutableData* data = [NSMutableData dataWithCapacity:buffer.Length()];
    for (const auto& slice : slices) {
      [data appendBytes:slice.begin() length:slice.size()];
    }
    return data;
  }
}

grpc::ByteBuffer ConvertToByteBuffer(NSData* data) {
  grpc::Slice slice{[data bytes], [data length]};
  return grpc::ByteBuffer{&slice, 1};
}

// Note: `StatusOr` cannot be used with ARC-managed objects.
template <typename Proto>
Proto* ToProto(const grpc::ByteBuffer& message, Status* out_status) {
  NSError* error = nil;
  NSData* data = ConvertToNsData(message, &error);
  if (!error) {
    Proto* proto = [Proto parseFromData:data error:&error];
    if (!error) {
      *out_status = Status::OK();
      return proto;
    }
  }

  std::string error_description =
      StringFormat("Unable to parse response from the server.\n"
                   "Underlying error: %s\n"
                   "Expected class: %s\n"
                   "Received value: %s\n",
                   error, [Proto class], ToHexString(message));

  *out_status = {Error::Internal, error_description};
  return nil;
}

}  // namespace

bool IsLoggingEnabled() {
  return [FIRFirestore isLoggingEnabled];
}

// WatchStreamSerializer

GCFSListenRequest* WatchStreamSerializer::CreateWatchRequest(
    const QueryData& query) const {
  GCFSListenRequest* request = [GCFSListenRequest message];
  request.database = [serializer_ encodedDatabaseID];
  request.addTarget = [serializer_ encodedTarget:query];
  request.labels = [serializer_ encodedListenRequestLabelsForQueryData:query];
  return request;
}

GCFSListenRequest* WatchStreamSerializer::CreateUnwatchRequest(
    TargetId target_id) const {
  GCFSListenRequest* request = [GCFSListenRequest message];
  request.database = [serializer_ encodedDatabaseID];
  request.removeTarget = target_id;
  return request;
}

grpc::ByteBuffer WatchStreamSerializer::ToByteBuffer(
    GCFSListenRequest* request) {
  return ConvertToByteBuffer([request data]);
}

GCFSListenResponse* WatchStreamSerializer::ParseResponse(
    const grpc::ByteBuffer& message, Status* out_status) const {
  return ToProto<GCFSListenResponse>(message, out_status);
}

std::unique_ptr<WatchChange> WatchStreamSerializer::ToWatchChange(
    GCFSListenResponse* proto) const {
  return [serializer_ decodedWatchChange:proto];
}

SnapshotVersion WatchStreamSerializer::ToSnapshotVersion(
    GCFSListenResponse* proto) const {
  return [serializer_ versionFromListenResponse:proto];
}

NSString* WatchStreamSerializer::Describe(GCFSListenRequest* request) {
  return [request description];
}

NSString* WatchStreamSerializer::Describe(GCFSListenResponse* response) {
  return [response description];
}

// WriteStreamSerializer

void WriteStreamSerializer::UpdateLastStreamToken(GCFSWriteResponse* proto) {
  last_stream_token_ = MakeByteString(proto.streamToken);
}

GCFSWriteRequest* WriteStreamSerializer::CreateHandshake() const {
  // The initial request cannot contain mutations, but must contain a projectID.
  GCFSWriteRequest* request = [GCFSWriteRequest message];
  request.database = [serializer_ encodedDatabaseID];
  return request;
}

GCFSWriteRequest* WriteStreamSerializer::CreateWriteMutationsRequest(
    const std::vector<Mutation>& mutations) const {
  NSMutableArray<GCFSWrite*>* protos =
      [NSMutableArray arrayWithCapacity:mutations.size()];
  for (const Mutation& mutation : mutations) {
    [protos addObject:[serializer_ encodedMutation:mutation]];
  };

  GCFSWriteRequest* request = [GCFSWriteRequest message];
  request.writesArray = protos;
  request.streamToken = MakeNullableNSData(last_stream_token_);

  return request;
}

grpc::ByteBuffer WriteStreamSerializer::ToByteBuffer(
    GCFSWriteRequest* request) {
  return ConvertToByteBuffer([request data]);
}

GCFSWriteResponse* WriteStreamSerializer::ParseResponse(
    const grpc::ByteBuffer& message, Status* out_status) const {
  return ToProto<GCFSWriteResponse>(message, out_status);
}

model::SnapshotVersion WriteStreamSerializer::ToCommitVersion(
    GCFSWriteResponse* proto) const {
  return [serializer_ decodedVersion:proto.commitTime];
}

std::vector<MutationResult> WriteStreamSerializer::ToMutationResults(
    GCFSWriteResponse* response) const {
  NSMutableArray<GCFSWriteResult*>* responses = response.writeResultsArray;
  std::vector<MutationResult> results;
  results.reserve(responses.count);

  const model::SnapshotVersion commitVersion = ToCommitVersion(response);
  for (GCFSWriteResult* proto in responses) {
    results.push_back([serializer_ decodedMutationResult:proto
                                           commitVersion:commitVersion]);
  };
  return results;
}

NSString* WriteStreamSerializer::Describe(GCFSWriteRequest* request) {
  return [request description];
}

NSString* WriteStreamSerializer::Describe(GCFSWriteResponse* response) {
  return [response description];
}

// DatastoreSerializer

DatastoreSerializer::DatastoreSerializer(const DatabaseInfo& database_info)
    : serializer_{[[FSTSerializerBeta alloc]
          initWithDatabaseID:database_info.database_id()]} {
}

GCFSCommitRequest* DatastoreSerializer::CreateCommitRequest(
    const std::vector<Mutation>& mutations) const {
  GCFSCommitRequest* request = [GCFSCommitRequest message];
  request.database = [serializer_ encodedDatabaseID];

  NSMutableArray<GCFSWrite*>* mutationProtos = [NSMutableArray array];
  for (const Mutation& mutation : mutations) {
    [mutationProtos addObject:[serializer_ encodedMutation:mutation]];
  }
  request.writesArray = mutationProtos;

  return request;
}

grpc::ByteBuffer DatastoreSerializer::ToByteBuffer(GCFSCommitRequest* request) {
  return ConvertToByteBuffer([request data]);
}

GCFSBatchGetDocumentsRequest* DatastoreSerializer::CreateLookupRequest(
    const std::vector<DocumentKey>& keys) const {
  GCFSBatchGetDocumentsRequest* request =
      [GCFSBatchGetDocumentsRequest message];

  request.database = [serializer_ encodedDatabaseID];
  for (const DocumentKey& key : keys) {
    [request.documentsArray addObject:[serializer_ encodedDocumentKey:key]];
  }

  return request;
}

grpc::ByteBuffer DatastoreSerializer::ToByteBuffer(
    GCFSBatchGetDocumentsRequest* request) {
  return ConvertToByteBuffer([request data]);
}

std::vector<MaybeDocument> DatastoreSerializer::MergeLookupResponses(
    const std::vector<grpc::ByteBuffer>& responses, Status* out_status) const {
  // Sort by key.
  std::map<DocumentKey, MaybeDocument> results;

  for (const auto& response : responses) {
    auto* proto = ToProto<GCFSBatchGetDocumentsResponse>(response, out_status);
    if (!out_status->ok()) {
      return {};
    }
    MaybeDocument doc = [serializer_ decodedMaybeDocumentFromBatch:proto];
    results[doc.key()] = std::move(doc);
  }

  std::vector<MaybeDocument> docs;
  docs.reserve(results.size());
  for (const auto& kv : results) {
    docs.push_back(kv.second);
  }
  return docs;
}

MaybeDocument DatastoreSerializer::ToMaybeDocument(
    GCFSBatchGetDocumentsResponse* response) const {
  return [serializer_ decodedMaybeDocumentFromBatch:response];
}

}  // namespace bridge
}  // namespace remote
}  // namespace firestore
}  // namespace firebase
