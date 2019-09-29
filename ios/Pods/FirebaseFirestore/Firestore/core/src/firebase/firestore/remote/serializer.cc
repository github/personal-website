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

#include "Firestore/core/src/firebase/firestore/remote/serializer.h"

#include <pb_decode.h>
#include <pb_encode.h>

#include <functional>
#include <limits>
#include <map>
#include <set>
#include <string>
#include <utility>

#include "Firestore/Protos/nanopb/google/firestore/v1/document.nanopb.h"
#include "Firestore/Protos/nanopb/google/firestore/v1/firestore.nanopb.h"
#include "Firestore/core/include/firebase/firestore/firestore_errors.h"
#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/model/delete_mutation.h"
#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/patch_mutation.h"
#include "Firestore/core/src/firebase/firestore/model/resource_path.h"
#include "Firestore/core/src/firebase/firestore/model/set_mutation.h"
#include "Firestore/core/src/firebase/firestore/model/transform_mutation.h"
#include "Firestore/core/src/firebase/firestore/model/transform_operation.h"
#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"
#include "Firestore/core/src/firebase/firestore/nanopb/nanopb_util.h"
#include "Firestore/core/src/firebase/firestore/nanopb/reader.h"
#include "Firestore/core/src/firebase/firestore/nanopb/writer.h"
#include "Firestore/core/src/firebase/firestore/timestamp_internal.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/string_format.h"
#include "absl/base/casts.h"
#include "absl/memory/memory.h"

namespace firebase {
namespace firestore {
namespace remote {

using core::Query;
using model::ArrayTransform;
using model::DatabaseId;
using model::DeleteMutation;
using model::Document;
using model::DocumentKey;
using model::DocumentState;
using model::FieldMask;
using model::FieldPath;
using model::FieldTransform;
using model::FieldValue;
using model::MaybeDocument;
using model::Mutation;
using model::NoDocument;
using model::NumericIncrementTransform;
using model::ObjectValue;
using model::PatchMutation;
using model::Precondition;
using model::ResourcePath;
using model::ServerTimestampTransform;
using model::SetMutation;
using model::SnapshotVersion;
using model::TransformMutation;
using model::TransformOperation;
using nanopb::ByteString;
using nanopb::CheckedSize;
using nanopb::MakeStringView;
using nanopb::Reader;
using nanopb::Writer;
using util::Status;
using util::StringFormat;

pb_bytes_array_t* Serializer::EncodeString(const std::string& str) {
  return nanopb::MakeBytesArray(str);
}

std::string Serializer::DecodeString(const pb_bytes_array_t* str) {
  return nanopb::MakeString(str);
}

namespace {

FieldValue::Map DecodeMapValue(Reader* reader,
                               const google_firestore_v1_MapValue& map_value);

// There's no f:f::model equivalent of StructuredQuery, so we'll create our
// own struct for decoding. We could use nanopb's struct, but it's slightly
// inconvenient since it's a fixed size (so uses callbacks to represent
// strings, repeated fields, etc.)
struct StructuredQuery {
  struct CollectionSelector {
    std::string collection_id;
    bool all_descendants;
  };
  // TODO(rsgowman): other submessages

  std::vector<CollectionSelector> from;
  // TODO(rsgowman): other fields
};

FieldValue::Map::value_type DecodeFieldsEntry(
    Reader* reader, const google_firestore_v1_Document_FieldsEntry& fields) {
  std::string key = Serializer::DecodeString(fields.key);
  FieldValue value = Serializer::DecodeFieldValue(reader, fields.value);

  if (key.empty()) {
    reader->Fail(
        "Invalid message: Empty key while decoding a Map field value.");
    return {};
  }

  return FieldValue::Map::value_type{std::move(key), std::move(value)};
}

FieldValue::Map DecodeFields(
    Reader* reader,
    size_t count,
    const google_firestore_v1_Document_FieldsEntry* fields) {
  FieldValue::Map result;
  for (size_t i = 0; i < count; i++) {
    FieldValue::Map::value_type kv = DecodeFieldsEntry(reader, fields[i]);
    result = result.insert(std::move(kv.first), std::move(kv.second));
  }

  return result;
}

google_firestore_v1_MapValue EncodeMapValue(const ObjectValue& object_value) {
  google_firestore_v1_MapValue result{};

  pb_size_t count = CheckedSize(object_value.GetInternalValue().size());

  result.fields_count = count;
  result.fields = MakeArray<google_firestore_v1_MapValue_FieldsEntry>(count);

  int i = 0;
  for (const auto& kv : object_value.GetInternalValue()) {
    result.fields[i].key = Serializer::EncodeString(kv.first);
    result.fields[i].value = Serializer::EncodeFieldValue(kv.second);
    i++;
  }

  return result;
}

FieldValue::Map DecodeMapValue(Reader* reader,
                               const google_firestore_v1_MapValue& map_value) {
  FieldValue::Map result;

  for (size_t i = 0; i < map_value.fields_count; i++) {
    std::string key = Serializer::DecodeString(map_value.fields[i].key);
    FieldValue value =
        Serializer::DecodeFieldValue(reader, map_value.fields[i].value);

    result = result.insert(key, value);
  }

  return result;
}

/**
 * Creates the prefix for a fully qualified resource path, without a local path
 * on the end.
 */
ResourcePath EncodeDatabaseId(const DatabaseId& database_id) {
  return ResourcePath{"projects", database_id.project_id(), "databases",
                      database_id.database_id()};
}

/**
 * Encodes a databaseId and resource path into the following form:
 * /projects/$projectId/database/$databaseId/documents/$path
 */
std::string EncodeResourceName(const DatabaseId& database_id,
                               const ResourcePath& path) {
  return EncodeDatabaseId(database_id)
      .Append("documents")
      .Append(path)
      .CanonicalString();
}

/**
 * Validates that a path has a prefix that looks like a valid encoded
 * databaseId.
 */
bool IsValidResourceName(const ResourcePath& path) {
  // Resource names have at least 4 components (project ID, database ID)
  // and commonly the (root) resource type, e.g. documents
  return path.size() >= 4 && path[0] == "projects" && path[2] == "databases";
}

/**
 * Decodes a fully qualified resource name into a resource path and validates
 * that there is a project and database encoded in the path. There are no
 * guarantees that a local path is also encoded in this resource name.
 */
ResourcePath DecodeResourceName(Reader* reader, absl::string_view encoded) {
  ResourcePath resource = ResourcePath::FromString(encoded);
  if (!IsValidResourceName(resource)) {
    reader->Fail(StringFormat("Tried to deserialize an invalid key %s",
                              resource.CanonicalString()));
  }
  return resource;
}

/**
 * Decodes a fully qualified resource name into a resource path and validates
 * that there is a project and database encoded in the path along with a local
 * path.
 */
ResourcePath ExtractLocalPathFromResourceName(
    Reader* reader, const ResourcePath& resource_name) {
  if (resource_name.size() <= 4 || resource_name[4] != "documents") {
    reader->Fail(StringFormat("Tried to deserialize invalid key %s",
                              resource_name.CanonicalString()));
    return ResourcePath{};
  }
  return resource_name.PopFirst(5);
}

StructuredQuery::CollectionSelector DecodeCollectionSelector(
    const google_firestore_v1_StructuredQuery_CollectionSelector& proto) {
  StructuredQuery::CollectionSelector collection_selector{};

  collection_selector.collection_id =
      Serializer::DecodeString(proto.collection_id);
  collection_selector.all_descendants = proto.all_descendants;

  return collection_selector;
}

StructuredQuery DecodeStructuredQuery(
    const google_firestore_v1_StructuredQuery& proto) {
  StructuredQuery query{};

  for (size_t i = 0; i < proto.from_count; i++) {
    query.from.push_back(DecodeCollectionSelector(proto.from[i]));
  }

  // TODO(rsgowman): decode other fields

  return query;
}

}  // namespace

Serializer::Serializer(DatabaseId database_id)
    : database_id_(std::move(database_id)),
      database_name_(EncodeDatabaseId(database_id_).CanonicalString()) {
}

void Serializer::FreeNanopbMessage(const pb_field_t fields[],
                                   void* dest_struct) {
  pb_release(fields, dest_struct);
}

google_firestore_v1_Value Serializer::EncodeFieldValue(
    const FieldValue& field_value) {
  // TODO(rsgowman): some refactoring is in order... but will wait until after a
  // non-varint, non-fixed-size (i.e. string) type is present before doing so.
  google_firestore_v1_Value result{};
  switch (field_value.type()) {
    case FieldValue::Type::Null:
      result.which_value_type = google_firestore_v1_Value_null_value_tag;
      result.null_value = google_protobuf_NullValue_NULL_VALUE;
      return result;

    case FieldValue::Type::Boolean:
      result.which_value_type = google_firestore_v1_Value_boolean_value_tag;
      result.boolean_value = field_value.boolean_value();
      return result;

    case FieldValue::Type::Integer:
      result.which_value_type = google_firestore_v1_Value_integer_value_tag;
      result.integer_value = field_value.integer_value();
      return result;

    case FieldValue::Type::Double:
      result.which_value_type = google_firestore_v1_Value_double_value_tag;
      result.double_value = field_value.double_value();
      return result;

    case FieldValue::Type::Timestamp:
      result.which_value_type = google_firestore_v1_Value_timestamp_value_tag;
      result.timestamp_value = EncodeTimestamp(field_value.timestamp_value());
      return result;

    case FieldValue::Type::ServerTimestamp:
      // TODO(rsgowman): Implement
      abort();

    case FieldValue::Type::String:
      result.which_value_type = google_firestore_v1_Value_string_value_tag;
      result.string_value = EncodeString(field_value.string_value());
      return result;

    case FieldValue::Type::Blob:
      result.which_value_type = google_firestore_v1_Value_bytes_value_tag;
      // Copy the blob so that pb_release can do the right thing.
      result.bytes_value =
          nanopb::CopyBytesArray(field_value.blob_value().get());
      return result;

    case FieldValue::Type::Reference:
      // TODO(rsgowman): Implement
      abort();

    case FieldValue::Type::GeoPoint:
      result.which_value_type = google_firestore_v1_Value_geo_point_value_tag;
      result.geo_point_value = EncodeGeoPoint(field_value.geo_point_value());
      return result;

    case FieldValue::Type::Array:
      result.which_value_type = google_firestore_v1_Value_array_value_tag;
      result.array_value = EncodeArray(field_value.array_value());
      return result;

    case FieldValue::Type::Object:
      result.which_value_type = google_firestore_v1_Value_map_value_tag;
      result.map_value = EncodeMapValue(ObjectValue(field_value));
      return result;
  }
  UNREACHABLE();
}

FieldValue Serializer::DecodeFieldValue(Reader* reader,
                                        const google_firestore_v1_Value& msg) {
  switch (msg.which_value_type) {
    case google_firestore_v1_Value_null_value_tag:
      if (msg.null_value != google_protobuf_NullValue_NULL_VALUE) {
        reader->Fail("Input proto bytes cannot be parsed (invalid null value)");
      }
      return FieldValue::Null();

    case google_firestore_v1_Value_boolean_value_tag: {
      // Due to the nanopb implementation, msg.boolean_value could be an integer
      // other than 0 or 1, (such as 2). This leads to undefined behaviour when
      // it's read as a boolean. eg. on at least gcc, the value is treated as
      // both true *and* false. So we'll instead memcpy to an integer (via
      // absl::bit_cast) and compare with 0.
      int bool_as_int = absl::bit_cast<int8_t>(msg.boolean_value);
      return FieldValue::FromBoolean(bool_as_int != 0);
    }

    case google_firestore_v1_Value_integer_value_tag:
      return FieldValue::FromInteger(msg.integer_value);

    case google_firestore_v1_Value_double_value_tag:
      return FieldValue::FromDouble(msg.double_value);

    case google_firestore_v1_Value_timestamp_value_tag: {
      return FieldValue::FromTimestamp(
          DecodeTimestamp(reader, msg.timestamp_value));
    }

    case google_firestore_v1_Value_string_value_tag:
      return FieldValue::FromString(DecodeString(msg.string_value));

    case google_firestore_v1_Value_bytes_value_tag:
      return FieldValue::FromBlob(ByteString(msg.bytes_value));

    case google_firestore_v1_Value_reference_value_tag:
      // TODO(b/74243929): Implement remaining types.
      HARD_FAIL("Unhandled message field number (tag): %i.",
                msg.which_value_type);

    case google_firestore_v1_Value_geo_point_value_tag:
      return FieldValue::FromGeoPoint(
          DecodeGeoPoint(reader, msg.geo_point_value));

    case google_firestore_v1_Value_array_value_tag:
      return FieldValue::FromArray(DecodeArray(reader, msg.array_value));

    case google_firestore_v1_Value_map_value_tag: {
      return FieldValue::FromMap(DecodeMapValue(reader, msg.map_value));
    }

    default:
      reader->Fail(StringFormat("Invalid type while decoding FieldValue: %s",
                                msg.which_value_type));
      return FieldValue::Null();
  }

  UNREACHABLE();
}

std::string Serializer::EncodeKey(const DocumentKey& key) const {
  return EncodeResourceName(database_id_, key.path());
}

DocumentKey Serializer::DecodeKey(Reader* reader,
                                  absl::string_view name) const {
  ResourcePath resource = DecodeResourceName(reader, name);
  if (resource.size() < 5) {
    reader->Fail(
        StringFormat("Attempted to decode invalid key: '%s'. Should have at "
                     "least 5 segments.",
                     name));
  } else if (resource[1] != database_id_.project_id()) {
    reader->Fail(
        StringFormat("Tried to deserialize key from different project. "
                     "Expected: '%s'. Found: '%s'. (Full key: '%s')",
                     database_id_.project_id(), resource[1], name));
  } else if (resource[3] != database_id_.database_id()) {
    reader->Fail(
        StringFormat("Tried to deserialize key from different database. "
                     "Expected: '%s'. Found: '%s'. (Full key: '%s')",
                     database_id_.database_id(), resource[3], name));
  }

  ResourcePath local_path = ExtractLocalPathFromResourceName(reader, resource);

  if (!DocumentKey::IsDocumentKey(local_path)) {
    reader->Fail(StringFormat("Invalid document key path: %s",
                              local_path.CanonicalString()));
  }

  // Avoid assertion failures in DocumentKey if local_path is invalid.
  if (!reader->status().ok()) return DocumentKey{};
  return DocumentKey{std::move(local_path)};
}

google_firestore_v1_Document Serializer::EncodeDocument(
    const DocumentKey& key, const ObjectValue& object_value) const {
  google_firestore_v1_Document result{};

  result.name = EncodeString(EncodeKey(key));

  // Encode Document.fields (unless it's empty)
  pb_size_t count = CheckedSize(object_value.GetInternalValue().size());
  result.fields_count = count;
  result.fields = MakeArray<google_firestore_v1_Document_FieldsEntry>(count);
  int i = 0;
  for (const auto& kv : object_value.GetInternalValue()) {
    result.fields[i].key = EncodeString(kv.first);
    result.fields[i].value = EncodeFieldValue(kv.second);
    i++;
  }

  // Skip Document.create_time and Document.update_time, since they're
  // output-only fields.

  return result;
}

MaybeDocument Serializer::DecodeMaybeDocument(
    Reader* reader,
    const google_firestore_v1_BatchGetDocumentsResponse& response) const {
  switch (response.which_result) {
    case google_firestore_v1_BatchGetDocumentsResponse_found_tag:
      return DecodeFoundDocument(reader, response);
    case google_firestore_v1_BatchGetDocumentsResponse_missing_tag:
      return DecodeMissingDocument(reader, response);
    default:
      reader->Fail(
          StringFormat("Unknown result case: %s", response.which_result));
      return {};
  }

  UNREACHABLE();
}

Document Serializer::DecodeFoundDocument(
    Reader* reader,
    const google_firestore_v1_BatchGetDocumentsResponse& response) const {
  HARD_ASSERT(response.which_result ==
                  google_firestore_v1_BatchGetDocumentsResponse_found_tag,
              "Tried to deserialize a found document from a missing document.");

  DocumentKey key = DecodeKey(reader, DecodeString(response.found.name));
  FieldValue::Map value =
      DecodeFields(reader, response.found.fields_count, response.found.fields);
  SnapshotVersion version =
      DecodeSnapshotVersion(reader, response.found.update_time);

  if (version == SnapshotVersion::None()) {
    reader->Fail("Got a document response with no snapshot version");
  }

  return Document(ObjectValue::FromMap(std::move(value)), std::move(key),
                  version, DocumentState::kSynced);
}

NoDocument Serializer::DecodeMissingDocument(
    Reader* reader,
    const google_firestore_v1_BatchGetDocumentsResponse& response) const {
  HARD_ASSERT(response.which_result ==
                  google_firestore_v1_BatchGetDocumentsResponse_missing_tag,
              "Tried to deserialize a missing document from a found document.");

  DocumentKey key = DecodeKey(reader, DecodeString(response.missing));
  SnapshotVersion version = DecodeSnapshotVersion(reader, response.read_time);

  if (version == SnapshotVersion::None()) {
    reader->Fail("Got a no document response with no snapshot version");
    return {};
  }

  return NoDocument(std::move(key), version,
                    /*has_committed_mutations=*/false);
}

Document Serializer::DecodeDocument(
    Reader* reader, const google_firestore_v1_Document& proto) const {
  FieldValue::Map fields_internal =
      DecodeFields(reader, proto.fields_count, proto.fields);
  SnapshotVersion version = DecodeSnapshotVersion(reader, proto.update_time);

  return Document(ObjectValue::FromMap(std::move(fields_internal)),
                  DecodeKey(reader, DecodeString(proto.name)), version,
                  DocumentState::kSynced);
}

google_firestore_v1_Write Serializer::EncodeMutation(
    const Mutation& mutation) const {
  HARD_ASSERT(mutation.is_valid(), "Invalid mutation encountered.");
  google_firestore_v1_Write result{};

  if (!mutation.precondition().is_none()) {
    result.current_document = EncodePrecondition(mutation.precondition());
  }

  switch (mutation.type()) {
    case Mutation::Type::Set: {
      result.which_operation = google_firestore_v1_Write_update_tag;
      result.update = EncodeDocument(
          mutation.key(), static_cast<const SetMutation&>(mutation).value());
      return result;
    }

    case Mutation::Type::Patch: {
      result.which_operation = google_firestore_v1_Write_update_tag;
      auto patch_mutation = static_cast<const PatchMutation&>(mutation);
      result.update = EncodeDocument(mutation.key(), patch_mutation.value());
      result.update_mask = EncodeFieldMask(patch_mutation.mask());
      return result;
    }

    case Mutation::Type::Transform: {
      result.which_operation = google_firestore_v1_Write_transform_tag;
      auto transform = static_cast<const TransformMutation&>(mutation);
      result.transform.document = EncodeString(EncodeKey(transform.key()));

      pb_size_t count = CheckedSize(transform.field_transforms().size());
      result.transform.field_transforms_count = count;
      result.transform.field_transforms =
          MakeArray<google_firestore_v1_DocumentTransform_FieldTransform>(
              count);
      int i = 0;
      for (const FieldTransform& field_transform :
           transform.field_transforms()) {
        result.transform.field_transforms[i] =
            EncodeFieldTransform(field_transform);
        i++;
      }
      return result;
    }

    case Mutation::Type::Delete: {
      result.which_operation = google_firestore_v1_Write_delete_tag;
      result.delete_ = EncodeString(EncodeKey(mutation.key()));
      return result;
    }
  }

  UNREACHABLE();
}

Mutation Serializer::DecodeMutation(
    nanopb::Reader* reader, const google_firestore_v1_Write& mutation) const {
  Precondition precondition =
      DecodePrecondition(reader, mutation.current_document);

  switch (mutation.which_operation) {
    case google_firestore_v1_Write_update_tag: {
      DocumentKey key = DecodeKey(reader, DecodeString(mutation.update.name));
      ObjectValue value = ObjectValue::FromMap(DecodeFields(
          reader, mutation.update.fields_count, mutation.update.fields));
      FieldMask mask = DecodeFieldMask(mutation.update_mask);
      if (mask.size() > 0) {
        return PatchMutation(std::move(key), std::move(value), std::move(mask),
                             std::move(precondition));
      } else {
        return SetMutation(std::move(key), std::move(value),
                           std::move(precondition));
      }
    }

    case google_firestore_v1_Write_delete_tag:
      return DeleteMutation(DecodeKey(reader, DecodeString(mutation.delete_)),
                            std::move(precondition));

    case google_firestore_v1_Write_transform_tag: {
      std::vector<FieldTransform> field_transforms;
      for (size_t i = 0; i < mutation.transform.field_transforms_count; i++) {
        field_transforms.push_back(DecodeFieldTransform(
            reader, mutation.transform.field_transforms[i]));
      }

      HARD_ASSERT(precondition.type() == Precondition::Type::Exists &&
                      precondition.exists(),
                  "Transforms only support precondition \"exists == true\"");

      return TransformMutation(
          DecodeKey(reader, MakeStringView(mutation.transform.document)),
          field_transforms);
    }

    default:
      reader->Fail(StringFormat("Unknown mutation operation: %s",
                                mutation.which_operation));
      return {};
  }

  UNREACHABLE();
}

/* static */
google_firestore_v1_Precondition Serializer::EncodePrecondition(
    const Precondition& precondition) {
  google_firestore_v1_Precondition result{};

  switch (precondition.type()) {
    case Precondition::Type::None:
      HARD_FAIL("Can't serialize an empty precondition");

    case Precondition::Type::UpdateTime:
      result.which_condition_type =
          google_firestore_v1_Precondition_update_time_tag;
      result.update_time = EncodeVersion(precondition.update_time());
      return result;

    case Precondition::Type::Exists:
      result.which_condition_type = google_firestore_v1_Precondition_exists_tag;
      result.exists = precondition.exists();
      return result;
  }

  UNREACHABLE();
}

/* static */
Precondition Serializer::DecodePrecondition(
    nanopb::Reader* reader,
    const google_firestore_v1_Precondition& precondition) {
  switch (precondition.which_condition_type) {
    // 0 => type unset. nanopb doesn't provide a constant for this, so we use a
    // raw integer.
    case 0:
      return Precondition::None();
    case google_firestore_v1_Precondition_exists_tag: {
      // TODO(rsgowman): Refactor with other instance of bit_cast.

      // Due to the nanopb implementation, precondition.exists could be an
      // integer other than 0 or 1, (such as 2). This leads to undefined
      // behaviour when it's read as a boolean. eg. on at least gcc, the value
      // is treated as both true *and* false. So we'll instead memcpy to an
      // integer (via absl::bit_cast) and compare with 0.
      int bool_as_int = absl::bit_cast<int8_t>(precondition.exists);
      return Precondition::Exists(bool_as_int != 0);
    }
    case google_firestore_v1_Precondition_update_time_tag:
      return Precondition::UpdateTime(
          DecodeSnapshotVersion(reader, precondition.update_time));
  }

  reader->Fail(StringFormat("Unknown Precondition type: %s",
                            precondition.which_condition_type));
  return Precondition::None();
}

/* static */
google_firestore_v1_DocumentMask Serializer::EncodeFieldMask(
    const FieldMask& mask) {
  google_firestore_v1_DocumentMask result{};

  pb_size_t count = CheckedSize(mask.size());
  result.field_paths_count = count;
  result.field_paths = MakeArray<pb_bytes_array_t*>(count);

  int i = 0;
  for (const FieldPath& path : mask) {
    result.field_paths[i] = EncodeFieldPath(path);
    i++;
  }

  return result;
}

/* static */
FieldMask Serializer::DecodeFieldMask(
    const google_firestore_v1_DocumentMask& mask) {
  std::set<FieldPath> fields;
  for (size_t i = 0; i < mask.field_paths_count; i++) {
    fields.insert(DecodeFieldPath(mask.field_paths[i]));
  }
  return FieldMask(std::move(fields));
}

/* static */
google_firestore_v1_DocumentTransform_FieldTransform
Serializer::EncodeFieldTransform(const FieldTransform& field_transform) {
  using Type = TransformOperation::Type;

  google_firestore_v1_DocumentTransform_FieldTransform proto{};
  proto.field_path = EncodeFieldPath(field_transform.path());

  switch (field_transform.transformation().type()) {
    case Type::ServerTimestamp:
      proto.which_transform_type =
          google_firestore_v1_DocumentTransform_FieldTransform_set_to_server_value_tag;  // NOLINT
      proto.set_to_server_value =
          google_firestore_v1_DocumentTransform_FieldTransform_ServerValue_REQUEST_TIME;  // NOLINT
      return proto;

    case Type::ArrayUnion:
      proto.which_transform_type =
          google_firestore_v1_DocumentTransform_FieldTransform_append_missing_elements_tag;  // NOLINT
      proto.append_missing_elements = EncodeArray(
          ArrayTransform(field_transform.transformation()).elements());
      return proto;

    case Type::ArrayRemove:
      proto.which_transform_type =
          google_firestore_v1_DocumentTransform_FieldTransform_remove_all_from_array_tag;  // NOLINT
      proto.remove_all_from_array = EncodeArray(
          ArrayTransform(field_transform.transformation()).elements());
      return proto;

    case Type::Increment: {
      const auto& increment = static_cast<const NumericIncrementTransform&>(
          field_transform.transformation());
      proto.increment = EncodeFieldValue(increment.operand());
      return proto;
    }
  }

  UNREACHABLE();
}

/* static */ FieldTransform Serializer::DecodeFieldTransform(
    nanopb::Reader* reader,
    const google_firestore_v1_DocumentTransform_FieldTransform& proto) {
  switch (proto.which_transform_type) {
    case google_firestore_v1_DocumentTransform_FieldTransform_set_to_server_value_tag: {  // NOLINT
      HARD_ASSERT(
          proto.set_to_server_value ==
              google_firestore_v1_DocumentTransform_FieldTransform_ServerValue_REQUEST_TIME,  // NOLINT
          "Unknown transform setToServerValue: %s", proto.set_to_server_value);

      return FieldTransform(DecodeFieldPath(proto.field_path),
                            ServerTimestampTransform());
    }

    case google_firestore_v1_DocumentTransform_FieldTransform_append_missing_elements_tag: {  // NOLINT
      std::vector<FieldValue> elements =
          DecodeArray(reader, proto.append_missing_elements);
      return FieldTransform(DecodeFieldPath(proto.field_path),
                            ArrayTransform(TransformOperation::Type::ArrayUnion,
                                           std::move(elements)));
    }

    case google_firestore_v1_DocumentTransform_FieldTransform_remove_all_from_array_tag: {  // NOLINT
      std::vector<FieldValue> elements =
          DecodeArray(reader, proto.remove_all_from_array);
      return FieldTransform(
          DecodeFieldPath(proto.field_path),
          ArrayTransform(TransformOperation::Type::ArrayRemove,
                         std::move(elements)));
    }

    case google_firestore_v1_DocumentTransform_FieldTransform_increment_tag: {
      FieldValue operand = DecodeFieldValue(reader, proto.increment);
      return FieldTransform(DecodeFieldPath(proto.field_path),
                            NumericIncrementTransform(std::move(operand)));
    }
  }

  UNREACHABLE();
}

/* static */
pb_bytes_array_t* Serializer::EncodeFieldPath(const FieldPath& field_path) {
  return EncodeString(field_path.CanonicalString());
}

/* static */
FieldPath Serializer::DecodeFieldPath(const pb_bytes_array_t* field_path) {
  absl::string_view str = MakeStringView(field_path);
  return FieldPath::FromServerFormat(str);
}

google_firestore_v1_Target_QueryTarget Serializer::EncodeQueryTarget(
    const core::Query& query) const {
  google_firestore_v1_Target_QueryTarget result{};

  // Dissect the path into parent, collection_id and optional key filter.
  std::string collection_id;
  // TODO(rsgowman): Port Collection Group Queries logic.
  if (query.path().empty()) {
    result.parent = EncodeString(EncodeQueryPath(ResourcePath::Empty()));
  } else {
    ResourcePath path = query.path();
    HARD_ASSERT(path.size() % 2 != 0,
                "Document queries with filters are not supported.");
    result.parent = EncodeString(EncodeQueryPath(path.PopLast()));
    collection_id = path.last_segment();
  }

  result.which_query_type =
      google_firestore_v1_Target_QueryTarget_structured_query_tag;

  if (!collection_id.empty()) {
    pb_size_t count = 1;
    result.structured_query.from_count = count;
    result.structured_query.from =
        MakeArray<google_firestore_v1_StructuredQuery_CollectionSelector>(
            count);
    result.structured_query.from[0].collection_id = EncodeString(collection_id);
  } else {
    result.structured_query.from_count = 0;
  }

  // Encode the filters.
  if (!query.filters().empty()) {
    // TODO(rsgowman): Implement
    abort();
  }

  // TODO(rsgowman): Encode the orders.
  // TODO(rsgowman): Encode the limit.
  // TODO(rsgowman): Encode the startat.
  // TODO(rsgowman): Encode the endat.

  return result;
}

ResourcePath DecodeQueryPath(Reader* reader, absl::string_view name) {
  ResourcePath resource = DecodeResourceName(reader, name);
  if (resource.size() == 4) {
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local query cache.
    return ResourcePath::Empty();
  } else {
    return ExtractLocalPathFromResourceName(reader, resource);
  }
}

Query Serializer::DecodeQueryTarget(
    nanopb::Reader* reader,
    const google_firestore_v1_Target_QueryTarget& proto) {
  // The QueryTarget oneof only has a single valid value.
  if (proto.which_query_type !=
      google_firestore_v1_Target_QueryTarget_structured_query_tag) {
    reader->Fail(
        StringFormat("Unknown query_type: %s", proto.which_query_type));
    return Query::Invalid();
  }

  ResourcePath path = DecodeQueryPath(reader, DecodeString(proto.parent));
  StructuredQuery query = DecodeStructuredQuery(proto.structured_query);

  size_t from_count = query.from.size();
  if (from_count > 0) {
    if (from_count != 1) {
      reader->Fail(
          "StructuredQuery.from with more than one collection is not "
          "supported.");
    }

    path = path.Append(query.from[0].collection_id);
  }

  // TODO(rsgowman): Dencode the filters.
  // TODO(rsgowman): Dencode the orders.
  // TODO(rsgowman): Dencode the limit.
  // TODO(rsgowman): Dencode the startat.
  // TODO(rsgowman): Dencode the endat.

  return Query(path);
}

std::string Serializer::EncodeQueryPath(const ResourcePath& path) const {
  return EncodeResourceName(database_id_, path);
}

google_protobuf_Timestamp Serializer::EncodeVersion(
    const SnapshotVersion& version) {
  return EncodeTimestamp(version.timestamp());
}

google_protobuf_Timestamp Serializer::EncodeTimestamp(
    const Timestamp& timestamp_value) {
  google_protobuf_Timestamp result{};
  result.seconds = timestamp_value.seconds();
  result.nanos = timestamp_value.nanoseconds();
  return result;
}

SnapshotVersion Serializer::DecodeSnapshotVersion(
    nanopb::Reader* reader, const google_protobuf_Timestamp& proto) {
  return SnapshotVersion{DecodeTimestamp(reader, proto)};
}

Timestamp Serializer::DecodeTimestamp(
    nanopb::Reader* reader, const google_protobuf_Timestamp& timestamp_proto) {
  // The Timestamp ctor will assert if we provide values outside the valid
  // range. However, since we're decoding, a single corrupt byte could cause
  // this to occur, so we'll verify the ranges before passing them in since we'd
  // rather not abort in these situations.
  if (timestamp_proto.seconds < TimestampInternal::Min().seconds()) {
    reader->Fail(
        "Invalid message: timestamp beyond the earliest supported date");
  } else if (TimestampInternal::Max().seconds() < timestamp_proto.seconds) {
    reader->Fail("Invalid message: timestamp beyond the latest supported date");
  } else if (timestamp_proto.nanos < 0 || timestamp_proto.nanos > 999999999) {
    reader->Fail(
        "Invalid message: timestamp nanos must be between 0 and 999999999");
  }

  if (!reader->status().ok()) return Timestamp();
  return Timestamp{timestamp_proto.seconds, timestamp_proto.nanos};
}

/* static */
google_type_LatLng Serializer::EncodeGeoPoint(const GeoPoint& geo_point_value) {
  google_type_LatLng result{};
  result.latitude = geo_point_value.latitude();
  result.longitude = geo_point_value.longitude();
  return result;
}

/* static */
GeoPoint Serializer::DecodeGeoPoint(nanopb::Reader* reader,
                                    const google_type_LatLng& latlng_proto) {
  // The GeoPoint ctor will assert if we provide values outside the valid range.
  // However, since we're decoding, a single corrupt byte could cause this to
  // occur, so we'll verify the ranges before passing them in since we'd rather
  // not abort in these situations.
  double latitude = latlng_proto.latitude;
  double longitude = latlng_proto.longitude;
  if (std::isnan(latitude) || latitude < -90 || 90 < latitude) {
    reader->Fail("Invalid message: Latitude must be in the range of [-90, 90]");
  } else if (std::isnan(longitude) || longitude < -180 || 180 < longitude) {
    reader->Fail(
        "Invalid message: Latitude must be in the range of [-180, 180]");
  }

  if (!reader->status().ok()) return GeoPoint();
  return GeoPoint(latitude, longitude);
}

/* static */
google_firestore_v1_ArrayValue Serializer::EncodeArray(
    const std::vector<FieldValue>& array_value) {
  google_firestore_v1_ArrayValue result{};

  pb_size_t count = CheckedSize(array_value.size());
  result.values_count = count;
  result.values = MakeArray<google_firestore_v1_Value>(count);

  size_t i = 0;
  for (const FieldValue& fv : array_value) {
    result.values[i++] = EncodeFieldValue(fv);
  }

  return result;
}

/* static */
std::vector<FieldValue> Serializer::DecodeArray(
    nanopb::Reader* reader, const google_firestore_v1_ArrayValue& array_proto) {
  std::vector<FieldValue> result;
  result.reserve(array_proto.values_count);

  for (size_t i = 0; i < array_proto.values_count; i++) {
    result.push_back(DecodeFieldValue(reader, array_proto.values[i]));
  }

  return result;
}

}  // namespace remote
}  // namespace firestore
}  // namespace firebase
