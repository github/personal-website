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

#import "FIRStorageConstants_Private.h"
#import "FIRStorageMetadata.h"

@class FIRStorageReference;

NS_ASSUME_NONNULL_BEGIN

@interface FIRStorageMetadata ()

@property(readwrite, nonatomic) NSString *name;

@property(readwrite, nonatomic) NSString *path;

@property(readwrite, nonatomic) FIRStorageReference *reference;

/**
 * The type of the object, either a "File" or a "Folder".
 */
@property(readwrite) FIRStorageMetadataType type;

/**
 * The original metadata representation received from the server or an empty dictionary
 * if the metadata object was initialized by the user.
 */
@property(copy, nonatomic) NSDictionary *initialMetadata;

/**
 * Recursively removes entries in 'metadata' that are unmodified from 'oldMetadata'.
 * Adds 'NSNull' for entries that only exist in oldMetadata.
 */
+ (void)removeMatchingMetadata:(NSMutableDictionary *)metadata
                   oldMetadata:(NSDictionary *)oldMetadata;

/**
 * Computes the updates between the state at initialization and the current state.
 * Returns a dictionary with only the updated data. Removed keys are set to NSNull.
 */
- (NSDictionary *)updatedMetadata;

/**
 * Returns an RFC3339 formatted date from a string.
 * @param dateString An NSString of the form: yyyy-MM-ddTHH:mm:ss.SSSZ.
 * @return An NSDate populated from the string or nil if conversion isn't possible.
 */
- (nullable NSDate *)dateFromRFC3339String:(NSString *)dateString;

/**
 * Returns an RFC3339 formatted string from an NSDate object.
 * @param date The NSDate object to be converted to a string.
 * @return An NSString of the form: yyyy-MM-ddTHH:mm:ss.SSSZ or nil if conversion isn't possible.
 */
- (nullable NSString *)RFC3339StringFromDate:(NSDate *)date;

@end

NS_ASSUME_NONNULL_END
