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

#import "FIRStorageObservableTask.h"

NS_ASSUME_NONNULL_BEGIN

@class FIRStorageReference;
@class FIRStorageTaskSnapshot;
@class GTMSessionFetcherService;

@interface FIRStorageObservableTask ()

/**
 * Creates a new FIRStorageTask initialized with a FIRStorageReference and GTMSessionFetcherService.
 * @param reference A FIRStorageReference the task will be performed on.
 * @param service A GTMSessionFetcherService which provides the fetchers and configuration for
 * requests.
 * @param queue The shared queue to use for all Storage operations.
 * @return A new FIRStorageTask representing the current task.
 */
- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue;

/**
 * Raise events for a given task status by passing along a snapshot of existing task state.
 * @param status A FIRStorageTaskStatus to raise events for.
 * @param snapshot A FIRStorageTaskSnapshot snapshot of task state to pass through the handler.
 */
- (void)fireHandlersForStatus:(FIRStorageTaskStatus)status
                     snapshot:(FIRStorageTaskSnapshot *)snapshot;

@end

NS_ASSUME_NONNULL_END
