//
//  counter.m
//  sliderApp
//
//  Created by Lisbaldy de Jesus on 15/07/2024.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(printCount:(RCTResponseSenderBlock)callback)

@end
