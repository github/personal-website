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

#import "FIRStorageConstants.h"

#import "FIRStorageConstants_Private.h"

NSString *const kGCSScheme = @"https";
NSString *const kGCSHost = @"www.googleapis.com";
NSString *const kGCSUploadPath = @"upload";
NSString *const kGCSStorageVersionPath = @"storage/v1";
NSString *const kGCSBucketPathFormat = @"b/%@";
NSString *const kGCSObjectPathFormat = @"o/%@";

NSString *const kFIRStorageScheme = @"https";
NSString *const kFIRStorageHost = @"firebasestorage.googleapis.com";
NSString *const kFIRStorageVersionPath = @"v0";
NSString *const kFIRStorageBucketPathFormat = @"b/%@";
NSString *const kFIRStorageObjectPathFormat = @"o/%@";
NSString *const kFIRStorageFullPathFormat = @"/v0/b/%@/o/%@";

NSString *const kFIRStorageAuthTokenFormat = @"Firebase %@";
NSString *const kFIRStorageDefaultBucketFormat = @"gs://%@";

NSString *const kFIRStorageResponseErrorDomain = @"ResponseErrorDomain";
NSString *const kFIRStorageResponseErrorCode = @"ResponseErrorCode";
NSString *const kFIRStorageResponseBody = @"ResponseBody";

NSString *const FIRStorageErrorDomain = @"FIRStorageErrorDomain";

NSString *const kFIRStorageInvalidDataFormat = @"Invalid data returned from the server: %@";
NSString *const kFIRStorageInvalidObserverStatus =
    @"Invalid observer status requested, use one "
    @"of: FIRStorageTaskStatusPause, Resume, Progress, "
    @"Complete, or Failure";

/**
 * String constants mapping GCS Object#list results to ListResult fields.
 */
NSString *const kFIRStorageListPrefixes = @"prefixes";
NSString *const kFIRStorageListItems = @"items";
NSString *const kFIRStorageListItemName = @"name";
NSString *const kFIRStorageListPageToken = @"nextPageToken";

/**
 * String constants mapping GCS Object#resource mappings to metadata fields.
 */
NSString *const kFIRStorageMetadataBucket = @"bucket";
NSString *const kFIRStorageMetadataCacheControl = @"cacheControl";
NSString *const kFIRStorageMetadataContentDisposition = @"contentDisposition";
NSString *const kFIRStorageMetadataContentEncoding = @"contentEncoding";
NSString *const kFIRStorageMetadataContentLanguage = @"contentLanguage";
NSString *const kFIRStorageMetadataContentType = @"contentType";
NSString *const kFIRStorageMetadataCustomMetadata = @"metadata";
NSString *const kFIRStorageMetadataSize = @"size";
NSString *const kFIRStorageMetadataGeneration = @"generation";
NSString *const kFIRStorageMetadataMetageneration = @"metageneration";
NSString *const kFIRStorageMetadataTimeCreated = @"timeCreated";
NSString *const kFIRStorageMetadataUpdated = @"updated";
NSString *const kFIRStorageMetadataName = @"name";
NSString *const kFIRStorageMetadataDownloadTokens = @"downloadTokens";
NSString *const kFIRStorageMetadataMd5Hash = @"md5Hash";

// TODO: add notification support
NSString *const kFIRStorageTaskStatusResumeNotification =
    @"kFIRStorageTaskStatusResumeNotification";
NSString *const kFIRStorageTaskStatusPauseNotification = @"kFIRStorageTaskStatusResumeNotification";
NSString *const kFIRStorageTaskStatusProgressNotification =
    @"kFIRStorageTaskStatusResumeNotification";
NSString *const kFIRStorageTaskStatusCompleteNotification =
    @"kFIRStorageTaskStatusResumeNotification";
NSString *const kFIRStorageTaskStatusFailureNotification =
    @"kFIRStorageTaskStatusResumeNotification";

NSString *const kFIRStorageBundleIdentifier = @"com.google.firebase.storage";

// The STR and STR_EXPAND macro allow a numeric version passed to he compiler driver
// with a -D to be treated as a string instead of an invalid floating point value.
#define STR(x) STR_EXPAND(x)
#define STR_EXPAND(x) #x
const char *const FIRStorageVersionString = (const char *const)STR(FIRStorage_VERSION);
