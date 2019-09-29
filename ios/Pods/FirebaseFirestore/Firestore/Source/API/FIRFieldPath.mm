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

#import "FIRFieldPath.h"

#include <functional>
#include <string>
#include <utility>
#include <vector>

#import "Firestore/Source/API/FIRFieldPath+Internal.h"

#include "Firestore/core/src/firebase/firestore/api/input_validation.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/util/hashing.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"

namespace util = firebase::firestore::util;
using firebase::firestore::api::ThrowInvalidArgument;
using firebase::firestore::model::FieldPath;

NS_ASSUME_NONNULL_BEGIN

@interface FIRFieldPath () {
  /** Internal field path representation */
  firebase::firestore::model::FieldPath _internalValue;
}

@end

@implementation FIRFieldPath

- (instancetype)initWithFields:(NSArray<NSString *> *)fieldNames {
  if (fieldNames.count == 0) {
    ThrowInvalidArgument("Invalid field path. Provided names must not be empty.");
  }

  std::vector<std::string> converted;
  converted.reserve(fieldNames.count);
  for (NSString *fieldName in fieldNames) {
    converted.emplace_back(util::MakeString(fieldName));
  }

  return [self initPrivate:FieldPath::FromSegments(std::move(converted))];
}

+ (instancetype)documentID {
  return [[FIRFieldPath alloc] initPrivate:FieldPath::KeyFieldPath()];
}

- (instancetype)initPrivate:(FieldPath)fieldPath {
  if (self = [super init]) {
    _internalValue = std::move(fieldPath);
  }
  return self;
}

+ (instancetype)pathWithDotSeparatedString:(NSString *)path {
  return
      [[FIRFieldPath alloc] initPrivate:FieldPath::FromDotSeparatedString(util::MakeString(path))];
}

/** Matches any characters in a field path string that are reserved. */
+ (NSRegularExpression *)reservedCharactersRegex {
  static NSRegularExpression *regex = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    regex = [NSRegularExpression regularExpressionWithPattern:@"[~*/\\[\\]]" options:0 error:nil];
  });
  return regex;
}

- (id)copyWithZone:(NSZone *__nullable)zone {
  return [[[self class] alloc] initPrivate:_internalValue];
}

- (BOOL)isEqual:(nullable id)object {
  if (self == object) {
    return YES;
  }

  if (![object isKindOfClass:[FIRFieldPath class]]) {
    return NO;
  }

  return _internalValue == ((FIRFieldPath *)object)->_internalValue;
}

- (NSUInteger)hash {
  return util::Hash(_internalValue);
}

- (const firebase::firestore::model::FieldPath &)internalValue {
  return _internalValue;
}

@end

NS_ASSUME_NONNULL_END
