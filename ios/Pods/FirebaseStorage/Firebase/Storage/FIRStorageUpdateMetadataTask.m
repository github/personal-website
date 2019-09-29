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

#import "FIRStorageUpdateMetadataTask.h"

#import "FIRStorageMetadata_Private.h"
#import "FIRStorageTask_Private.h"

@implementation FIRStorageUpdateMetadataTask {
 @private
  FIRStorageVoidMetadataError _completion;
  // Metadata used in the update request
  FIRStorageMetadata *_updateMetadata;
}

@synthesize fetcher = _fetcher;
@synthesize fetcherCompletion = _fetcherCompletion;

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                         metadata:(FIRStorageMetadata *)metadata
                       completion:(FIRStorageVoidMetadataError)completion {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _updateMetadata = [metadata copy];
    _completion = [completion copy];
  }
  return self;
}

- (void)dealloc {
  [_fetcher stopFetching];
}

- (void)enqueue {
  __weak FIRStorageUpdateMetadataTask *weakSelf = self;

  [self dispatchAsync:^() {
    FIRStorageUpdateMetadataTask *strongSelf = weakSelf;

    if (!strongSelf) {
      return;
    }

    NSMutableURLRequest *request = [strongSelf.baseRequest mutableCopy];
    NSDictionary *updateDictionary = [strongSelf->_updateMetadata updatedMetadata];
    NSData *updateData = [NSData frs_dataFromJSONDictionary:updateDictionary];
    request.HTTPMethod = @"PATCH";
    request.timeoutInterval = strongSelf.reference.storage.maxOperationRetryTime;
    request.HTTPBody = updateData;
    NSString *typeString = @"application/json; charset=UTF-8";
    [request setValue:typeString forHTTPHeaderField:@"Content-Type"];
    NSString *lengthString = [NSString stringWithFormat:@"%zu", (unsigned long)[updateData length]];
    [request setValue:lengthString forHTTPHeaderField:@"Content-Length"];

    FIRStorageVoidMetadataError callback = strongSelf->_completion;
    strongSelf->_completion = nil;

    GTMSessionFetcher *fetcher = [strongSelf.fetcherService fetcherWithRequest:request];
    strongSelf->_fetcher = fetcher;

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-retain-cycles"
    strongSelf->_fetcherCompletion = ^(NSData *data, NSError *error) {
      FIRStorageMetadata *metadata;
      if (error) {
        if (!self.error) {
          self.error = [FIRStorageErrors errorWithServerError:error reference:self.reference];
        }
      } else {
        NSDictionary *responseDictionary = [NSDictionary frs_dictionaryFromJSONData:data];
        if (responseDictionary) {
          metadata = [[FIRStorageMetadata alloc] initWithDictionary:responseDictionary];
          [metadata setType:FIRStorageMetadataTypeFile];
        } else {
          self.error = [FIRStorageErrors errorWithInvalidRequest:data];
        }
      }

      if (callback) {
        callback(metadata, self.error);
      }
      self->_fetcherCompletion = nil;
    };
#pragma clang diagnostic pop

    fetcher.comment = @"UpdateMetadataTask";

    [fetcher beginFetchWithCompletionHandler:^(NSData *data, NSError *error) {
      weakSelf.fetcherCompletion(data, error);
    }];
  }];
}

@end
