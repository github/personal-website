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

#import "FIRStorageTaskSnapshot.h"
#import "FIRStorageTaskSnapshot_Private.h"

#import "FIRStorageTask_Private.h"

@implementation FIRStorageTaskSnapshot

- (instancetype)initWithTask:(__kindof FIRStorageTask *)task
                       state:(FIRStorageTaskState)state
                    metadata:(nullable FIRStorageMetadata *)metadata
                   reference:(FIRStorageReference *)reference
                    progress:(nullable NSProgress *)progress
                       error:(nullable NSError *)error {
  self = [super init];
  if (self) {
    _task = task;
    _metadata = metadata;
    _reference = reference;
    _progress = progress;
    _error = error;

    switch (state) {
      case FIRStorageTaskStateQueueing:
      case FIRStorageTaskStateRunning:
      case FIRStorageTaskStateResuming:
        _status = FIRStorageTaskStatusResume;
        break;

      case FIRStorageTaskStateProgress:
        _status = FIRStorageTaskStatusProgress;
        break;

      case FIRStorageTaskStatePaused:
      case FIRStorageTaskStatePausing:
        _status = FIRStorageTaskStatusPause;
        break;

      case FIRStorageTaskStateSuccess:
      case FIRStorageTaskStateCompleting:
        _status = FIRStorageTaskStatusSuccess;
        break;

      case FIRStorageTaskStateCancelled:
      case FIRStorageTaskStateFailing:
      case FIRStorageTaskStateFailed:
        _status = FIRStorageTaskStatusFailure;
        break;

      default:
        _status = FIRStorageTaskStatusUnknown;
    }
  }
  return self;
}

- (NSString *)description {
  switch (_status) {
    case FIRStorageTaskStatusResume:
      return @"<State: Resume>";
    case FIRStorageTaskStatusProgress:
      return [NSString stringWithFormat:@"<State: Progress, Progress: %@>", _progress];
    case FIRStorageTaskStatusPause:
      return @"<State: Paused>";
    case FIRStorageTaskStatusSuccess:
      return @"<State: Success>";
    case FIRStorageTaskStatusFailure:
      return [NSString stringWithFormat:@"<State: Failed, Error: %@>", _error];
    default:
      return @"<State: Unknown>";
  };
}

@end
