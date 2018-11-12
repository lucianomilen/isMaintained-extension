// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Standard Google Universal Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here

ga('create', 'UA-129010212-1', 'auto'); // Enter your GA identifier
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');

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
    if (changeInfo.status === "complete" && tabInfo.url.match(`github\.com\/[^\n\r\/]+\/[^\n\r\/]+`)) {
        let messageSent = false
        const url = tabInfo.url.split('/');
        const repository = `${url[3]}/${url[4]}`
        getRepositoryInfo(repository).then(result => {
            if(!messageSent){
                chrome.tabs.sendMessage(tabId, result, (response) => {
                    ga('send', 'event', response);
                });
                messageSent = true
            }
        })
    }
}

chrome.tabs.onUpdated.addListener(handleUpdated);