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

#import "FIRPhoneAuthProvider.h"

#import <FirebaseCore/FIRLogger.h>
#import "FIRPhoneAuthCredential_Internal.h"
#import <FirebaseCore/FIRApp.h>
#import "FIRAuthAPNSToken.h"
#import "FIRAuthAPNSTokenManager.h"
#import "FIRAuthAppCredential.h"
#import "FIRAuthAppCredentialManager.h"
#import "FIRAuthGlobalWorkQueue.h"
#import "FIRAuth_Internal.h"
#import "FIRAuthURLPresenter.h"
#import "FIRAuthNotificationManager.h"
#import "FIRAuthErrorUtils.h"
#import "FIRAuthBackend.h"
#import "FIRAuthSettings.h"
#import "FIRAuthWebUtils.h"
#import "FirebaseAuthVersion.h"
#import <FirebaseCore/FIROptions.h>
#import "FIRGetProjectConfigRequest.h"
#import "FIRGetProjectConfigResponse.h"
#import "FIRSendVerificationCodeRequest.h"
#import "FIRSendVerificationCodeResponse.h"
#import "FIRVerifyClientRequest.h"
#import "FIRVerifyClientResponse.h"

NS_ASSUME_NONNULL_BEGIN

/** @typedef FIRReCAPTCHAURLCallBack
    @brief The callback invoked at the end of the flow to fetch a reCAPTCHA URL.
    @param reCAPTCHAURL The reCAPTCHA URL.
    @param error The error that occurred while fetching the reCAPTCHAURL, if any.
 */
typedef void (^FIRReCAPTCHAURLCallBack)(NSURL *_Nullable reCAPTCHAURL, NSError *_Nullable error);

/** @typedef FIRVerifyClientCallback
    @brief The callback invoked at the end of a client verification flow.
    @param appCredential credential that proves the identity of the app during a phone
        authentication flow.
    @param error The error that occurred while verifying the app, if any.
 */
typedef void (^FIRVerifyClientCallback)(FIRAuthAppCredential *_Nullable appCredential,
                                        NSString *_Nullable reCAPTCHAToken,
                                        NSError *_Nullable error);

/** @typedef FIRFetchAuthDomainCallback
    @brief The callback invoked at the end of the flow to fetch the Auth domain.
    @param authDomain The Auth domain.
    @param error The error that occurred while fetching the auth domain, if any.
 */
typedef void (^FIRFetchAuthDomainCallback)(NSString *_Nullable authDomain,
                                           NSError *_Nullable error);

/** @var kauthTypeVerifyApp
    @brief The auth type to be specified in the app verification request.
 */
static NSString *const kAuthTypeVerifyApp = @"verifyApp";

/** @var kReCAPTCHAURLStringFormat
    @brief The format of the URL used to open the reCAPTCHA page during app verification.
 */
NSString *const kReCAPTCHAURLStringFormat = @"https://%@/__/auth/handler?";

@implementation FIRPhoneAuthProvider {

  /** @var _auth
      @brief The auth instance used for verifying the phone number.
   */
  FIRAuth *_auth;

  /** @var _callbackScheme
      @brief The callback URL scheme used for reCAPTCHA fallback.
   */
  NSString *_callbackScheme;
}

/** @fn initWithAuth:
    @brief returns an instance of @c FIRPhoneAuthProvider associated with the provided auth
          instance.
    @return An Instance of @c FIRPhoneAuthProvider.
   */
- (nullable instancetype)initWithAuth:(FIRAuth *)auth {
  self = [super init];
  if (self) {
    _auth = auth;
    _callbackScheme = [[[_auth.app.options.clientID componentsSeparatedByString:@"."]
        reverseObjectEnumerator].allObjects componentsJoinedByString:@"."];
  }
  return self;
}

- (void)verifyPhoneNumber:(NSString *)phoneNumber
               UIDelegate:(nullable id<FIRAuthUIDelegate>)UIDelegate
               completion:(nullable FIRVerificationResultCallback)completion {
  if (![FIRAuthWebUtils isCallbackSchemeRegisteredForCustomURLScheme:_callbackScheme]) {
    [NSException raise:NSInternalInconsistencyException
                format:@"Please register custom URL scheme '%@' in the app's Info.plist file.",
                       _callbackScheme];
  }
  dispatch_async(FIRAuthGlobalWorkQueue(), ^{
    FIRVerificationResultCallback callBackOnMainThread = ^(NSString *_Nullable verificationID,
                                                           NSError *_Nullable error) {
      if (completion) {
        dispatch_async(dispatch_get_main_queue(), ^{
          completion(verificationID, error);
        });
      }
    };
    [self internalVerifyPhoneNumber:phoneNumber
                         UIDelegate:UIDelegate
                         completion:^(NSString *_Nullable verificationID,
                                      NSError *_Nullable error) {
      if (!error) {
        callBackOnMainThread(verificationID, nil);
        return;
      } else {
        callBackOnMainThread(nil, error);
        return;
      }
    }];
  });
}

- (FIRPhoneAuthCredential *)credentialWithVerificationID:(NSString *)verificationID
                                        verificationCode:(NSString *)verificationCode {
  return [[FIRPhoneAuthCredential alloc] initWithProviderID:FIRPhoneAuthProviderID
                                             verificationID:verificationID
                                           verificationCode:verificationCode];
}

+ (instancetype)provider {
  return [[self alloc]initWithAuth:[FIRAuth auth]];
}

+ (instancetype)providerWithAuth:(FIRAuth *)auth {
  return [[self alloc]initWithAuth:auth];
}

#pragma mark - Internal Methods

/** @fn reCAPTCHATokenForURL:error:
    @brief Parses the reCAPTCHA URL and returns the reCAPTCHA token.
    @param URL The url to be parsed for a reCAPTCHA token.
    @param error The error that occurred if any.
    @return The reCAPTCHA token if successful.
 */
- (NSString *)reCAPTCHATokenForURL:(NSURL *)URL error:(NSError **)error {
  NSURLComponents *actualURLComponents = [NSURLComponents componentsWithURL:URL resolvingAgainstBaseURL:NO];
  NSArray<NSURLQueryItem *> *queryItems = [actualURLComponents queryItems];
  NSString *deepLinkURL = [FIRAuthWebUtils queryItemValue:@"deep_link_id" from:queryItems];
  NSData *errorData;
  if (deepLinkURL) {
    actualURLComponents = [NSURLComponents componentsWithString:deepLinkURL];
    queryItems = [actualURLComponents queryItems];
    NSString *recaptchaToken = [FIRAuthWebUtils queryItemValue:@"recaptchaToken" from:queryItems];
    if (recaptchaToken) {
      return recaptchaToken;
    }
    NSString *firebaseError = [FIRAuthWebUtils queryItemValue:@"firebaseError" from:queryItems];
    errorData = [firebaseError dataUsingEncoding:NSUTF8StringEncoding];
  } else {
    errorData = nil;
  }
  NSError *jsonError;
  NSDictionary *errorDict = [NSJSONSerialization JSONObjectWithData:errorData
                                                            options:0
                                                              error:&jsonError];
  if (jsonError) {
    *error = [FIRAuthErrorUtils JSONSerializationErrorWithUnderlyingError:jsonError];
    return nil;
  }
  *error = [FIRAuthErrorUtils URLResponseErrorWithCode:errorDict[@"code"]
                                               message:errorDict[@"message"]];
  if (!*error) {
    NSString *reason;
    if(errorDict[@"code"] && errorDict[@"message"]) {
      reason = [NSString stringWithFormat:@"[%@] - %@",errorDict[@"code"], errorDict[@"message"]];
    } else {
      reason = [NSString stringWithFormat:@"An unknown error occurred with the following "
          "response: %@", deepLinkURL];
    }
    *error = [FIRAuthErrorUtils appVerificationUserInteractionFailureWithReason:reason];
  }
  return nil;
}

/** @fn internalVerifyPhoneNumber:completion:
    @brief Starts the phone number authentication flow by sending a verifcation code to the
        specified phone number.
    @param phoneNumber The phone number to be verified.
    @param completion The callback to be invoked when the verification flow is finished.
 */

- (void)internalVerifyPhoneNumber:(NSString *)phoneNumber
                       UIDelegate:(nullable id<FIRAuthUIDelegate>)UIDelegate
                       completion:(nullable FIRVerificationResultCallback)completion {
  if (!phoneNumber.length) {
    completion(nil, [FIRAuthErrorUtils missingPhoneNumberErrorWithMessage:nil]);
    return;
  }
  [_auth.notificationManager checkNotificationForwardingWithCallback:
      ^(BOOL isNotificationBeingForwarded) {
    if (!isNotificationBeingForwarded) {
      completion(nil, [FIRAuthErrorUtils notificationNotForwardedError]);
      return;
    }
    FIRVerificationResultCallback callback = ^(NSString *_Nullable verificationID,
                                               NSError *_Nullable error) {
      if (completion) {
        completion(verificationID, error);
      }
    };
    [self verifyClientAndSendVerificationCodeToPhoneNumber:phoneNumber
                               retryOnInvalidAppCredential:YES
                                                UIDelegate:UIDelegate
                                                  callback:callback];
  }];
}

/** @fn verifyClientAndSendVerificationCodeToPhoneNumber:retryOnInvalidAppCredential:callback:
    @brief Starts the flow to verify the client via silent push notification.
    @param retryOnInvalidAppCredential Whether of not the flow should be retried if an
        FIRAuthErrorCodeInvalidAppCredential error is returned from the backend.
    @param phoneNumber The phone number to be verified.
    @param callback The callback to be invoked on the global work queue when the flow is
        finished.
 */
- (void)verifyClientAndSendVerificationCodeToPhoneNumber:(NSString *)phoneNumber
                             retryOnInvalidAppCredential:(BOOL)retryOnInvalidAppCredential
                                              UIDelegate:(nullable id<FIRAuthUIDelegate>)UIDelegate
                                                callback:(FIRVerificationResultCallback)callback {
  if (_auth.settings.isAppVerificationDisabledForTesting) {
    FIRSendVerificationCodeRequest *request =
        [[FIRSendVerificationCodeRequest alloc] initWithPhoneNumber:phoneNumber
                                                     appCredential:nil
                                                    reCAPTCHAToken:nil
                                              requestConfiguration:
                                                  _auth.requestConfiguration];
    [FIRAuthBackend sendVerificationCode:request
                                callback:^(FIRSendVerificationCodeResponse *_Nullable response,
                                           NSError *_Nullable error) {
      callback(response.verificationID, error);
    }];
    return;
  }
  [self verifyClientWithUIDelegate:UIDelegate
                        completion:^(FIRAuthAppCredential *_Nullable appCredential,
                                     NSString *_Nullable reCAPTCHAToken,
                                     NSError *_Nullable error) {
    if (error) {
      callback(nil, error);
      return;
    }
    FIRSendVerificationCodeRequest * _Nullable request;
    if (appCredential) {
      request =
          [[FIRSendVerificationCodeRequest alloc]
              initWithPhoneNumber:phoneNumber
                    appCredential:appCredential
                   reCAPTCHAToken:nil
             requestConfiguration:self->_auth.requestConfiguration];
    } else if (reCAPTCHAToken) {
      request =
          [[FIRSendVerificationCodeRequest alloc]
              initWithPhoneNumber:phoneNumber
                    appCredential:nil
                   reCAPTCHAToken:reCAPTCHAToken
             requestConfiguration:self->_auth.requestConfiguration];
    }
    if (request) {
      [FIRAuthBackend sendVerificationCode:request
                                  callback:^(FIRSendVerificationCodeResponse *_Nullable response,
                                             NSError *_Nullable error) {
        if (error) {
          if (error.code == FIRAuthErrorCodeInvalidAppCredential) {
            if (retryOnInvalidAppCredential) {
              [self->_auth.appCredentialManager clearCredential];
              [self verifyClientAndSendVerificationCodeToPhoneNumber:phoneNumber
                                         retryOnInvalidAppCredential:NO
                                                          UIDelegate:UIDelegate
                                                            callback:callback];
              return;
            }
            callback(nil, [FIRAuthErrorUtils unexpectedResponseWithDeserializedResponse:nil
                                                                        underlyingError:error]);
            return;
          }
          callback(nil, error);
          return;
        }
        callback(response.verificationID, nil);
      }];
    }
  }];
}

/** @fn verifyClientWithCompletion:completion:
    @brief Continues the flow to verify the client via silent push notification.
    @param completion The callback to be invoked when the client verification flow is finished.
 */
- (void)verifyClientWithUIDelegate:(nullable id<FIRAuthUIDelegate>)UIDelegate
                        completion:(FIRVerifyClientCallback)completion {
  if (_auth.appCredentialManager.credential) {
    completion(_auth.appCredentialManager.credential, nil, nil);
    return;
  }
  [_auth.tokenManager getTokenWithCallback:^(FIRAuthAPNSToken *_Nullable token,
                                             NSError *_Nullable error) {
    if (!token) {
      [self reCAPTCHAFlowWithUIDelegate:UIDelegate completion:completion];
      return;
    }
    FIRVerifyClientRequest *request =
        [[FIRVerifyClientRequest alloc] initWithAppToken:token.string
                                               isSandbox:token.type == FIRAuthAPNSTokenTypeSandbox
                                    requestConfiguration:self->_auth.requestConfiguration];
    [FIRAuthBackend verifyClient:request callback:^(FIRVerifyClientResponse *_Nullable response,
                                                    NSError *_Nullable error) {
      if (error) {
        NSError *underlyingError = error.userInfo[NSUnderlyingErrorKey];
        BOOL isInvalidAppCredential = error.code == FIRAuthErrorCodeInternalError &&
            underlyingError.code == FIRAuthErrorCodeInvalidAppCredential;
        if (error.code != FIRAuthErrorCodeMissingAppToken && !isInvalidAppCredential) {
          completion(nil, nil, error);
          return;
        } else {
          [self reCAPTCHAFlowWithUIDelegate:UIDelegate completion:completion];
          return;
        }
      }
      NSTimeInterval timeout = [response.suggestedTimeOutDate timeIntervalSinceNow];
      [self->_auth.appCredentialManager
          didStartVerificationWithReceipt:response.receipt
                                  timeout:timeout
                                 callback:^(FIRAuthAppCredential *credential) {
        if (!credential.secret) {
          FIRLogWarning(kFIRLoggerAuth, @"I-AUT000014",
                        @"Failed to receive remote notification to verify app identity within "
                        @"%.0f second(s)", timeout);
        }
        completion(credential, nil, nil);
      }];
    }];
  }];
}

- (void)reCAPTCHAFlowWithUIDelegate:(nullable id<FIRAuthUIDelegate>)UIDelegate
                         completion:(FIRVerifyClientCallback)completion {
  NSString *eventID = [FIRAuthWebUtils randomStringWithLength:10];
  [self reCAPTCHAURLWithEventID:eventID completion:^(NSURL *_Nullable reCAPTCHAURL,
                                                     NSError *_Nullable error) {
    if (error) {
      completion(nil, nil, error);
      return;
    }
    FIRAuthURLCallbackMatcher callbackMatcher = ^BOOL(NSURL *_Nullable callbackURL) {
      return [FIRAuthWebUtils isExpectedCallbackURL:callbackURL
                                            eventID:eventID
                                           authType:kAuthTypeVerifyApp
                                     callbackScheme:self->_callbackScheme];
    };
    [self->_auth.authURLPresenter presentURL:reCAPTCHAURL
                                  UIDelegate:UIDelegate
                             callbackMatcher:callbackMatcher
                                  completion:^(NSURL *_Nullable callbackURL,
                                               NSError *_Nullable error) {
      if (error) {
        completion(nil, nil, error);
        return;
      }
      NSError *reCAPTCHAError;
      NSString *reCAPTCHAToken = [self reCAPTCHATokenForURL:callbackURL error:&reCAPTCHAError];
      if (!reCAPTCHAToken) {
        completion(nil, nil, reCAPTCHAError);
        return;
      } else {
        completion(nil, reCAPTCHAToken, nil);
        return;
      }
    }];
  }];
}

/** @fn reCAPTCHAURLWithEventID:completion:
    @brief Constructs a URL used for opening a reCAPTCHA app verification flow using a given event
        ID.
    @param eventID The event ID used for this purpose.
    @param completion The callback invoked after the URL has been constructed or an error
        has been encountered.
 */
- (void)reCAPTCHAURLWithEventID:(NSString *)eventID completion:(FIRReCAPTCHAURLCallBack)completion {
  [FIRAuthWebUtils fetchAuthDomainWithRequestConfiguration:_auth.requestConfiguration
                                                completion:^(NSString *_Nullable authDomain,
                                                             NSError *_Nullable error) {
    if (error) {
      if (completion) {
        completion(nil, error);
        return;
      }
    }
    NSString *bundleID = [NSBundle mainBundle].bundleIdentifier;
    NSString *clientID = self->_auth.app.options.clientID;
    NSString *apiKey = self->_auth.requestConfiguration.APIKey;
    NSMutableArray<NSURLQueryItem *> *queryItems = [@[
      [NSURLQueryItem queryItemWithName:@"apiKey" value:apiKey],
      [NSURLQueryItem queryItemWithName:@"authType" value:kAuthTypeVerifyApp],
      [NSURLQueryItem queryItemWithName:@"ibi" value:bundleID ?: @""],
      [NSURLQueryItem queryItemWithName:@"clientId" value:clientID],
      [NSURLQueryItem queryItemWithName:@"v" value:[FIRAuthBackend authUserAgent]],
      [NSURLQueryItem queryItemWithName:@"eventId" value:eventID]
      ] mutableCopy
    ];

    if (self->_auth.requestConfiguration.languageCode) {
      [queryItems addObject:[NSURLQueryItem queryItemWithName:@"hl"value:
                             self->_auth.requestConfiguration.languageCode]];
    }
    NSURLComponents *components = [[NSURLComponents alloc] initWithString:
      [NSString stringWithFormat:kReCAPTCHAURLStringFormat, authDomain]];
    [components setQueryItems:queryItems];
    if (completion) {
      completion([components URL], nil);
    }
  }];
}

@end

NS_ASSUME_NONNULL_END
