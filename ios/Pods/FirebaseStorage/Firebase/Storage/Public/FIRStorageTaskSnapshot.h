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

NS_ASSUME_NONNULL_BEGIN

@class FIRStorageMetadata;
@class FIRStorageReference;
@class FIRStorageTask;

/**
 * FIRStorageTaskSnapshot represents an immutable view of a task.
 * A Snapshot contains a task, storage reference, metadata (if it exists),
 * progress, and an error (if one occurred).
 */
NS_SWIFT_NAME(StorageTaskSnapshot)
@interface FIRStorageTaskSnapshot : NSObject

/**
 * Subclass of FIRStorageTask this snapshot represents.
 */
@property(readonly, copy, nonatomic) __kindof FIRStorageTask *task;

/**
 * Metadata returned by the task, or nil if no metadata returned.
 */
@property(readonly, copy, nonatomic, nullable) FIRStorageMetadata *metadata;

/**
 * FIRStorageReference this task is operates on.
 */
@property(readonly, copy, nonatomic) FIRStorageReference *reference;

/**
 * NSProgress object which tracks the progess of an upload or download.
 */
@property(readonly, strong, nonatomic, nullable) NSProgress *progress;

/**
 * Error during task execution, or nil if no error occurred.
 */
@property(readonly, copy, nonatomic, nullable) NSError *error;

/**
 * Status of the task.
 */
@property(readonly, nonatomic) FIRStorageTaskStatus status;

@end

NS_ASSUME_NONNULL_END
