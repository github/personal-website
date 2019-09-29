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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_PROTO_SIZER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_PROTO_SIZER_H_

#if !defined(__OBJC__)
#error "This header only supports Objective-C++"
#endif  // !defined(__OBJC__)

#include "Firestore/core/src/firebase/firestore/local/sizer.h"

@class FSTLocalSerializer;

namespace firebase {
namespace firestore {
namespace local {

/**
 * Estimates the stored size of documents and queries by translating to protos
 * and using the serialized sizes to estimate.
 */
class ProtoSizer : public Sizer {
 public:
  explicit ProtoSizer(FSTLocalSerializer* serializer);

  size_t CalculateByteSize(
      const model::MaybeDocument& maybe_doc) const override;

  size_t CalculateByteSize(const QueryData& query_data) const override;

 private:
  FSTLocalSerializer* serializer_;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_PROTO_SIZER_H_
