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

#import "FIRQuery.h"

#include <memory>

#include "Firestore/core/src/firebase/firestore/api/query_core.h"
#include "Firestore/core/src/firebase/firestore/core/query.h"

namespace api = firebase::firestore::api;
namespace core = firebase::firestore::core;

NS_ASSUME_NONNULL_BEGIN

@interface FIRQuery (/* Init */)

- (instancetype)initWithQuery:(api::Query &&)query NS_DESIGNATED_INITIALIZER;

- (instancetype)initWithQuery:(core::Query)query
                    firestore:(std::shared_ptr<api::Firestore>)firestore;

@end

/** Internal FIRQuery API we don't want exposed in our public header files. */
@interface FIRQuery (Internal)

- (const core::Query &)query;

- (const api::Query &)apiQuery;

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must contain
 * the specified field, the value must be an array, and that array must contain at least one value
 * from the provided array.
 *
 * A query can have only one arrayContains filter and it cannot be combined with arrayContains or
 * in.
 *
 * @param field The name of the field containing an array to search.
 * @param value The value that contains the values to match.
 *
 * @return The created `FIRQuery`.
 */
// TODO(b/138855186): Expose to public once backend is ready.
- (FIRQuery *)queryWhereField:(NSString *)field arrayContainsAny:(id)value;

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must contain
 * the specified field, the value must be an array, and that array must contain at least one value
 * from the provided array.
 *
 * A query can have only one arrayContains filter and it cannot be combined with arrayContains or
 * in.
 *
 * @param path The path of the field containing an array to search.
 * @param value The value that contains the values to match.
 *
 * @return The created `FIRQuery`.
 */
// TODO(b/138855186): Expose to public once backend is ready.
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path arrayContainsAny:(id)value;

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must contain
 * the specified field and the value must equal one of the values from the provided array.
 *
 * A query can have only one in filter, and it cannot be combined with arrayContainsAny.
 *
 * @param field The name of the field to search.
 * @param value The value that contains the values to match.
 *
 * @return The created `FIRQuery`.
 */
// TODO(b/138855186): Expose to public once backend is ready.
- (FIRQuery *)queryWhereField:(NSString *)field in:(id)value;

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must contain
 * the specified field and the value must equal one of the values from the provided array.
 *
 * A query can have only one in filter, and it cannot be combined with arrayContainsAny.
 *
 * @param path The path of the field to search.
 * @param value The value that contains the values to match.
 *
 * @return The created `FIRQuery`.
 */
// TODO(b/138855186): Expose to public once backend is ready.
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path in:(id)value;

@end

NS_ASSUME_NONNULL_END
