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

#import "FIRStorageDownloadTask.h"

#import "FIRStorageConstants_Private.h"
#import "FIRStorageDownloadTask_Private.h"
#import "FIRStorageObservableTask_Private.h"
#import "FIRStorageTask_Private.h"

@implementation FIRStorageDownloadTask

@synthesize progress = _progress;
@synthesize fetcher = _fetcher;
@synthesize fetcherCompletion = _fetcherCompletion;

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                             file:(nullable NSURL *)fileURL {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _fileURL = [fileURL copy];
    _progress = [NSProgress progressWithTotalUnitCount:0];
  }
  return self;
}

- (void)dealloc {
  [_fetcher stopFetching];
}

- (void)enqueue {
  [self enqueueWithData:nil];
}

- (void)enqueueWithData:(nullable NSData *)resumeData {
  __weak FIRStorageDownloadTask *weakSelf = self;

  [self dispatchAsync:^() {
    FIRStorageDownloadTask *strongSelf = weakSelf;

    if (!strongSelf) {
      return;
    }

    strongSelf.state = FIRStorageTaskStateQueueing;
    NSMutableURLRequest *request = [strongSelf.baseRequest mutableCopy];
    request.HTTPMethod = @"GET";
    request.timeoutInterval = strongSelf.reference.storage.maxDownloadRetryTime;
    NSURLComponents *components = [NSURLComponents componentsWithURL:request.URL
                                             resolvingAgainstBaseURL:NO];
    [components setQuery:@"alt=media"];
    request.URL = components.URL;

    GTMSessionFetcher *fetcher;
    if (resumeData) {
      fetcher = [GTMSessionFetcher fetcherWithDownloadResumeData:resumeData];
      fetcher.comment = @"Resuming DownloadTask";
    } else {
      fetcher = [strongSelf.fetcherService fetcherWithRequest:request];
      fetcher.comment = @"Starting DownloadTask";
    }

    [fetcher setResumeDataBlock:^(NSData *data) {
      FIRStorageDownloadTask *strong = weakSelf;
      if (strong && data) {
        strong->_downloadData = data;
      }
    }];

    fetcher.maxRetryInterval = strongSelf.reference.storage.maxDownloadRetryTime;

    if (strongSelf->_fileURL) {
      // Handle file downloads
      [fetcher setDestinationFileURL:strongSelf->_fileURL];
      [fetcher setDownloadProgressBlock:^(int64_t bytesWritten, int64_t totalBytesWritten,
                                          int64_t totalBytesExpectedToWrite) {
        weakSelf.state = FIRStorageTaskStateProgress;
        weakSelf.progress.completedUnitCount = totalBytesWritten;
        weakSelf.progress.totalUnitCount = totalBytesExpectedToWrite;
        FIRStorageTaskSnapshot *snapshot = weakSelf.snapshot;
        [weakSelf fireHandlersForStatus:FIRStorageTaskStatusProgress snapshot:snapshot];
        weakSelf.state = FIRStorageTaskStateRunning;
      }];
    } else {
      // Handle data downloads
      [fetcher setReceivedProgressBlock:^(int64_t bytesWritten, int64_t totalBytesWritten) {
        weakSelf.state = FIRStorageTaskStateProgress;
        weakSelf.progress.completedUnitCount = totalBytesWritten;
        int64_t totalLength = [[weakSelf.fetcher response] expectedContentLength];
        weakSelf.progress.totalUnitCount = totalLength;
        FIRStorageTaskSnapshot *snapshot = weakSelf.snapshot;
        [weakSelf fireHandlersForStatus:FIRStorageTaskStatusProgress snapshot:snapshot];
        weakSelf.state = FIRStorageTaskStateRunning;
      }];
    }

    strongSelf->_fetcher = fetcher;

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-retain-cycles"
    strongSelf->_fetcherCompletion = ^(NSData *data, NSError *error) {
      // Fire last progress updates
      [self fireHandlersForStatus:FIRStorageTaskStatusProgress snapshot:self.snapshot];

      // Handle potential issues with download
      if (error) {
        self.state = FIRStorageTaskStateFailed;
        self.error = [FIRStorageErrors errorWithServerError:error reference:self.reference];
        [self fireHandlersForStatus:FIRStorageTaskStatusFailure snapshot:self.snapshot];
        [self removeAllObservers];
        self->_fetcherCompletion = nil;
        return;
      }

      // Download completed successfully, fire completion callbacks
      self.state = FIRStorageTaskStateSuccess;

      if (data) {
        self->_downloadData = data;
      }

      [self fireHandlersForStatus:FIRStorageTaskStatusSuccess snapshot:self.snapshot];
      [self removeAllObservers];
      self->_fetcherCompletion = nil;
    };
#pragma clang diagnostic pop

    strongSelf.state = FIRStorageTaskStateRunning;
    [strongSelf.fetcher beginFetchWithCompletionHandler:^(NSData *data, NSError *error) {
      weakSelf.fetcherCompletion(data, error);
    }];
  }];
}

#pragma mark - Download Management

- (void)cancel {
  NSError *error = [FIRStorageErrors errorWithCode:FIRStorageErrorCodeCancelled];
  [self cancelWithError:error];
}

- (void)cancelWithError:(NSError *)error {
  __weak FIRStorageDownloadTask *weakSelf = self;
  [self dispatchAsync:^() {
    weakSelf.state = FIRStorageTaskStateCancelled;
    [weakSelf.fetcher stopFetching];
    weakSelf.error = error;
    [weakSelf fireHandlersForStatus:FIRStorageTaskStatusFailure snapshot:weakSelf.snapshot];
  }];
}

- (void)pause {
  __weak FIRStorageDownloadTask *weakSelf = self;
  [self dispatchAsync:^() {
    weakSelf.state = FIRStorageTaskStatePausing;
    [weakSelf.fetcher stopFetching];
    // Give the resume callback a chance to run (if scheduled)
    [weakSelf.fetcher waitForCompletionWithTimeout:0.001];
    weakSelf.state = FIRStorageTaskStatePaused;
    FIRStorageTaskSnapshot *snapshot = weakSelf.snapshot;
    [weakSelf fireHandlersForStatus:FIRStorageTaskStatusPause snapshot:snapshot];
  }];
}

- (void)resume {
  __weak FIRStorageDownloadTask *weakSelf = self;
  [self dispatchAsync:^() {
    weakSelf.state = FIRStorageTaskStateResuming;
    FIRStorageTaskSnapshot *snapshot = weakSelf.snapshot;
    [weakSelf fireHandlersForStatus:FIRStorageTaskStatusResume snapshot:snapshot];
    weakSelf.state = FIRStorageTaskStateRunning;
    [weakSelf enqueueWithData:weakSelf.downloadData];
  }];
}

@end
