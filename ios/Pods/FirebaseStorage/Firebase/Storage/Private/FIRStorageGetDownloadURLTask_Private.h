/*
 * Copyright 2018 Google
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

#import "FIRStorageGetDownloadURLTask.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * Task which provides the ability to get a download URL for an object in Firebase Storage.
 */
@interface FIRStorageGetDownloadURLTask ()

/** Extracts a download URL from the StorageMetadata dictonary representation. */
+ (nullable NSURL *)downloadURLFromMetadataDictionary:(NSDictionary *)dictionary;

@end

NS_ASSUME_NONNULL_END
