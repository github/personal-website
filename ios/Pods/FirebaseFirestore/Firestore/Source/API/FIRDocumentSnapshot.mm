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

#import "FIRDocumentSnapshot+Internal.h"

#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/util/warnings.h"

#import "Firestore/Source/API/FIRDocumentReference+Internal.h"
#import "Firestore/Source/API/FIRFieldPath+Internal.h"
#import "Firestore/Source/API/FIRFirestore+Internal.h"
#import "Firestore/Source/API/FIRGeoPoint+Internal.h"
#import "Firestore/Source/API/FIRSnapshotMetadata+Internal.h"
#import "Firestore/Source/API/FIRTimestamp+Internal.h"
#import "Firestore/Source/API/converters.h"

#include "Firestore/core/src/firebase/firestore/api/document_snapshot.h"
#include "Firestore/core/src/firebase/firestore/api/firestore.h"
#include "Firestore/core/src/firebase/firestore/api/input_validation.h"
#include "Firestore/core/src/firebase/firestore/api/settings.h"
#include "Firestore/core/src/firebase/firestore/model/database_id.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/field_value_options.h"
#include "Firestore/core/src/firebase/firestore/nanopb/nanopb_util.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"

namespace util = firebase::firestore::util;
using firebase::Timestamp;
using firebase::firestore::GeoPoint;
using firebase::firestore::api::DocumentSnapshot;
using firebase::firestore::api::Firestore;
using firebase::firestore::api::MakeFIRGeoPoint;
using firebase::firestore::api::MakeFIRTimestamp;
using firebase::firestore::api::SnapshotMetadata;
using firebase::firestore::api::ThrowInvalidArgument;
using firebase::firestore::model::DatabaseId;
using firebase::firestore::model::Document;
using firebase::firestore::model::DocumentKey;
using firebase::firestore::model::FieldValue;
using firebase::firestore::model::FieldValueOptions;
using firebase::firestore::model::ObjectValue;
using firebase::firestore::model::ServerTimestampBehavior;
using firebase::firestore::nanopb::MakeNSData;

NS_ASSUME_NONNULL_BEGIN

namespace {

/**
 * Converts a public FIRServerTimestampBehavior into its internal equivalent.
 */
ServerTimestampBehavior InternalServerTimestampBehavior(FIRServerTimestampBehavior behavior) {
  switch (behavior) {
    case FIRServerTimestampBehaviorNone:
      return ServerTimestampBehavior::kNone;
    case FIRServerTimestampBehaviorEstimate:
      return ServerTimestampBehavior::kEstimate;
    case FIRServerTimestampBehaviorPrevious:
      return ServerTimestampBehavior::kPrevious;
    default:
      HARD_FAIL("Unexpected server timestamp option: %s", behavior);
  }
}

}  // namespace

@implementation FIRDocumentSnapshot {
  DocumentSnapshot _snapshot;

  FIRSnapshotMetadata *_cachedMetadata;
}

- (instancetype)initWithSnapshot:(DocumentSnapshot &&)snapshot {
  if (self = [super init]) {
    _snapshot = std::move(snapshot);
  }
  return self;
}

- (instancetype)initWithFirestore:(std::shared_ptr<Firestore>)firestore
                      documentKey:(DocumentKey)documentKey
                         document:(const absl::optional<Document> &)document
                         metadata:(SnapshotMetadata)metadata {
  DocumentSnapshot wrapped{firestore, std::move(documentKey), document, std::move(metadata)};
  return [self initWithSnapshot:std::move(wrapped)];
}

- (instancetype)initWithFirestore:(std::shared_ptr<Firestore>)firestore
                      documentKey:(DocumentKey)documentKey
                         document:(const absl::optional<Document> &)document
                        fromCache:(bool)fromCache
                 hasPendingWrites:(bool)hasPendingWrites {
  return [self initWithFirestore:firestore
                     documentKey:std::move(documentKey)
                        document:document
                        metadata:SnapshotMetadata(hasPendingWrites, fromCache)];
}

// NSObject Methods
- (BOOL)isEqual:(nullable id)other {
  if (other == self) return YES;
  // self class could be FIRDocumentSnapshot or subtype. So we compare with base type explicitly.
  if (![other isKindOfClass:[FIRDocumentSnapshot class]]) return NO;

  return _snapshot == static_cast<FIRDocumentSnapshot *>(other)->_snapshot;
}

- (NSUInteger)hash {
  return _snapshot.Hash();
}

@dynamic exists;

- (BOOL)exists {
  return _snapshot.exists();
}

- (const absl::optional<Document> &)internalDocument {
  return _snapshot.internal_document();
}

- (FIRDocumentReference *)reference {
  return [[FIRDocumentReference alloc] initWithReference:_snapshot.CreateReference()];
}

- (NSString *)documentID {
  return util::MakeNSString(_snapshot.document_id());
}

@dynamic metadata;

- (FIRSnapshotMetadata *)metadata {
  if (!_cachedMetadata) {
    _cachedMetadata = [[FIRSnapshotMetadata alloc] initWithMetadata:_snapshot.metadata()];
  }
  return _cachedMetadata;
}

- (nullable NSDictionary<NSString *, id> *)data {
  return [self dataWithServerTimestampBehavior:FIRServerTimestampBehaviorNone];
}

- (nullable NSDictionary<NSString *, id> *)dataWithServerTimestampBehavior:
    (FIRServerTimestampBehavior)serverTimestampBehavior {
  FieldValueOptions options = [self optionsForServerTimestampBehavior:serverTimestampBehavior];
  absl::optional<ObjectValue> data = _snapshot.GetData();
  if (!data) return nil;

  return [self convertedObject:data->GetInternalValue() options:options];
}

- (nullable id)valueForField:(id)field {
  return [self valueForField:field serverTimestampBehavior:FIRServerTimestampBehaviorNone];
}

- (nullable id)valueForField:(id)field
     serverTimestampBehavior:(FIRServerTimestampBehavior)serverTimestampBehavior {
  FIRFieldPath *fieldPath;
  if ([field isKindOfClass:[NSString class]]) {
    fieldPath = [FIRFieldPath pathWithDotSeparatedString:field];
  } else if ([field isKindOfClass:[FIRFieldPath class]]) {
    fieldPath = field;
  } else {
    ThrowInvalidArgument("Subscript key must be an NSString or FIRFieldPath.");
  }

  absl::optional<FieldValue> fieldValue = _snapshot.GetValue(fieldPath.internalValue);
  FieldValueOptions options = [self optionsForServerTimestampBehavior:serverTimestampBehavior];
  return !fieldValue ? nil : [self convertedValue:*fieldValue options:options];
}

- (nullable id)objectForKeyedSubscript:(id)key {
  return [self valueForField:key];
}

- (FieldValueOptions)optionsForServerTimestampBehavior:
    (FIRServerTimestampBehavior)serverTimestampBehavior {
  SUPPRESS_DEPRECATED_DECLARATIONS_BEGIN()
  return FieldValueOptions(InternalServerTimestampBehavior(serverTimestampBehavior),
                           _snapshot.firestore()->settings().timestamps_in_snapshots_enabled());
  SUPPRESS_END()
}

- (id)convertedValue:(FieldValue)value options:(const FieldValueOptions &)options {
  switch (value.type()) {
    case FieldValue::Type::Null:
      return [NSNull null];
    case FieldValue::Type::Boolean:
      return value.boolean_value() ? @YES : @NO;
    case FieldValue::Type::Integer:
      return @(value.integer_value());
    case FieldValue::Type::Double:
      return @(value.double_value());
    case FieldValue::Type::Timestamp:
      return [self convertedTimestamp:value options:options];
    case FieldValue::Type::ServerTimestamp:
      return [self convertedServerTimestamp:value options:options];
    case FieldValue::Type::String:
      return util::MakeNSString(value.string_value());
    case FieldValue::Type::Blob:
      return MakeNSData(value.blob_value());
    case FieldValue::Type::Reference:
      return [self convertedReference:value];
    case FieldValue::Type::GeoPoint:
      return MakeFIRGeoPoint(value.geo_point_value());
    case FieldValue::Type::Array:
      return [self convertedArray:value.array_value() options:options];
    case FieldValue::Type::Object:
      return [self convertedObject:value.object_value() options:options];
  }

  UNREACHABLE();
}

- (id)convertedTimestamp:(const FieldValue &)value options:(const FieldValueOptions &)options {
  FIRTimestamp *wrapped = MakeFIRTimestamp(value.timestamp_value());
  if (options.timestamps_in_snapshots_enabled()) {
    return wrapped;
  } else {
    return [wrapped dateValue];
  }
}

- (id)convertedServerTimestamp:(const FieldValue &)value
                       options:(const FieldValueOptions &)options {
  const auto &sts = value.server_timestamp_value();
  switch (options.server_timestamp_behavior()) {
    case ServerTimestampBehavior::kNone:
      return [NSNull null];
    case ServerTimestampBehavior::kEstimate: {
      FieldValue local_write_time = FieldValue::FromTimestamp(sts.local_write_time());
      return [self convertedTimestamp:local_write_time options:options];
    }
    case ServerTimestampBehavior::kPrevious:
      return sts.previous_value() ? [self convertedValue:*sts.previous_value() options:options]
                                  : [NSNull null];
  }

  UNREACHABLE();
}

- (id)convertedReference:(const FieldValue &)value {
  const auto &ref = value.reference_value();
  const DatabaseId &refDatabase = ref.database_id();
  const DatabaseId &database = _snapshot.firestore()->database_id();
  if (refDatabase != database) {
    LOG_WARN("Document %s contains a document reference within a different database (%s/%s) which "
             "is not supported. It will be treated as a reference within the current database "
             "(%s/%s) instead.",
             _snapshot.CreateReference().Path(), refDatabase.project_id(),
             refDatabase.database_id(), database.project_id(), database.database_id());
  }
  const DocumentKey &key = ref.key();
  return [[FIRDocumentReference alloc] initWithKey:key firestore:_snapshot.firestore()];
}

- (NSArray<id> *)convertedArray:(const FieldValue::Array &)arrayContents
                        options:(const FieldValueOptions &)options {
  NSMutableArray *result = [NSMutableArray arrayWithCapacity:arrayContents.size()];
  for (const FieldValue &value : arrayContents) {
    [result addObject:[self convertedValue:value options:options]];
  }
  return result;
}

- (NSDictionary<NSString *, id> *)convertedObject:(const FieldValue::Map &)objectValue
                                          options:(const FieldValueOptions &)options {
  NSMutableDictionary *result = [NSMutableDictionary dictionary];
  for (const auto &kv : objectValue) {
    const std::string &key = kv.first;
    const FieldValue &value = kv.second;

    result[util::MakeNSString(key)] = [self convertedValue:value options:options];
  }
  return result;
}

@end

@implementation FIRQueryDocumentSnapshot

- (NSDictionary<NSString *, id> *)data {
  NSDictionary<NSString *, id> *data = [super data];
  HARD_ASSERT(data, "Document in a QueryDocumentSnapshot should exist");
  return data;
}

- (NSDictionary<NSString *, id> *)dataWithServerTimestampBehavior:
    (FIRServerTimestampBehavior)serverTimestampBehavior {
  NSDictionary<NSString *, id> *data =
      [super dataWithServerTimestampBehavior:serverTimestampBehavior];
  HARD_ASSERT(data, "Document in a QueryDocumentSnapshot should exist");
  return data;
}

@end

NS_ASSUME_NONNULL_END
