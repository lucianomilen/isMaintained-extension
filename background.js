// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(() => {


    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: 'github.com/'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });


function ensureSendMessage(tabId, message, callback){
    chrome.tabs.sendMessage(tabId, {ping: true}, function(response){
        if(response) {
            chrome.tabs.sendMessage(tabId, message, callback);
        } else {
            chrome.tabs.executeScript(tabId, {file: "jquery-3.3.1.min.js"}, function(){
            chrome.tabs.executeScript(tabId, {file: "app.js"}, function(){
                chrome.tabs.sendMessage(tabId, message, callback);
            });
            });
        }
    });
}

chrome.tabs.query({url: "https://github.com/*"}, function(tabs) {
    ensureSendMessage(tabs[0].id, {greeting: "hello"});
});