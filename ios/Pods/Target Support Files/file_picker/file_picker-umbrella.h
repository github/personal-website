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

#import "FilePickerPlugin.h"
#import "FileUtils.h"
#import "ImageUtils.h"

FOUNDATION_EXPORT double file_pickerVersionNumber;
FOUNDATION_EXPORT const unsigned char file_pickerVersionString[];

