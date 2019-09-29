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

#import "FirebaseCorePlugin.h"
#import "UserAgent.h"

FOUNDATION_EXPORT double firebase_coreVersionNumber;
FOUNDATION_EXPORT const unsigned char firebase_coreVersionString[];

