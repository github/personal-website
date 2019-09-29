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

#import "FIRStorageTask.h"

NS_ASSUME_NONNULL_BEGIN

@class FIRStorageReference;
@class FIRStorageTaskSnapshot;

/**
 * Extends FIRStorageTask to provide observable semantics such as adding and removing observers.
 * Observers produce a FIRStorageHandle, which is used to keep track of and remove specific
 * observers at a later date.
 * This class is currently not thread safe and can only be called on the main thread.
 */
NS_SWIFT_NAME(StorageObservableTask)
@interface FIRStorageObservableTask : FIRStorageTask

/**
 * Observes changes in the upload status: Resume, Pause, Progress, Success, and Failure.
 * @param status The FIRStorageTaskStatus change to observe.
 * @param handler A callback that fires every time the status event occurs,
 * returns a FIRStorageTaskSnapshot containing the state of the task.
 * @return A task handle that can be used to remove the observer at a later date.
 */
- (FIRStorageHandle)observeStatus:(FIRStorageTaskStatus)status
                          handler:(void (^)(FIRStorageTaskSnapshot *snapshot))handler;

/**
 * Removes the single observer with the provided handle.
 * @param handle The handle of the task to remove.
 */
- (void)removeObserverWithHandle:(FIRStorageHandle)handle;

/**
 * Removes all observers for a single status.
 * @param status A FIRStorageTaskStatus to remove listeners for.
 */
- (void)removeAllObserversForStatus:(FIRStorageTaskStatus)status;

/**
 * Removes all observers.
 */
- (void)removeAllObservers;

@end

NS_ASSUME_NONNULL_END
