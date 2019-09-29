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

@class FIRStorageMetadata;

NS_ASSUME_NONNULL_BEGIN

FOUNDATION_EXPORT NSString *const kGCSScheme;
FOUNDATION_EXPORT NSString *const kGCSHost;
FOUNDATION_EXPORT NSString *const kGCSUploadPath;
FOUNDATION_EXPORT NSString *const kGCSStorageVersionPath;
FOUNDATION_EXPORT NSString *const kGCSBucketPathFormat;
FOUNDATION_EXPORT NSString *const kGCSObjectPathFormat;

FOUNDATION_EXPORT NSString *const kFIRStorageScheme;
FOUNDATION_EXPORT NSString *const kFIRStorageHost;
FOUNDATION_EXPORT NSString *const kFIRStorageVersionPath;
FOUNDATION_EXPORT NSString *const kFIRStorageBucketPathFormat;
FOUNDATION_EXPORT NSString *const kFIRStorageObjectPathFormat;
FOUNDATION_EXPORT NSString *const kFIRStorageFullPathFormat;

FOUNDATION_EXPORT NSString *const kFIRStorageAuthTokenFormat;
FOUNDATION_EXPORT NSString *const kFIRStorageDefaultBucketFormat;

FOUNDATION_EXPORT NSString *const kFIRStorageResponseErrorDomain;
FOUNDATION_EXPORT NSString *const kFIRStorageResponseErrorCode;
FOUNDATION_EXPORT NSString *const kFIRStorageResponseBody;

FOUNDATION_EXPORT NSString *const kFIRStorageTaskStatusResumeNotification;
FOUNDATION_EXPORT NSString *const kFIRStorageTaskStatusPauseNotification;
FOUNDATION_EXPORT NSString *const kFIRStorageTaskStatusProgressNotification;
FOUNDATION_EXPORT NSString *const kFIRStorageTaskStatusCompleteNotification;
FOUNDATION_EXPORT NSString *const kFIRStorageTaskStatusFailureNotification;

FOUNDATION_EXPORT NSString *const kFIRStorageListPrefixes;
FOUNDATION_EXPORT NSString *const kFIRStorageListItems;
FOUNDATION_EXPORT NSString *const kFIRStorageListItemName;
FOUNDATION_EXPORT NSString *const kFIRStorageListPageToken;

FOUNDATION_EXPORT NSString *const kFIRStorageMetadataBucket;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataCacheControl;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataContentDisposition;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataContentEncoding;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataContentLanguage;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataContentType;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataCustomMetadata;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataSize;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataGeneration;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataMetageneration;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataTimeCreated;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataUpdated;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataName;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataDownloadTokens;
FOUNDATION_EXPORT NSString *const kFIRStorageMetadataMd5Hash;

FOUNDATION_EXPORT NSString *const kFIRStorageInvalidDataFormat;
FOUNDATION_EXPORT NSString *const kFIRStorageInvalidObserverStatus;

FOUNDATION_EXPORT NSString *const kFIRStorageBundleIdentifier;

/**
 * Enum representing the internal state of an upload or download task.
 */
typedef NS_ENUM(NSInteger, FIRStorageTaskState) {
  /**
   * Unknown task state
   */
  FIRStorageTaskStateUnknown,

  /**
   * Task is being queued is ready to run
   */
  FIRStorageTaskStateQueueing,

  /**
   * Task is resuming from a paused state
   */
  FIRStorageTaskStateResuming,

  /**
   * Task is currently running
   */
  FIRStorageTaskStateRunning,

  /**
   * Task reporting a progress event
   */
  FIRStorageTaskStateProgress,

  /**
   * Task is pausing
   */
  FIRStorageTaskStatePausing,

  /**
   * Task is completing successfully
   */
  FIRStorageTaskStateCompleting,

  /**
   * Task is failing unrecoverably
   */
  FIRStorageTaskStateFailing,

  /**
   * Task paused successfully
   */
  FIRStorageTaskStatePaused,

  /**
   * Task cancelled successfully
   */
  FIRStorageTaskStateCancelled,

  /**
   * Task completed successfully
   */
  FIRStorageTaskStateSuccess,

  /**
   * Task failed unrecoverably
   */
  FIRStorageTaskStateFailed
};

/**
 * Represents the various types of metadata: Files or Folders.
 */
typedef NS_ENUM(NSUInteger, FIRStorageMetadataType) {
  FIRStorageMetadataTypeUnknown,
  FIRStorageMetadataTypeFile,
  FIRStorageMetadataTypeFolder,
};

NS_ASSUME_NONNULL_END
