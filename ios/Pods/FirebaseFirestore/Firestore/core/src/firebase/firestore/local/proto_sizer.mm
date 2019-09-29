/*
 * Copyright 2019 Google
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

#include "Firestore/core/src/firebase/firestore/local/proto_sizer.h"

#import "Firestore/Protos/objc/firestore/local/MaybeDocument.pbobjc.h"
#import "Firestore/Protos/objc/firestore/local/Target.pbobjc.h"
#import "Firestore/Source/Local/FSTLocalSerializer.h"

#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"

namespace firebase {
namespace firestore {
namespace local {
namespace {

using model::DocumentKey;
using model::MaybeDocument;

/**
 * Returns an estimate of the number of bytes used to store the given document
 * key in memory. This is only an estimate and includes the size of the segments
 * of the path, but not any object overhead or path separators.
 */
size_t DocumentKeyByteSize(const DocumentKey& key) {
  size_t count = 0;
  for (const auto& segment : key.path()) {
    count += segment.size();
  }
  return count;
}

}  // namespace

ProtoSizer::ProtoSizer(FSTLocalSerializer* serializer)
    : serializer_(serializer) {
}

size_t ProtoSizer::CalculateByteSize(const MaybeDocument& maybe_doc) const {
  size_t count = DocumentKeyByteSize(maybe_doc.key());
  count += [[serializer_ encodedMaybeDocument:maybe_doc] serializedSize];
  return count;
}

size_t ProtoSizer::CalculateByteSize(const QueryData& query_data) const {
  return [[serializer_ encodedQueryData:query_data] serializedSize];
}

}  // namespace local
}  // namespace firestore
}  // namespace firebase
