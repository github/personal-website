// Copyright 2017 Google
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

#import "FIRStorageReference.h"

#import "FIRStorageConstants_Private.h"
#import "FIRStorageDeleteTask.h"
#import "FIRStorageDownloadTask_Private.h"
#import "FIRStorageGetDownloadURLTask.h"
#import "FIRStorageGetMetadataTask.h"
#import "FIRStorageListResult_Private.h"
#import "FIRStorageListTask.h"
#import "FIRStorageMetadata_Private.h"
#import "FIRStorageReference_Private.h"
#import "FIRStorageTaskSnapshot.h"
#import "FIRStorageTaskSnapshot_Private.h"
#import "FIRStorageTask_Private.h"
#import "FIRStorageUpdateMetadataTask.h"
#import "FIRStorageUploadTask_Private.h"
#import "FIRStorageUtils.h"
#import "FIRStorage_Private.h"

#import <FirebaseCore/FIRApp.h>
#import <FirebaseCore/FIROptions.h>

#import <GTMSessionFetcher/GTMSessionFetcher.h>
#import <GTMSessionFetcher/GTMSessionFetcherService.h>

@implementation FIRStorageReference

- (instancetype)init {
  FIRStorage *storage = [FIRStorage storage];
  NSString *storageBucket = storage.app.options.storageBucket;
  FIRStoragePath *path = [[FIRStoragePath alloc] initWithBucket:storageBucket object:nil];
  FIRStorageReference *reference = [self initWithStorage:storage path:path];
  return reference;
}

- (instancetype)initWithStorage:(FIRStorage *)storage path:(FIRStoragePath *)path {
  self = [super init];
  if (self) {
    _storage = storage;
    _path = path;
  }
  return self;
}

#pragma mark - NSObject overrides

- (instancetype)copyWithZone:(NSZone *)zone {
  FIRStorageReference *copiedReference = [[[self class] allocWithZone:zone] initWithStorage:_storage
                                                                                       path:_path];
  return copiedReference;
}

- (BOOL)isEqual:(id)object {
  if (self == object) {
    return YES;
  }

  if (![object isKindOfClass:[FIRStorageReference class]]) {
    return NO;
  }

  BOOL isObjectEqual = [self isEqualToFIRStorageReference:(FIRStorageReference *)object];
  return isObjectEqual;
}

- (BOOL)isEqualToFIRStorageReference:(FIRStorageReference *)reference {
  BOOL isEqual = [_storage isEqual:reference.storage] && [_path isEqual:reference.path];
  return isEqual;
}

- (NSUInteger)hash {
  NSUInteger hash = [_storage hash] ^ [_path hash];
  return hash;
}

- (NSString *)description {
  return [self stringValue];
}

- (NSString *)stringValue {
  NSString *value = [NSString stringWithFormat:@"gs://%@/%@", _path.bucket, _path.object ?: @""];
  return value;
}

#pragma mark - Property Getters

- (NSString *)bucket {
  NSString *bucket = _path.bucket;
  return bucket;
}

- (NSString *)fullPath {
  NSString *path = _path.object;
  if (!path) {
    path = @"";
  }
  return path;
}

- (NSString *)name {
  NSString *name = [_path.object lastPathComponent];
  if (!name) {
    name = @"";
  }
  return name;
}

#pragma mark - Path Operations

- (FIRStorageReference *)root {
  FIRStoragePath *rootPath = [_path root];
  FIRStorageReference *rootReference = [[FIRStorageReference alloc] initWithStorage:_storage
                                                                               path:rootPath];
  return rootReference;
}

- (nullable FIRStorageReference *)parent {
  FIRStoragePath *parentPath = [_path parent];
  if (!parentPath) {
    return nil;
  }

  FIRStorageReference *parentReference = [[FIRStorageReference alloc] initWithStorage:_storage
                                                                                 path:parentPath];
  return parentReference;
}

- (FIRStorageReference *)child:(NSString *)path {
  FIRStoragePath *childPath = [_path child:path];
  FIRStorageReference *childReference = [[FIRStorageReference alloc] initWithStorage:_storage
                                                                                path:childPath];
  return childReference;
}

#pragma mark - Uploads

- (FIRStorageUploadTask *)putData:(NSData *)uploadData {
  return [self putData:uploadData metadata:nil completion:nil];
}

- (FIRStorageUploadTask *)putData:(NSData *)uploadData
                         metadata:(nullable FIRStorageMetadata *)metadata {
  return [self putData:uploadData metadata:metadata completion:nil];
}

- (FIRStorageUploadTask *)putData:(NSData *)uploadData
                         metadata:(nullable FIRStorageMetadata *)metadata
                       completion:(nullable FIRStorageVoidMetadataError)completion {
  if (!metadata) {
    metadata = [[FIRStorageMetadata alloc] init];
  }

  metadata.path = _path.object;
  metadata.name = [_path.object lastPathComponent];
  FIRStorageUploadTask *task =
      [[FIRStorageUploadTask alloc] initWithReference:self
                                       fetcherService:_storage.fetcherServiceForApp
                                        dispatchQueue:_storage.dispatchQueue
                                                 data:uploadData
                                             metadata:metadata];

  if (completion) {
    dispatch_queue_t callbackQueue = _storage.fetcherServiceForApp.callbackQueue;
    if (!callbackQueue) {
      callbackQueue = dispatch_get_main_queue();
    }

    [task observeStatus:FIRStorageTaskStatusSuccess
                handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                  dispatch_async(callbackQueue, ^{
                    completion(snapshot.metadata, nil);
                  });
                }];
    [task observeStatus:FIRStorageTaskStatusFailure
                handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                  dispatch_async(callbackQueue, ^{
                    completion(nil, snapshot.error);
                  });
                }];
  }
  [task enqueue];
  return task;
}

- (FIRStorageUploadTask *)putFile:(NSURL *)fileURL {
  return [self putFile:fileURL metadata:nil completion:nil];
}

- (FIRStorageUploadTask *)putFile:(NSURL *)fileURL
                         metadata:(nullable FIRStorageMetadata *)metadata {
  return [self putFile:fileURL metadata:metadata completion:nil];
}

- (FIRStorageUploadTask *)putFile:(NSURL *)fileURL
                         metadata:(nullable FIRStorageMetadata *)metadata
                       completion:(nullable FIRStorageVoidMetadataError)completion {
  if (!metadata) {
    metadata = [[FIRStorageMetadata alloc] init];
  }

  metadata.path = _path.object;
  metadata.name = [_path.object lastPathComponent];
  FIRStorageUploadTask *task =
      [[FIRStorageUploadTask alloc] initWithReference:self
                                       fetcherService:_storage.fetcherServiceForApp
                                        dispatchQueue:_storage.dispatchQueue
                                                 file:fileURL
                                             metadata:metadata];

  if (completion) {
    dispatch_queue_t callbackQueue = _storage.fetcherServiceForApp.callbackQueue;
    if (!callbackQueue) {
      callbackQueue = dispatch_get_main_queue();
    }

    [task observeStatus:FIRStorageTaskStatusSuccess
                handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                  dispatch_async(callbackQueue, ^{
                    completion(snapshot.metadata, nil);
                  });
                }];
    [task observeStatus:FIRStorageTaskStatusFailure
                handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                  dispatch_async(callbackQueue, ^{
                    completion(nil, snapshot.error);
                  });
                }];
  }
  [task enqueue];
  return task;
}

#pragma mark - Downloads

- (FIRStorageDownloadTask *)dataWithMaxSize:(int64_t)size
                                 completion:(FIRStorageVoidDataError)completion {
  FIRStorageDownloadTask *task =
      [[FIRStorageDownloadTask alloc] initWithReference:self
                                         fetcherService:_storage.fetcherServiceForApp
                                          dispatchQueue:_storage.dispatchQueue
                                                   file:nil];

  dispatch_queue_t callbackQueue = _storage.fetcherServiceForApp.callbackQueue;
  if (!callbackQueue) {
    callbackQueue = dispatch_get_main_queue();
  }

  [task observeStatus:FIRStorageTaskStatusSuccess
              handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                FIRStorageDownloadTask *task = snapshot.task;
                dispatch_async(callbackQueue, ^{
                  completion(task.downloadData, nil);
                });
              }];
  [task observeStatus:FIRStorageTaskStatusFailure
              handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                dispatch_async(callbackQueue, ^{
                  completion(nil, snapshot.error);
                });
              }];
  [task
      observeStatus:FIRStorageTaskStatusProgress
            handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
              FIRStorageDownloadTask *task = snapshot.task;
              if (task.progress.totalUnitCount > size || task.progress.completedUnitCount > size) {
                NSDictionary *infoDictionary =
                    @{@"totalSize" : @(task.progress.totalUnitCount),
                      @"maxAllowedSize" : @(size)};
                NSError *error =
                    [FIRStorageErrors errorWithCode:FIRStorageErrorCodeDownloadSizeExceeded
                                     infoDictionary:infoDictionary];
                [task cancelWithError:error];
              }
            }];
  [task enqueue];
  return task;
}

- (FIRStorageDownloadTask *)writeToFile:(NSURL *)fileURL {
  return [self writeToFile:fileURL completion:nil];
}

- (FIRStorageDownloadTask *)writeToFile:(NSURL *)fileURL
                             completion:(FIRStorageVoidURLError)completion {
  FIRStorageDownloadTask *task =
      [[FIRStorageDownloadTask alloc] initWithReference:self
                                         fetcherService:_storage.fetcherServiceForApp
                                          dispatchQueue:_storage.dispatchQueue
                                                   file:fileURL];
  if (completion) {
    dispatch_queue_t callbackQueue = _storage.fetcherServiceForApp.callbackQueue;
    if (!callbackQueue) {
      callbackQueue = dispatch_get_main_queue();
    }

    [task observeStatus:FIRStorageTaskStatusSuccess
                handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                  dispatch_async(callbackQueue, ^{
                    completion(fileURL, nil);
                  });
                }];
    [task observeStatus:FIRStorageTaskStatusFailure
                handler:^(FIRStorageTaskSnapshot *_Nonnull snapshot) {
                  dispatch_async(callbackQueue, ^{
                    completion(nil, snapshot.error);
                  });
                }];
  }
  [task enqueue];
  return task;
}

- (void)downloadURLWithCompletion:(FIRStorageVoidURLError)completion {
  FIRStorageGetDownloadURLTask *task =
      [[FIRStorageGetDownloadURLTask alloc] initWithReference:self
                                               fetcherService:_storage.fetcherServiceForApp
                                                dispatchQueue:_storage.dispatchQueue
                                                   completion:completion];
  [task enqueue];
}

#pragma mark - List

- (void)listWithMaxResults:(int64_t)maxResults completion:(FIRStorageVoidListError)completion {
  if (maxResults <= 0 || maxResults > 1000) {
    completion(nil,
               [FIRStorageUtils storageErrorWithDescription:
                                    @"Argument 'maxResults' must be between 1 and 1000 inclusive."
                                                       code:FIRStorageErrorCodeInvalidArgument]);
  } else {
    FIRStorageListTask *task =
        [[FIRStorageListTask alloc] initWithReference:self
                                       fetcherService:_storage.fetcherServiceForApp
                                        dispatchQueue:_storage.dispatchQueue
                                             pageSize:@(maxResults)
                                    previousPageToken:nil
                                           completion:completion];
    [task enqueue];
  }
}

- (void)listWithMaxResults:(int64_t)maxResults
                 pageToken:(NSString *)pageToken
                completion:(FIRStorageVoidListError)completion {
  if (maxResults <= 0 || maxResults > 1000) {
    completion(nil,
               [FIRStorageUtils storageErrorWithDescription:
                                    @"Argument 'maxResults' must be between 1 and 1000 inclusive."
                                                       code:FIRStorageErrorCodeInvalidArgument]);
  } else {
    FIRStorageListTask *task =
        [[FIRStorageListTask alloc] initWithReference:self
                                       fetcherService:_storage.fetcherServiceForApp
                                        dispatchQueue:_storage.dispatchQueue
                                             pageSize:@(maxResults)
                                    previousPageToken:pageToken
                                           completion:completion];
    [task enqueue];
  }
}

- (void)listAllWithCompletion:(FIRStorageVoidListError)completion {
  NSMutableArray *prefixes = [NSMutableArray new];
  NSMutableArray *items = [NSMutableArray new];

  __weak FIRStorageReference *weakSelf = self;

  __block FIRStorageVoidListError paginatedCompletion =
      ^(FIRStorageListResult *listResult, NSError *error) {
        if (error) {
          completion(nil, error);
        }

        FIRStorageReference *strongSelf = weakSelf;
        if (!strongSelf) {
          return;
        }

        [prefixes addObjectsFromArray:listResult.prefixes];
        [items addObjectsFromArray:listResult.items];

        if (listResult.pageToken) {
          FIRStorageListTask *nextPage = [[FIRStorageListTask alloc]
              initWithReference:self
                 fetcherService:strongSelf->_storage.fetcherServiceForApp
                  dispatchQueue:strongSelf->_storage.dispatchQueue
                       pageSize:nil
              previousPageToken:listResult.pageToken
                     completion:paginatedCompletion];
          [nextPage enqueue];
        } else {
          FIRStorageListResult *result = [[FIRStorageListResult alloc] initWithPrefixes:prefixes
                                                                                  items:items
                                                                              pageToken:nil];
          // Break the retain cycle we set up indirectly by passing the callback to `nextPage`.
          paginatedCompletion = nil;
          completion(result, nil);
        }
      };

  FIRStorageListTask *task =
      [[FIRStorageListTask alloc] initWithReference:self
                                     fetcherService:_storage.fetcherServiceForApp
                                      dispatchQueue:_storage.dispatchQueue
                                           pageSize:nil
                                  previousPageToken:nil
                                         completion:paginatedCompletion];

  [task enqueue];
}

#pragma mark - Metadata Operations

- (void)metadataWithCompletion:(FIRStorageVoidMetadataError)completion {
  FIRStorageGetMetadataTask *task =
      [[FIRStorageGetMetadataTask alloc] initWithReference:self
                                            fetcherService:_storage.fetcherServiceForApp
                                             dispatchQueue:_storage.dispatchQueue
                                                completion:completion];
  [task enqueue];
}

- (void)updateMetadata:(FIRStorageMetadata *)metadata
            completion:(nullable FIRStorageVoidMetadataError)completion {
  FIRStorageUpdateMetadataTask *task =
      [[FIRStorageUpdateMetadataTask alloc] initWithReference:self
                                               fetcherService:_storage.fetcherServiceForApp
                                                dispatchQueue:_storage.dispatchQueue
                                                     metadata:metadata
                                                   completion:completion];
  [task enqueue];
}

#pragma mark - Delete

- (void)deleteWithCompletion:(nullable FIRStorageVoidError)completion {
  FIRStorageDeleteTask *task =
      [[FIRStorageDeleteTask alloc] initWithReference:self
                                       fetcherService:_storage.fetcherServiceForApp
                                        dispatchQueue:_storage.dispatchQueue
                                           completion:completion];
  [task enqueue];
}

@end
