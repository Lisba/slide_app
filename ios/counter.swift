//
//  counter.swift
//  sliderApp
//
//  Created by Lisbaldy de Jesus on 14/07/2024.
//

import Foundation

@objc(Counter)
class Counter: NSObject {

    private var count = 0

    @objc
    func increment() {
      count += 1;
    }
    
    @objc
    func printCount(_ callback: RCTResponseSenderBlock) {
      callback([count]);
    }
  
    @objc
    func requiresMainQueueSetup() -> Bool {
      return true;
    }
  
    @objc
    func constantsToExport() -> [String: Any] {
      return ["initialCount": 0];
    }
    
}
