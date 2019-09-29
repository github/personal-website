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

#include "Firestore/core/src/firebase/firestore/local/local_serializer.h"

#include <cstdlib>
#include <limits>
#include <string>
#include <utility>

#include "Firestore/Protos/nanopb/firestore/local/maybe_document.nanopb.h"
#include "Firestore/Protos/nanopb/firestore/local/target.nanopb.h"
#include "Firestore/Protos/nanopb/google/firestore/v1/document.nanopb.h"
#include "Firestore/core/src/firebase/firestore/core/query.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/model/unknown_document.h"
#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"
#include "Firestore/core/src/firebase/firestore/nanopb/nanopb_util.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/string_format.h"

namespace firebase {
namespace firestore {
namespace local {

using core::Query;
using model::Document;
using model::MaybeDocument;
using model::Mutation;
using model::MutationBatch;
using model::NoDocument;
using model::SnapshotVersion;
using model::UnknownDocument;
using nanopb::ByteString;
using nanopb::CheckedSize;
using nanopb::Reader;
using nanopb::Writer;
using remote::MakeArray;
using util::Status;
using util::StringFormat;

firestore_client_MaybeDocument LocalSerializer::EncodeMaybeDocument(
    const MaybeDocument& maybe_doc) const {
  firestore_client_MaybeDocument result{};

  switch (maybe_doc.type()) {
    case MaybeDocument::Type::Document:
      result.which_document_type = firestore_client_MaybeDocument_document_tag;
      result.document = EncodeDocument(static_cast<const Document&>(maybe_doc));
      // TODO(rsgowman): heldwriteacks:
      // result.has_committed_mutations = existing_doc.HasCommittedMutations();
      return result;

    case MaybeDocument::Type::NoDocument:
      result.which_document_type =
          firestore_client_MaybeDocument_no_document_tag;
      result.no_document =
          EncodeNoDocument(static_cast<const NoDocument&>(maybe_doc));
      // TODO(rsgowman): heldwriteacks:
      // result.has_committed_mutations = no_doc.HasCommittedMutations();
      return result;

    case MaybeDocument::Type::UnknownDocument:
      result.which_document_type =
          firestore_client_MaybeDocument_unknown_document_tag;
      result.unknown_document =
          EncodeUnknownDocument(static_cast<const UnknownDocument&>(maybe_doc));
      // TODO(rsgowman): heldwriteacks:
      // result.has_committed_mutations = true;
      return result;

    case MaybeDocument::Type::Invalid:
      // TODO(rsgowman): Error handling
      abort();
  }

  UNREACHABLE();
}

MaybeDocument LocalSerializer::DecodeMaybeDocument(
    Reader* reader, const firestore_client_MaybeDocument& proto) const {
  if (!reader->status().ok()) return {};

  switch (proto.which_document_type) {
    case firestore_client_MaybeDocument_document_tag:
      return rpc_serializer_.DecodeDocument(reader, proto.document);

    case firestore_client_MaybeDocument_no_document_tag:
      return DecodeNoDocument(reader, proto.no_document);

    case firestore_client_MaybeDocument_unknown_document_tag:
      return DecodeUnknownDocument(reader, proto.unknown_document);

    default:
      reader->Fail(
          StringFormat("Invalid MaybeDocument document type: %s. Expected "
                       "'no_document' (%s) or 'document' (%s)",
                       proto.which_document_type,
                       firestore_client_MaybeDocument_no_document_tag,
                       firestore_client_MaybeDocument_document_tag));
      return {};
  }

  UNREACHABLE();
}

google_firestore_v1_Document LocalSerializer::EncodeDocument(
    const Document& doc) const {
  google_firestore_v1_Document result{};

  result.name =
      rpc_serializer_.EncodeString(rpc_serializer_.EncodeKey(doc.key()));

  // Encode Document.fields (unless it's empty)
  pb_size_t count = CheckedSize(doc.data().GetInternalValue().size());
  result.fields_count = count;
  result.fields = MakeArray<google_firestore_v1_Document_FieldsEntry>(count);
  int i = 0;
  for (const auto& kv : doc.data().GetInternalValue()) {
    result.fields[i].key = rpc_serializer_.EncodeString(kv.first);
    result.fields[i].value = rpc_serializer_.EncodeFieldValue(kv.second);
    i++;
  }

  result.update_time = rpc_serializer_.EncodeVersion(doc.version());

  // Ignore Document.create_time. (We don't use this in our on-disk protos.)

  return result;
}

firestore_client_NoDocument LocalSerializer::EncodeNoDocument(
    const NoDocument& no_doc) const {
  firestore_client_NoDocument result{};

  result.name =
      rpc_serializer_.EncodeString(rpc_serializer_.EncodeKey(no_doc.key()));
  result.read_time = rpc_serializer_.EncodeVersion(no_doc.version());

  return result;
}

NoDocument LocalSerializer::DecodeNoDocument(
    Reader* reader, const firestore_client_NoDocument& proto) const {
  SnapshotVersion version =
      rpc_serializer_.DecodeSnapshotVersion(reader, proto.read_time);

  // TODO(rsgowman): Fix hardcoding of has_committed_mutations.
  // Instead, we should grab this from the proto (see other ports). However,
  // we'll defer until the nanopb-master gets merged to master.
  return NoDocument(rpc_serializer_.DecodeKey(
                        reader, rpc_serializer_.DecodeString(proto.name)),
                    version,
                    /*has_committed_mutations=*/false);
}

firestore_client_UnknownDocument LocalSerializer::EncodeUnknownDocument(
    const UnknownDocument& unknown_doc) const {
  firestore_client_UnknownDocument result{};

  result.name = rpc_serializer_.EncodeString(
      rpc_serializer_.EncodeKey(unknown_doc.key()));
  result.version = rpc_serializer_.EncodeVersion(unknown_doc.version());

  return result;
}

UnknownDocument LocalSerializer::DecodeUnknownDocument(
    Reader* reader, const firestore_client_UnknownDocument& proto) const {
  SnapshotVersion version =
      rpc_serializer_.DecodeSnapshotVersion(reader, proto.version);

  return UnknownDocument(rpc_serializer_.DecodeKey(
                             reader, rpc_serializer_.DecodeString(proto.name)),
                         version);
}

firestore_client_Target LocalSerializer::EncodeQueryData(
    const QueryData& query_data) const {
  firestore_client_Target result{};

  result.target_id = query_data.target_id();
  result.last_listen_sequence_number = query_data.sequence_number();
  result.snapshot_version = rpc_serializer_.EncodeTimestamp(
      query_data.snapshot_version().timestamp());

  // Force a copy because pb_release would otherwise double-free.
  result.resume_token = nanopb::CopyBytesArray(query_data.resume_token().get());

  const Query& query = query_data.query();
  if (query.IsDocumentQuery()) {
    // TODO(rsgowman): Implement. Probably like this (once EncodeDocumentsTarget
    // exists):
    /*
    result.which_target_type = firestore_client_Target_document_tag;
    result.documents = rpc_serializer_.EncodeDocumentsTarget(query);
    */
    abort();
  } else {
    result.which_target_type = firestore_client_Target_query_tag;
    result.query = rpc_serializer_.EncodeQueryTarget(query);
  }

  return result;
}

QueryData LocalSerializer::DecodeQueryData(
    Reader* reader, const firestore_client_Target& proto) const {
  if (!reader->status().ok()) return QueryData::Invalid();

  model::TargetId target_id = proto.target_id;
  // TODO(rgowman): How to handle truncation of integer types?
  model::ListenSequenceNumber sequence_number =
      static_cast<model::ListenSequenceNumber>(
          proto.last_listen_sequence_number);
  SnapshotVersion version =
      rpc_serializer_.DecodeSnapshotVersion(reader, proto.snapshot_version);
  ByteString resume_token(proto.resume_token);
  Query query = Query::Invalid();

  switch (proto.which_target_type) {
    case firestore_client_Target_query_tag:
      query = rpc_serializer_.DecodeQueryTarget(reader, proto.query);
      break;

    case firestore_client_Target_documents_tag:
      // TODO(rsgowman): Implement.
      abort();

    default:
      reader->Fail(
          StringFormat("Unknown target_type: %s", proto.which_target_type));
  }

  if (!reader->status().ok()) return QueryData::Invalid();
  return QueryData(std::move(query), target_id, sequence_number,
                   QueryPurpose::Listen, version, std::move(resume_token));
}

firestore_client_WriteBatch LocalSerializer::EncodeMutationBatch(
    const MutationBatch& mutation_batch) const {
  firestore_client_WriteBatch result{};

  result.batch_id = mutation_batch.batch_id();

  pb_size_t count = CheckedSize(mutation_batch.base_mutations().size());
  result.base_writes_count = count;
  result.base_writes = MakeArray<google_firestore_v1_Write>(count);
  int i = 0;
  for (const auto& mutation : mutation_batch.base_mutations()) {
    result.base_writes[i] = rpc_serializer_.EncodeMutation(mutation);
    i++;
  }

  count = CheckedSize(mutation_batch.mutations().size());
  result.writes_count = count;
  result.writes = MakeArray<google_firestore_v1_Write>(count);
  i = 0;
  for (const auto& mutation : mutation_batch.mutations()) {
    result.writes[i] = rpc_serializer_.EncodeMutation(mutation);
    i++;
  }

  result.local_write_time =
      rpc_serializer_.EncodeTimestamp(mutation_batch.local_write_time());

  return result;
}

MutationBatch LocalSerializer::DecodeMutationBatch(
    nanopb::Reader* reader, const firestore_client_WriteBatch& proto) const {
  int batch_id = proto.batch_id;
  Timestamp local_write_time =
      rpc_serializer_.DecodeTimestamp(reader, proto.local_write_time);

  std::vector<Mutation> base_mutations;
  for (size_t i = 0; i < proto.base_writes_count; i++) {
    base_mutations.push_back(
        rpc_serializer_.DecodeMutation(reader, proto.base_writes[i]));
  }

  std::vector<Mutation> mutations;
  for (size_t i = 0; i < proto.writes_count; i++) {
    mutations.push_back(
        rpc_serializer_.DecodeMutation(reader, proto.writes[i]));
  }

  return MutationBatch(batch_id, local_write_time, std::move(base_mutations),
                       std::move(mutations));
}

}  // namespace local
}  // namespace firestore
}  // namespace firebase
