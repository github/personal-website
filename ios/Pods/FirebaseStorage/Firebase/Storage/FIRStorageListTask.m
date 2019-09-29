// Copyright 2019 Google
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

#import "FIRStorageListTask.h"
#import "FIRStorageListResult_Private.h"
#import "FIRStorageReference_Private.h"
#import "FIRStorageTask_Private.h"

@implementation FIRStorageListTask {
 @private
  FIRStorageVoidListError _completion;
  NSNumber *_pageSize;
  NSString *_previousPageToken;
}

@synthesize fetcher = _fetcher;
@synthesize fetcherCompletion = _fetcherCompletion;

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                         pageSize:(nullable NSNumber *)pageSize
                previousPageToken:(nullable NSString *)previousPageToken
                       completion:(FIRStorageVoidListError)completion {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _completion = [completion copy];
    _pageSize = pageSize;
    _previousPageToken = [previousPageToken copy];
  }
  return self;
}

- (void)dealloc {
  [_fetcher stopFetching];
}

- (void)enqueue {
  __weak FIRStorageListTask *weakSelf = self;

  [self dispatchAsync:^() {
    FIRStorageListTask *strongSelf = weakSelf;

    if (!strongSelf) {
      return;
    }

    NSMutableDictionary<NSString *, NSString *> *queryParams = [NSMutableDictionary new];

    NSString *prefix = [self reference].fullPath;
    if (prefix.length != 0) {
      queryParams[@"prefix"] = [prefix stringByAppendingString:@"/"];
    }

    // Firebase Storage uses file system semantics and treats slashes as separators. GCS's List API
    // does not prescribe a separator, and hence we need to provide a slash as the delimiter.
    queryParams[@"delimiter"] = @"/";

    // listAll() doesn't set a pageSize as this allows Firebase Storage to determine how many items
    // to return per page. This removes the need to backfill results if Firebase Storage filters
    // objects that are considered invalid (such as items with two consecutive slashes).
    if (strongSelf->_pageSize != nil) {
      queryParams[@"maxResults"] = [strongSelf->_pageSize stringValue];
    }

    if (strongSelf->_previousPageToken) {
      queryParams[@"pageToken"] = strongSelf->_previousPageToken;
    }

    FIRStoragePath *basePath = [[FIRStoragePath alloc] initWithBucket:self.reference.bucket
                                                               object:nil];
    NSMutableURLRequest *request =
        [[FIRStorageUtils defaultRequestForPath:basePath queryParams:queryParams] mutableCopy];

    request.HTTPMethod = @"GET";
    request.timeoutInterval = strongSelf.reference.storage.maxOperationRetryTime;

    FIRStorageVoidListError callback = strongSelf->_completion;
    strongSelf->_completion = nil;

    GTMSessionFetcher *fetcher = [strongSelf.fetcherService fetcherWithRequest:request];
    strongSelf->_fetcher = fetcher;
    fetcher.comment = @"ListTask";

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-retain-cycles"
    strongSelf->_fetcherCompletion = ^(NSData *data, NSError *error) {
      FIRStorageListResult *listResult;
      if (error) {
        self.error = [FIRStorageErrors errorWithServerError:error reference:self.reference];
      } else {
        NSDictionary *responseDictionary = [NSDictionary frs_dictionaryFromJSONData:data];
        if (responseDictionary != nil) {
          listResult = [FIRStorageListResult fromDictionary:responseDictionary
                                                atReference:self.reference];
        } else {
          self.error = [FIRStorageErrors errorWithInvalidRequest:data];
        }
      }

      if (callback) {
        callback(listResult, self.error);
      }

      // Remove retain cycle set up by `strongSelf->_fetcherCompletion`
      self->_fetcherCompletion = nil;
    };
#pragma clang diagnostic pop

    [fetcher beginFetchWithCompletionHandler:^(NSData *data, NSError *error) {
      weakSelf.fetcherCompletion(data, error);
    }];
  }];
}

@end
