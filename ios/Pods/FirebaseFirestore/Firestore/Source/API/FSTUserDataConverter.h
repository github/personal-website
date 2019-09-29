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

#import <Foundation/Foundation.h>

#include <vector>

#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/core/user_data.h"
#include "Firestore/core/src/firebase/firestore/model/database_id.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/field_mask.h"
#include "Firestore/core/src/firebase/firestore/model/field_transform.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/precondition.h"

@class FIRTimestamp;

namespace core = firebase::firestore::core;
namespace model = firebase::firestore::model;

NS_ASSUME_NONNULL_BEGIN

/**
 * An internal representation of FIRDocumentReference, representing a key in a specific database.
 * This is necessary because keys assume a database from context (usually the current one).
 * FSTDocumentKeyReference binds a key to a specific databaseID.
 *
 * TODO(b/64160088): Make DocumentKey aware of the specific databaseID it is tied to.
 */
@interface FSTDocumentKeyReference : NSObject

- (instancetype)init NS_UNAVAILABLE;

- (instancetype)initWithKey:(model::DocumentKey)key
                 databaseID:(model::DatabaseId)databaseID NS_DESIGNATED_INITIALIZER;

- (const model::DocumentKey &)key;

@property(nonatomic, assign, readonly) const model::DatabaseId &databaseID;

@end

/**
 * An interface that allows arbitrary pre-converting of user data.
 *
 * Returns the converted value (can return back the input to act as a no-op).
 */
typedef id _Nullable (^FSTPreConverterBlock)(id _Nullable);

/**
 * Helper for parsing raw user input (provided via the API) into internal model classes.
 */
@interface FSTUserDataConverter : NSObject

- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithDatabaseID:(model::DatabaseId)databaseID
                      preConverter:(FSTPreConverterBlock)preConverter NS_DESIGNATED_INITIALIZER;

/** Parse document data from a non-merge setData call.*/
- (core::ParsedSetData)parsedSetData:(id)input;

/** Parse document data from a setData call with `merge:YES`. */
- (core::ParsedSetData)parsedMergeData:(id)input fieldMask:(nullable NSArray<id> *)fieldMask;

/** Parse update data from an updateData call. */
- (core::ParsedUpdateData)parsedUpdateData:(id)input;

/** Parse a "query value" (e.g. value in a where filter or a value in a cursor bound). */
- (model::FieldValue)parsedQueryValue:(id)input;

@end

NS_ASSUME_NONNULL_END
