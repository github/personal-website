#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "FIRActionCodeSettings.h"
#import "FIRAdditionalUserInfo.h"
#import "FIRAuth.h"
#import "FIRAuthAPNSTokenType.h"
#import "FIRAuthCredential.h"
#import "FIRAuthDataResult.h"
#import "FIRAuthErrors.h"
#import "FIRAuthSettings.h"
#import "FIRAuthTokenResult.h"
#import "FIRAuthUIDelegate.h"
#import "FirebaseAuth.h"
#import "FirebaseAuthVersion.h"
#import "FIREmailAuthProvider.h"
#import "FIRFacebookAuthProvider.h"
#import "FIRFederatedAuthProvider.h"
#import "FIRGameCenterAuthProvider.h"
#import "FIRGitHubAuthProvider.h"
#import "FIRGoogleAuthProvider.h"
#import "FIROAuthCredential.h"
#import "FIROAuthProvider.h"
#import "FIRPhoneAuthCredential.h"
#import "FIRPhoneAuthProvider.h"
#import "FIRTwitterAuthProvider.h"
#import "FIRUser.h"
#import "FIRUserInfo.h"
#import "FIRUserMetadata.h"

FOUNDATION_EXPORT double FirebaseAuthVersionNumber;
FOUNDATION_EXPORT const unsigned char FirebaseAuthVersionString[];

