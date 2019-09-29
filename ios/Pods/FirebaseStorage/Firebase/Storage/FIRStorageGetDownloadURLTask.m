// Copyright 2018 Google
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

#import "FIRStorageGetDownloadURLTask.h"

#import "FIRStorageTask_Private.h"

@implementation FIRStorageGetDownloadURLTask {
 @private
  FIRStorageVoidURLError _completion;
}

@synthesize fetcher = _fetcher;
@synthesize fetcherCompletion = _fetcherCompletion;

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                       completion:(FIRStorageVoidURLError)completion {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _completion = [completion copy];
  }
  return self;
}

- (void)dealloc {
  [_fetcher stopFetching];
}

+ (NSURL *)downloadURLFromMetadataDictionary:(NSDictionary *)dictionary {
  NSString *downloadTokens = dictionary[kFIRStorageMetadataDownloadTokens];

  if (downloadTokens && downloadTokens.length > 0) {
    NSArray<NSString *> *downloadTokenArray = [downloadTokens componentsSeparatedByString:@","];
    NSString *bucket = dictionary[kFIRStorageMetadataBucket];
    NSString *path = dictionary[kFIRStorageMetadataName];
    NSString *fullPath = [NSString stringWithFormat:kFIRStorageFullPathFormat, bucket,
                                                    [FIRStorageUtils GCSEscapedString:path]];

    NSURLComponents *components = [[NSURLComponents alloc] init];
    components.scheme = kFIRStorageScheme;
    components.host = kFIRStorageHost;
    components.percentEncodedPath = fullPath;

    // The backend can return an arbitrary number of download tokens, but we only expose the first
    // token via the download URL.
    NSURLQueryItem *altItem = [[NSURLQueryItem alloc] initWithName:@"alt" value:@"media"];
    NSURLQueryItem *tokenItem = [[NSURLQueryItem alloc] initWithName:@"token"
                                                               value:downloadTokenArray[0]];
    components.queryItems = @[ altItem, tokenItem ];

    return [components URL];
  }

  return nil;
}

- (void)enqueue {
  __weak FIRStorageGetDownloadURLTask *weakSelf = self;

  [self dispatchAsync:^() {
    FIRStorageGetDownloadURLTask *strongSelf = weakSelf;

    if (!strongSelf) {
      return;
    }

    NSMutableURLRequest *request = [strongSelf.baseRequest mutableCopy];
    request.HTTPMethod = @"GET";
    request.timeoutInterval = strongSelf.reference.storage.maxOperationRetryTime;

    FIRStorageVoidURLError callback = strongSelf->_completion;
    strongSelf->_completion = nil;

    GTMSessionFetcher *fetcher = [strongSelf.fetcherService fetcherWithRequest:request];
    strongSelf->_fetcher = fetcher;
    fetcher.comment = @"GetDownloadURLTask";

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-retain-cycles"
    strongSelf->_fetcherCompletion = ^(NSData *data, NSError *error) {
      NSURL *downloadURL;
      if (error) {
        if (!self.error) {
          self.error = [FIRStorageErrors errorWithServerError:error reference:self.reference];
        }
      } else {
        NSDictionary *responseDictionary = [NSDictionary frs_dictionaryFromJSONData:data];
        if (responseDictionary != nil) {
          downloadURL =
              [FIRStorageGetDownloadURLTask downloadURLFromMetadataDictionary:responseDictionary];
          if (!downloadURL) {
            self.error =
                [FIRStorageErrors errorWithCustomMessage:@"Failed to retrieve a download URL."];
          }
        } else {
          self.error = [FIRStorageErrors errorWithInvalidRequest:data];
        }
      }

      if (callback) {
        callback(downloadURL, self.error);
      }

      self->_fetcherCompletion = nil;
    };
#pragma clang diagnostic pop
    [fetcher beginFetchWithCompletionHandler:^(NSData *data, NSError *error) {
      weakSelf.fetcherCompletion(data, error);
    }];
  }];
};

@end
