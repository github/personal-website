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

@class FIRApp;
@class GTMSessionFetcherService;

NS_ASSUME_NONNULL_BEGIN

@interface FIRStorage ()

@property(strong, nonatomic, readwrite) FIRApp *app;

@property(strong, nonatomic) GTMSessionFetcherService *fetcherServiceForApp;

@property(nonatomic, readonly) dispatch_queue_t dispatchQueue;

@property(strong, nonatomic) NSString *storageBucket;

/**
 * Enables/disables GTMSessionFetcher HTTP logging
 * @param isLoggingEnabled Boolean passed through to enable/disable GTMSessionFetcher logging
 */
+ (void)setGTMSessionFetcherLoggingEnabled:(BOOL)isLoggingEnabled;

@end

NS_ASSUME_NONNULL_END
