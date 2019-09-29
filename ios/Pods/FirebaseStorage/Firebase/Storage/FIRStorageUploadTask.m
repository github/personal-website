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

#import "FIRStorageUploadTask.h"

#import "FIRStorageConstants_Private.h"
#import "FIRStorageMetadata_Private.h"
#import "FIRStorageObservableTask_Private.h"
#import "FIRStorageTask_Private.h"
#import "FIRStorageUploadTask_Private.h"

#import <GTMSessionFetcher/GTMSessionUploadFetcher.h>

@implementation FIRStorageUploadTask

@synthesize progress = _progress;
@synthesize fetcherCompletion = _fetcherCompletion;

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                             data:(NSData *)uploadData
                         metadata:(FIRStorageMetadata *)metadata {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _uploadMetadata = [metadata copy];
    _uploadData = [uploadData copy];
    _progress = [NSProgress progressWithTotalUnitCount:[_uploadData length]];

    if (!_uploadMetadata.contentType) {
      _uploadMetadata.contentType = @"application/octet-stream";
    }
  }
  return self;
}

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                             file:(NSURL *)fileURL
                         metadata:(FIRStorageMetadata *)metadata {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _uploadMetadata = [metadata copy];
    _fileURL = [fileURL copy];
    _progress = [NSProgress progressWithTotalUnitCount:0];

    NSString *mimeType = [FIRStorageUtils MIMETypeForExtension:[_fileURL pathExtension]];

    if (!_uploadMetadata.contentType) {
      _uploadMetadata.contentType = mimeType ?: @"application/octet-stream";
    }
  }
  return self;
}

- (void)dealloc {
  [_uploadFetcher stopFetching];
}

- (void)enqueue {
  __weak FIRStorageUploadTask *weakSelf = self;

  [self dispatchAsync:^() {
    FIRStorageUploadTask *strongSelf = weakSelf;

    if (!strongSelf) {
      return;
    }

    NSError *contentValidationError;
    if (![strongSelf isContentToUploadValid:&contentValidationError]) {
      strongSelf.error = contentValidationError;
      [strongSelf finishTaskWithStatus:FIRStorageTaskStatusFailure snapshot:strongSelf.snapshot];
      return;
    }

    strongSelf.state = FIRStorageTaskStateQueueing;

    NSMutableURLRequest *request = [strongSelf.baseRequest mutableCopy];
    request.HTTPMethod = @"POST";
    request.timeoutInterval = strongSelf.reference.storage.maxUploadRetryTime;
    NSData *bodyData =
        [NSData frs_dataFromJSONDictionary:[strongSelf->_uploadMetadata dictionaryRepresentation]];
    request.HTTPBody = bodyData;
    [request setValue:@"application/json; charset=UTF-8" forHTTPHeaderField:@"Content-Type"];
    NSString *contentLengthString =
        [NSString stringWithFormat:@"%zu", (unsigned long)[bodyData length]];
    [request setValue:contentLengthString forHTTPHeaderField:@"Content-Length"];

    NSURLComponents *components = [NSURLComponents componentsWithURL:request.URL
                                             resolvingAgainstBaseURL:NO];

    if ([components.host isEqual:kGCSHost]) {
      [components setPercentEncodedPath:[@"/upload" stringByAppendingString:components.path]];
    }

    NSDictionary *queryParams = @{@"uploadType" : @"resumable", @"name" : self.uploadMetadata.path};
    [components setPercentEncodedQuery:[FIRStorageUtils queryStringForDictionary:queryParams]];
    request.URL = components.URL;

    GTMSessionUploadFetcher *uploadFetcher =
        [GTMSessionUploadFetcher uploadFetcherWithRequest:request
                                           uploadMIMEType:strongSelf->_uploadMetadata.contentType
                                                chunkSize:kGTMSessionUploadFetcherStandardChunkSize
                                           fetcherService:self.fetcherService];

    if (strongSelf->_uploadData) {
      [uploadFetcher setUploadData:strongSelf->_uploadData];
      uploadFetcher.comment = @"Data UploadTask";
    } else if (strongSelf->_fileURL) {
      [uploadFetcher setUploadFileURL:strongSelf->_fileURL];
      uploadFetcher.comment = @"File UploadTask";
    }

    uploadFetcher.maxRetryInterval = self.reference.storage.maxUploadRetryTime;

    [uploadFetcher setSendProgressBlock:^(int64_t bytesSent, int64_t totalBytesSent,
                                          int64_t totalBytesExpectedToSend) {
      weakSelf.state = FIRStorageTaskStateProgress;
      weakSelf.progress.completedUnitCount = totalBytesSent;
      weakSelf.progress.totalUnitCount = totalBytesExpectedToSend;
      weakSelf.metadata = self->_uploadMetadata;
      [weakSelf fireHandlersForStatus:FIRStorageTaskStatusProgress snapshot:weakSelf.snapshot];
      weakSelf.state = FIRStorageTaskStateRunning;
    }];

    strongSelf->_uploadFetcher = uploadFetcher;

    // Process fetches
    strongSelf.state = FIRStorageTaskStateRunning;

    strongSelf->_fetcherCompletion = ^(NSData *_Nullable data, NSError *_Nullable error) {
      // Fire last progress updates
      [self fireHandlersForStatus:FIRStorageTaskStatusProgress snapshot:self.snapshot];

      // Handle potential issues with upload
      if (error) {
        self.state = FIRStorageTaskStateFailed;
        self.error = [FIRStorageErrors errorWithServerError:error reference:self.reference];
        self.metadata = self->_uploadMetadata;

        [self finishTaskWithStatus:FIRStorageTaskStatusFailure snapshot:self.snapshot];
        return;
      }

      // Upload completed successfully, fire completion callbacks
      self.state = FIRStorageTaskStateSuccess;

      NSDictionary *responseDictionary = [NSDictionary frs_dictionaryFromJSONData:data];
      if (responseDictionary) {
        FIRStorageMetadata *metadata =
            [[FIRStorageMetadata alloc] initWithDictionary:responseDictionary];
        [metadata setType:FIRStorageMetadataTypeFile];
        self.metadata = metadata;
      } else {
        self.error = [FIRStorageErrors errorWithInvalidRequest:data];
      }

      [self finishTaskWithStatus:FIRStorageTaskStatusSuccess snapshot:self.snapshot];
    };

    [strongSelf->_uploadFetcher
        beginFetchWithCompletionHandler:^(NSData *_Nullable data, NSError *_Nullable error) {
          if (weakSelf.fetcherCompletion != nil) {
            weakSelf.fetcherCompletion(data, error);
          }
        }];
  }];
}

- (void)finishTaskWithStatus:(FIRStorageTaskStatus)status
                    snapshot:(FIRStorageTaskSnapshot *)snapshot {
  [self fireHandlersForStatus:status snapshot:self.snapshot];
  [self removeAllObservers];
  self->_fetcherCompletion = nil;
}

- (BOOL)isContentToUploadValid:(NSError **)outError {
  if (_uploadData != nil) {
    return YES;
  }

  NSError *fileReachabilityError;
  if (![_fileURL checkResourceIsReachableAndReturnError:&fileReachabilityError]) {
    if (outError != NULL) {
      NSMutableDictionary *userInfo = [NSMutableDictionary dictionaryWithCapacity:2];
      userInfo[NSLocalizedDescriptionKey] =
          [NSString stringWithFormat:@"File at URL: %@ is not reachable.", _fileURL.absoluteString];

      if (fileReachabilityError) {
        userInfo[NSUnderlyingErrorKey] = fileReachabilityError;
      }

      *outError = [NSError errorWithDomain:FIRStorageErrorDomain
                                      code:FIRStorageErrorCodeUnknown
                                  userInfo:userInfo];
    }

    return NO;
  }

  return YES;
}

#pragma mark - Upload Management

- (void)cancel {
  __weak FIRStorageUploadTask *weakSelf = self;

  [self dispatchAsync:^() {
    weakSelf.state = FIRStorageTaskStateCancelled;
    [weakSelf.uploadFetcher stopFetching];
    if (weakSelf.state != FIRStorageTaskStateSuccess) {
      weakSelf.metadata = weakSelf.uploadMetadata;
    }
    weakSelf.error = [FIRStorageErrors errorWithCode:FIRStorageErrorCodeCancelled];
    [weakSelf fireHandlersForStatus:FIRStorageTaskStatusFailure snapshot:weakSelf.snapshot];
  }];
}

- (void)pause {
  __weak FIRStorageUploadTask *weakSelf = self;

  [self dispatchAsync:^() {
    weakSelf.state = FIRStorageTaskStatePaused;
    [weakSelf.uploadFetcher pauseFetching];
    if (weakSelf.state != FIRStorageTaskStateSuccess) {
      weakSelf.metadata = weakSelf.uploadMetadata;
    }
    [weakSelf fireHandlersForStatus:FIRStorageTaskStatusPause snapshot:weakSelf.snapshot];
  }];
}

- (void)resume {
  __weak FIRStorageUploadTask *weakSelf = self;

  [self dispatchAsync:^() {
    weakSelf.state = FIRStorageTaskStateResuming;
    [weakSelf.uploadFetcher resumeFetching];
    if (weakSelf.state != FIRStorageTaskStateSuccess) {
      weakSelf.metadata = weakSelf.uploadMetadata;
    }
    [weakSelf fireHandlersForStatus:FIRStorageTaskStatusResume snapshot:weakSelf.snapshot];
    weakSelf.state = FIRStorageTaskStateRunning;
  }];
}

@end
