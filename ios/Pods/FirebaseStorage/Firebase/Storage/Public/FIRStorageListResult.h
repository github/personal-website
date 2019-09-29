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

#import <Foundation/Foundation.h>

@class FIRStorageReference;

NS_ASSUME_NONNULL_BEGIN

/** Contains the prefixes and items returned by a `StorageReference.list()` call. */
NS_SWIFT_NAME(StorageListResult)
@interface FIRStorageListResult : NSObject <NSCopying>

- (instancetype)init NS_UNAVAILABLE;

/**
 * The prefixes (folders) returned by the `list()` operation.
 *
 * @return A list of prefixes (folders).
 */
@property(nonatomic, readonly) NSArray<FIRStorageReference *> *prefixes;

/**
 * The items (files) returned by the `list()` operation.
 *
 * @return A list of items (files).
 */
@property(nonatomic, readonly) NSArray<FIRStorageReference *> *items;

/**
 * Returns a token that can be used to resume a previous `list()` operation. `nil`
 * indicates that there are no more results.
 *
 * @return A page token if more results are available.
 */
@property(nonatomic, readonly, nullable) NSString *pageToken;

@end

NS_ASSUME_NONNULL_END
