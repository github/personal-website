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

NS_ASSUME_NONNULL_BEGIN

/**
 * Represents a path in GCS, which can be represented as: gs://bucket/path/to/object
 * or http[s]://firebasestorage.googleapis.com/v0/b/bucket/o/path/to/object?token=<12345>
 * This class also includes helper methods to parse those URI/Ls, as well as to
 * add and remove path segments.
 */
@interface FIRStoragePath : NSObject

/**
 * The GCS bucket in the path.
 */
@property(copy, nonatomic) NSString *bucket;

/**
 * The GCS object in the path.
 */
@property(copy, nonatomic, nullable) NSString *object;

/**
 * Parses a generic string (representing some URI or URL) and returns the appropriate path.
 * @param string String which is parsed into a path.
 * @return Returns an instance of FIRStoragePath or nil if one can't be created.
 * @throws Throws an exception if the string is not a valid gs:// URI or http[s]:// URL.
 */
+ (nullable FIRStoragePath *)pathFromString:(NSString *)string;

/**
 * Parses a gs://bucket/path/to/object URI into a GCS path.
 * @param aURIString gs:// URI which is parsed into a path.
 * @return Returns an instance of FIRStoragePath or nil if one can't be created.
 * @throws Throws an exception if the string is not a valid gs:// URI.
 */
+ (nullable FIRStoragePath *)pathFromGSURI:(NSString *)aURIString;

- (instancetype)init NS_UNAVAILABLE;

/**
 * Constructs an FIRStoragePath object that represents the given bucket and object.
 * @param bucket The name of the bucket.
 * @param object The name of the object.
 * @return An instance of FIRStoragePath representing the @a bucket and @a object.
 */
- (instancetype)initWithBucket:(NSString *)bucket
                        object:(nullable NSString *)object NS_DESIGNATED_INITIALIZER;

/**
 * Parses a http[s]://firebasestorage.googleapis.com/v0/b/bucket/o/path/to/object...?token=<12345>
 * URL into a GCS path.
 * @param aURLString http[s]:// URL which is parsed into a path.
 * string which is parsed into a path.
 * @return Returns an instance of FIRStoragePath or nil if one can't be created.
 * @throws Throws an exception if the string is not a valid http[s]:// URL.
 */
+ (nullable FIRStoragePath *)pathFromHTTPURL:(NSString *)aURLString;

/**
 * Creates a new path based off of the current path and a string appended to it.
 * Note that all slashes are compressed to a single slash, and leading and trailing slashes
 * are removed.
 * @param path String to append to the current path.
 * @return Returns a new instance of FIRStoragePath with the new path appended.
 */
- (FIRStoragePath *)child:(NSString *)path;

/**
 * Creates a new path based off of the current path with the last path segment removed.
 * @return Returns a new instance of FIRStoragePath pointing to the parent path,
 * or nil if the current path points to the root.
 */
- (nullable FIRStoragePath *)parent;

/**
 * Creates a new path based off of the root of the bucket.
 * @return Returns a new instance of FIRStoragePath pointing to the root of the bucket.
 */
- (FIRStoragePath *)root;

/**
 * Returns a GS URI representing the current path.
 * @return Returns a gs://bucket/path/to/object URI representing the current path.
 */
- (NSString *)stringValue;

@end

NS_ASSUME_NONNULL_END
