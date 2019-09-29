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

@class FIRStorageReference;

NS_ASSUME_NONNULL_BEGIN

/**
 * Class which represents the metadata on an object in Firebase Storage. This metadata is
 * returned on successful operations, and can be used to retrieve download URLs, content types,
 * and a FIRStorage reference to the object in question. Full documentation can be found at the GCS
 * Objects#resource docs.
 * @see https://cloud.google.com/storage/docs/json_api/v1/objects#resource
 */
NS_SWIFT_NAME(StorageMetadata)
@interface FIRStorageMetadata : NSObject <NSCopying>

/**
 * The name of the bucket containing this object.
 */
@property(copy, nonatomic, readonly) NSString *bucket;

/**
 * Cache-Control directive for the object data.
 */
@property(copy, nonatomic, nullable) NSString *cacheControl;

/**
 * Content-Disposition of the object data.
 */
@property(copy, nonatomic, nullable) NSString *contentDisposition;

/**
 * Content-Encoding of the object data.
 */
@property(copy, nonatomic, nullable) NSString *contentEncoding;

/**
 * Content-Language of the object data.
 */
@property(copy, nonatomic, nullable) NSString *contentLanguage;

/**
 * Content-Type of the object data.
 */
@property(copy, nonatomic, nullable) NSString *contentType;

/**
 * MD5 hash of the data; encoded using base64.
 */
@property(copy, nonatomic, nullable, readonly) NSString *md5Hash;

/**
 * The content generation of this object. Used for object versioning.
 */
@property(readonly) int64_t generation;

/**
 * User-provided metadata, in key/value pairs.
 */
@property(copy, nonatomic, nullable) NSDictionary<NSString *, NSString *> *customMetadata;

/**
 * The version of the metadata for this object at this generation. Used
 * for preconditions and for detecting changes in metadata. A metageneration number is only
 * meaningful in the context of a particular generation of a particular object.
 */
@property(readonly) int64_t metageneration;

/**
 * The name of this object, in gs://bucket/path/to/object.txt, this is object.txt.
 */
@property(copy, nonatomic, readonly, nullable) NSString *name;

/**
 * The full path of this object, in gs://bucket/path/to/object.txt, this is path/to/object.txt.
 */
@property(copy, nonatomic, readonly, nullable) NSString *path;

/**
 * Content-Length of the data in bytes.
 */
@property(readonly) int64_t size;

/**
 * The creation time of the object in RFC 3339 format.
 */
@property(copy, nonatomic, readonly, nullable) NSDate *timeCreated;

/**
 * The modification time of the object metadata in RFC 3339 format.
 */
@property(copy, nonatomic, readonly, nullable) NSDate *updated;

/**
 * A reference to the object in Firebase Storage.
 */
@property(strong, nonatomic, readonly, nullable) FIRStorageReference *storageReference;

/**
 * Creates an instance of FIRStorageMetadata from the contents of a dictionary.
 * @return An instance of FIRStorageMetadata that represents the contents of a dictionary.
 */
- (nullable instancetype)initWithDictionary:(NSDictionary<NSString *, id> *)dictionary
    NS_DESIGNATED_INITIALIZER;

/**
 * Creates an NSDictionary from the contents of the metadata.
 * @return An NSDictionary that represents the contents of the metadata.
 */
- (NSDictionary<NSString *, id> *)dictionaryRepresentation;

/**
 * Determines if the current metadata represents a "file".
 */
@property(readonly, getter=isFile) BOOL file;

/**
 * Determines if the current metadata represents a "folder".
 */
@property(readonly, getter=isFolder) BOOL folder;

@end

NS_ASSUME_NONNULL_END
