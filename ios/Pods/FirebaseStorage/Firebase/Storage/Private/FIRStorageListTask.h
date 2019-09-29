/*
 * Copyright 2019 Google
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

#import "FIRStorageListResult.h"
#import "FIRStorageTask.h"

@class GTMSessionFetcherService;

NS_ASSUME_NONNULL_BEGIN

/**
 * Block typedef typically used in `list()` and `listAll()`.
 * @param listResult The FIRStorageListResult returned by the operation, if it exists.
 * @param error The error describing failure, if one occurred.
 */
typedef void (^FIRStorageVoidListError)(FIRStorageListResult *_Nullable listResult,
                                        NSError *_Nullable error);

/** A Task that lists the entries under a {@link StorageReference} */
@interface FIRStorageListTask : FIRStorageTask <FIRStorageTaskManagement>

/**
 * Initializes a new List Task.
 *
 * To schedule the task, invoke `[FIRStorageListTask enqueue]`.
 *
 * @param reference The location to invoke List on.
 * @param service GTMSessionFetcherService to use for the RPC.
 * @param queue The queue to schedule the List operation on.
 * @param pageSize An optional pageSize, denoting the maximum size of the result set. If
 * set to `nil`, the backend will use the default page size.
 * @param previousPageToken An optional pageToken, used to resume a previous invocation.
 * @param completion The completion handler to be called with the FIRStorageListResult.
 */
- (instancetype)initWithReference:(FIRStorageReference *)reference
                   fetcherService:(GTMSessionFetcherService *)service
                    dispatchQueue:(dispatch_queue_t)queue
                         pageSize:(nullable NSNumber *)pageSize
                previousPageToken:(nullable NSString *)previousPageToken
                       completion:(FIRStorageVoidListError)completion;

@end

NS_ASSUME_NONNULL_END