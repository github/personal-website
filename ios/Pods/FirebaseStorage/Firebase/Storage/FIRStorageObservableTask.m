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

#import "FIRStorageObservableTask.h"
#import "FIRStorageObservableTask_Private.h"
#import "FIRStorageTask_Private.h"

@implementation FIRStorageObservableTask {
 @private
  // Handlers for pause, resume, progress, success, and failure callbacks
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *_resumeHandlers;
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *_pauseHandlers;
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *_progressHandlers;
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *_successHandlers;
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *_failureHandlers;
  // Reverse map of fetcher handles to status types
  NSMutableDictionary<NSString *, NSNumber *> *_handleToStatusMap;
}

@synthesize state = _state;

- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue {
  self = [super initWithReference:reference fetcherService:service dispatchQueue:queue];
  if (self) {
    _pauseHandlers = [[NSMutableDictionary alloc] init];
    _resumeHandlers = [[NSMutableDictionary alloc] init];
    _progressHandlers = [[NSMutableDictionary alloc] init];
    _successHandlers = [[NSMutableDictionary alloc] init];
    _failureHandlers = [[NSMutableDictionary alloc] init];
    _handleToStatusMap = [[NSMutableDictionary alloc] init];
  }
  return self;
}

#pragma mark - Observers

- (FIRStorageHandle)observeStatus:(FIRStorageTaskStatus)status
                          handler:(FIRStorageVoidSnapshot)handler {
  FIRStorageVoidSnapshot callback = handler;

  // Note: self.snapshot is synchronized
  FIRStorageTaskSnapshot *snapshot = self.snapshot;
  // TODO: use an increasing counter instead of a random UUID
  NSString *UUIDString = [[NSUUID UUID] UUIDString];
  switch (status) {
    case FIRStorageTaskStatusPause:
      @synchronized(self) {
        [_pauseHandlers setValue:callback forKey:UUIDString];
      }  // @synchronized(self)
      if (_state == FIRStorageTaskStatePausing || _state == FIRStorageTaskStatePaused) {
        [self fireHandlers:_pauseHandlers snapshot:snapshot];
      }
      break;

    case FIRStorageTaskStatusResume:
      @synchronized(self) {
        [_resumeHandlers setValue:callback forKey:UUIDString];
      }  // @synchronized(self)
      if (_state == FIRStorageTaskStateResuming || _state == FIRStorageTaskStateRunning) {
        [self fireHandlers:_resumeHandlers snapshot:snapshot];
      }
      break;

    case FIRStorageTaskStatusProgress:
      @synchronized(self) {
        [_progressHandlers setValue:callback forKey:UUIDString];
      }  // @synchronized(self)
      if (_state == FIRStorageTaskStateRunning || _state == FIRStorageTaskStateProgress) {
        [self fireHandlers:_progressHandlers snapshot:snapshot];
      }
      break;

    case FIRStorageTaskStatusSuccess:
      @synchronized(self) {
        [_successHandlers setValue:callback forKey:UUIDString];
      }  // @synchronized(self)
      if (_state == FIRStorageTaskStateSuccess) {
        [self fireHandlers:_successHandlers snapshot:snapshot];
      }
      break;

    case FIRStorageTaskStatusFailure:
      @synchronized(self) {
        [_failureHandlers setValue:callback forKey:UUIDString];
      }  // @synchronized(self)
      if (_state == FIRStorageTaskStateFailing || _state == FIRStorageTaskStateFailed) {
        [self fireHandlers:_failureHandlers snapshot:snapshot];
      }
      break;

    case FIRStorageTaskStatusUnknown:
      // Fall through to exception case if an unknown status is passed

    default:
      [NSException raise:NSInternalInconsistencyException
                  format:kFIRStorageInvalidObserverStatus, nil];
      break;
  }

  @synchronized(self) {
    _handleToStatusMap[UUIDString] = @(status);
  }  // @synchronized(self)

  return UUIDString;
}

- (void)removeObserverWithHandle:(FIRStorageHandle)handle {
  FIRStorageTaskStatus status = [_handleToStatusMap[handle] intValue];
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *observerDictionary =
      [self handlerDictionaryForStatus:status];

  @synchronized(self) {
    [observerDictionary removeObjectForKey:handle];
    [_handleToStatusMap removeObjectForKey:handle];
  }  // @synchronized(self)
}

- (void)removeAllObserversForStatus:(FIRStorageTaskStatus)status {
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *observerDictionary =
      [self handlerDictionaryForStatus:status];
  [self removeHandlersFromStatusMapForDictionary:observerDictionary];

  @synchronized(self) {
    [observerDictionary removeAllObjects];
  }  // @synchronized(self)
}

- (void)removeAllObservers {
  @synchronized(self) {
    [_pauseHandlers removeAllObjects];
    [_resumeHandlers removeAllObjects];
    [_progressHandlers removeAllObjects];
    [_successHandlers removeAllObjects];
    [_failureHandlers removeAllObjects];
    [_handleToStatusMap removeAllObjects];
  }  // @synchronized(self)
}

- (NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *)handlerDictionaryForStatus:
    (FIRStorageTaskStatus)status {
  switch (status) {
    case FIRStorageTaskStatusPause:
      return _pauseHandlers;

    case FIRStorageTaskStatusResume:
      return _resumeHandlers;

    case FIRStorageTaskStatusProgress:
      return _progressHandlers;

    case FIRStorageTaskStatusSuccess:
      return _successHandlers;

    case FIRStorageTaskStatusFailure:
      return _failureHandlers;

    case FIRStorageTaskStatusUnknown:
      return [NSMutableDictionary dictionary];

    default:
      [NSException raise:NSInternalInconsistencyException
                  format:kFIRStorageInvalidObserverStatus, nil];
      return nil;
  }
}

- (void)removeHandlersFromStatusMapForDictionary:
    (NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *)dict {
  @synchronized(self) {
    [_handleToStatusMap removeObjectsForKeys:dict.allKeys];
  }  // @synchronized(self)
}

- (void)fireHandlersForStatus:(FIRStorageTaskStatus)status
                     snapshot:(FIRStorageTaskSnapshot *)snapshot {
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *observerDictionary =
      [self handlerDictionaryForStatus:status];
  [self fireHandlers:observerDictionary snapshot:snapshot];
}

- (void)fireHandlers:(NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *)handlers
            snapshot:(FIRStorageTaskSnapshot *)snapshot {
  dispatch_queue_t callbackQueue = self.fetcherService.callbackQueue;
  if (!callbackQueue) {
    callbackQueue = dispatch_get_main_queue();
  }

  // TODO: iterate over this list in a consistent order
  NSMutableDictionary<NSString *, FIRStorageVoidSnapshot> *handlersCopy;
  @synchronized(self) {
    handlersCopy = [handlers copy];
  }  // @synchronized(self)
  [handlersCopy
      enumerateKeysAndObjectsUsingBlock:^(
          NSString *_Nonnull key, FIRStorageVoidSnapshot _Nonnull handler, BOOL *_Nonnull stop) {
        dispatch_async(callbackQueue, ^{
          handler(snapshot);
        });
      }];
}

@end
