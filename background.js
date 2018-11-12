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


function ensureSendMessage(tabId, message, callback) {
    chrome.tabs.sendMessage(tabId, message, function (response) {
        if (response) {
            chrome.tabs.sendMessage(tabId, message, callback);
        } else {
            chrome.tabs.executeScript(tabId, {file: "jquery-3.3.1.min.js"}, function () {
                chrome.tabs.executeScript(tabId, {file: "app.js"}, function () {
                    chrome.tabs.sendMessage(tabId, message, callback);
                });
            });
        }
    });
}


function getRepositoryInfo(repository) {
    return window.fetch(`https://api.github.com/repos/${repository}`)
        .then(result => result.json())
}

function handleUpdated(tabId, changeInfo, tabInfo) {
    if (tabInfo.status === "complete" && tabInfo.url.match(`github\.com\/[a-z]+\/[a-z]+`)) {
        const url = tabInfo.url.split('/');
        const repository = `${url[3]}/${url[4]}`
        getRepositoryInfo(repository).then(result => {
            chrome.tabs.sendMessage(tabId, result);
        })
    }
}

chrome.tabs.onUpdated.addListener(handleUpdated);