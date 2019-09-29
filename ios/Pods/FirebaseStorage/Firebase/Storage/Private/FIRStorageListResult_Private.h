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

#import "FIRStorageListResult.h"

NS_ASSUME_NONNULL_BEGIN

@interface FIRStorageListResult (Private)

/**
 * Creates an instance of FIRStorageListResult with the contents of a dictionary.
 *
 * @param dictionary A dictionary containing the parsed JSON response from the backend.
 * @param reference The FIRStorageReference that `list()` was called on.
 * @return An instance of FIRStorageListResult that represents the contents of the dictionary.
 */
+ (nullable FIRStorageListResult *)fromDictionary:(NSDictionary<NSString *, id> *)dictionary
                                      atReference:(FIRStorageReference *)reference;

/** Initializes a new FIRStorageListResult with the given data. */
- (nullable instancetype)initWithPrefixes:(NSArray<FIRStorageReference *> *)prefixes
                                    items:(NSArray<FIRStorageReference *> *)items
                                pageToken:(nullable NSString *)pageToken;

@end

NS_ASSUME_NONNULL_END