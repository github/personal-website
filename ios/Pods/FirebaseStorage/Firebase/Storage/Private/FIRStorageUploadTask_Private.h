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

@class GTMSessionUploadFetcher;

NS_ASSUME_NONNULL_BEGIN

@interface FIRStorageUploadTask ()

/**
 * The data to be uploaded (if uploading bytes).
 */
@property(readonly, copy, nonatomic, nullable) NSData *uploadData;

/**
 * The name of a file on disk to be uploaded (if uploading from a file).
 */
@property(readonly, copy, nonatomic, nullable) NSURL *fileURL;

/**
 * The FIRStorageMetadata about the object being uploaded.
 */
@property(readonly, copy, nonatomic) FIRStorageMetadata *uploadMetadata;

/**
 * GTMSessionUploadFetcher used by all uploads.
 */
@property(strong, atomic) GTMSessionUploadFetcher *uploadFetcher;

/**
 * Initializes an upload task with a base FIRStorageReference and GTMSessionFetcherService.
 * @param reference The base FIRStorageReference which fetchers use for configuration.
 * @param service The GTMSessionFetcherService which will create fetchers.
 * @param queue The shared queue to use for all Storage operations.
 * @param uploadData The NSData object to be uploaded.
 * @return Returns an instance of FIRStorageUploadTask.
 */
- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                             data:(NSData *)uploadData
                         metadata:(FIRStorageMetadata *)metadata;

/**
 * Initializes an upload task with a base FIRStorageReference and GTMSessionFetcherService.
 * @param reference The base FIRStorageReference which fetchers use for configuration.
 * @param service The GTMSessionFetcherService which will create fetchers.
 * @param queue The shared queue to use for all Storage operations.
 * @param fileURL The system file URL to upload from.
 * @return Returns an instance of FIRStorageUploadTask.
 */
- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                             file:(NSURL *)fileURL
                         metadata:(FIRStorageMetadata *)metadata;

@end

NS_ASSUME_NONNULL_END
