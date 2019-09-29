// Copyright 2019 Google
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#import "FIRStorageListResult.h"
#import "FIRStorageConstants_Private.h"
#import "FIRStorageReference.h"

@implementation FIRStorageListResult

+ (nullable FIRStorageListResult *)fromDictionary:(NSDictionary<NSString *, id> *)dictionary
                                      atReference:(FIRStorageReference *)reference {
  NSMutableArray<FIRStorageReference *> *prefixes = [NSMutableArray new];
  NSMutableArray<FIRStorageReference *> *items = [NSMutableArray new];

  FIRStorageReference *rootReference = reference.root;

  NSArray<NSString *> *prefixEntries = dictionary[kFIRStorageListPrefixes];
  for (NSString *prefixEntry in prefixEntries) {
    NSString *pathWithoutTrailingSlash = prefixEntry;
    if ([prefixEntry hasSuffix:@"/"]) {
      pathWithoutTrailingSlash = [pathWithoutTrailingSlash substringToIndex:prefixEntry.length - 1];
    }

    FIRStorageReference *prefixReference = [rootReference child:pathWithoutTrailingSlash];
    NSAssert([prefixReference.fullPath hasPrefix:reference.fullPath],
             @"Expected %@ to be a child element of %@", reference, prefixReference);
    [prefixes addObject:prefixReference];
  }

  NSArray<NSDictionary<NSString *, NSString *> *> *itemEntries = dictionary[kFIRStorageListItems];
  for (NSDictionary<NSString *, NSString *> *itemEntry in itemEntries) {
    FIRStorageReference *itemReference = [rootReference child:itemEntry[kFIRStorageListItemName]];
    NSAssert([itemReference.fullPath hasPrefix:reference.fullPath],
             @"Expected %@ to be a child element of %@", reference, itemReference);
    [items addObject:itemReference];
  }

  NSString *pageToken = dictionary[kFIRStorageListPageToken];
  return [[FIRStorageListResult alloc] initWithPrefixes:prefixes items:items pageToken:pageToken];
}

- (nullable instancetype)initWithPrefixes:(NSArray<FIRStorageReference *> *)prefixes
                                    items:(NSArray<FIRStorageReference *> *)items
                                pageToken:(nullable NSString *)pageToken {
  self = [super init];
  if (self) {
    _prefixes = [prefixes copy];
    _items = [items copy];
    _pageToken = [pageToken copy];
  }
  return self;
}

- (instancetype)copyWithZone:(NSZone *)zone {
  FIRStorageListResult *clone = [[[self class] allocWithZone:zone] initWithPrefixes:_prefixes
                                                                              items:_items
                                                                          pageToken:_pageToken];

  return clone;
}

@end