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

#import "FIRCollectionReference.h"

#include <utility>

#import "Firestore/Source/API/FIRDocumentReference+Internal.h"
#import "Firestore/Source/API/FIRFirestore+Internal.h"
#import "Firestore/Source/API/FIRQuery+Internal.h"
#import "Firestore/Source/API/FSTUserDataConverter.h"

#include "Firestore/core/src/firebase/firestore/api/collection_reference.h"
#include "Firestore/core/src/firebase/firestore/api/input_validation.h"
#include "Firestore/core/src/firebase/firestore/model/resource_path.h"
#include "Firestore/core/src/firebase/firestore/util/error_apple.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"

namespace util = firebase::firestore::util;
using firebase::firestore::api::CollectionReference;
using firebase::firestore::api::DocumentReference;
using firebase::firestore::api::ThrowInvalidArgument;
using firebase::firestore::core::ParsedSetData;
using firebase::firestore::model::ResourcePath;

NS_ASSUME_NONNULL_BEGIN

@implementation FIRCollectionReference

- (instancetype)initWithReference:(CollectionReference &&)reference {
  return [super initWithQuery:std::move(reference)];
}

- (instancetype)initWithPath:(ResourcePath)path
                   firestore:(std::shared_ptr<api::Firestore>)firestore {
  CollectionReference ref(std::move(path), std::move(firestore));
  return [self initWithReference:std::move(ref)];
}

// Override the designated initializer from the super class.
- (instancetype)initWithQuery:(api::Query &&)query {
  HARD_FAIL("Use FIRCollectionReference initWithPath: initializer.");
}

// NSObject Methods
- (BOOL)isEqual:(nullable id)other {
  if (other == self) return YES;
  if (![[other class] isEqual:[self class]]) return NO;

  return [self isEqualToReference:other];
}

- (BOOL)isEqualToReference:(nullable FIRCollectionReference *)otherReference {
  if (self == otherReference) return YES;
  if (otherReference == nil) return NO;
  return self.reference == otherReference.reference;
}

- (NSUInteger)hash {
  return self.reference.Hash();
}

- (const CollectionReference &)reference {
  // TODO(wilhuff): Use some alternate method for doing this.
  //
  // Casting from Query& to CollectionReference& when the value is actually a
  // Query violates aliasing rules and is technically undefined behavior.
  // Nevertheless this works on Clang so this is good enough for now.
  return static_cast<const CollectionReference &>(self.apiQuery);
}

- (NSString *)collectionID {
  return util::MakeNSString(self.reference.collection_id());
}

- (FIRDocumentReference *_Nullable)parent {
  absl::optional<DocumentReference> parent = self.reference.parent();
  if (!parent) {
    return nil;
  }
  return [[FIRDocumentReference alloc] initWithReference:std::move(*parent)];
}

- (NSString *)path {
  return util::MakeNSString(self.reference.path());
}

- (FIRDocumentReference *)documentWithPath:(NSString *)documentPath {
  if (!documentPath) {
    ThrowInvalidArgument("Document path cannot be nil.");
  }
  DocumentReference child = self.reference.Document(util::MakeString(documentPath));
  return [[FIRDocumentReference alloc] initWithReference:std::move(child)];
}

- (FIRDocumentReference *)addDocumentWithData:(NSDictionary<NSString *, id> *)data {
  return [self addDocumentWithData:data completion:nil];
}

- (FIRDocumentReference *)addDocumentWithData:(NSDictionary<NSString *, id> *)data
                                   completion:
                                       (nullable void (^)(NSError *_Nullable error))completion {
  ParsedSetData parsed = [self.firestore.dataConverter parsedSetData:data];
  DocumentReference docRef =
      self.reference.AddDocument(std::move(parsed), util::MakeCallback(completion));
  return [[FIRDocumentReference alloc] initWithReference:std::move(docRef)];
}

- (FIRDocumentReference *)documentWithAutoID {
  return [[FIRDocumentReference alloc] initWithReference:self.reference.Document()];
}

@end

NS_ASSUME_NONNULL_END
