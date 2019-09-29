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

#import "FIRStorageConstants.h"
#import "FIRStorageMetadata.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * A superclass to all FIRStorage*Tasks, including FIRStorageUploadTask
 * and FIRStorageDownloadTask, to provide state transitions, event raising, and common storage
 * or metadata and errors.
 * Callbacks are always fired on the developer specified callback queue.
 * If no queue is specified by the developer, it defaults to the main queue.
 * Currently not thread safe, so only call methods on the main thread.
 */
NS_SWIFT_NAME(StorageTask)
@interface FIRStorageTask : NSObject

/**
 * An immutable view of the task and associated metadata, progress, error, etc.
 */
@property(strong, readonly, nonatomic, nonnull) FIRStorageTaskSnapshot *snapshot;

@end

/**
 * Defines task operations such as pause, resume, cancel, and enqueue for all tasks.
 * All tasks are required to implement enqueue, which begins the task, and may optionally
 * implement pause, resume, and cancel, which operate on the task to pause, resume, and cancel
 * operations.
 */
NS_SWIFT_NAME(StorageTaskManagement)
@protocol FIRStorageTaskManagement <NSObject>

@required
/**
 * Prepares a task and begins execution.
 */
- (void)enqueue;

@optional
/**
 * Pauses a task currently in progress.
 */
- (void)pause;

/**
 * Cancels a task currently in progress.
 */
- (void)cancel;

/**
 * Resumes a task that is paused.
 */
- (void)resume;

@end

NS_ASSUME_NONNULL_END
