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
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.match(/github.com/)) {
      chrome.pageAction.show(tabId);
    } else {
      chrome.pageAction.hide(tabId);
    }
  });
});

const firebaseConfig = {
  apiKey: `AAAA5vjQHxs:APA91bHUflcKyy9kkLxu7Q--trmLWgp8mP6QAvuCpqM5ffEmkVKF6kSRRiKhz4bJENwFL2UvZHCaveWGH7gtHrA_3Gp03ztcOgiSoJeZ4pW06HeJttTbPEuL515_enXK25fSd2QpvTKW`,
  authDomain: `992016867099.firebaseapp.com`,
  databaseURL: `https://level-maintenance-plugin.firebaseio.com`,
  storageBucket: `level-maintenance-plugin.appspot.com`
}

// firebase init
firebase.initializeApp(firebaseConfig)

function getMaintenanceLevel(fullName) {
  const [owner, name] = fullName.split(`/`)
  return new Promise(resolve => {
    firebase
      .database()
      .ref(`/projects`)
      .once(`value`)
      .then(res => {
        const projectOwner = res.val()[owner]
        projectOwner
          ? resolve(projectOwner[name])
          : resolve(null)
      })
  })
}

function getRepositoryInfo(repository) {
  return window.fetch(`https://api.github.com/repos/${repository}`)
  .then(result => result.json())
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete" && tabInfo.url.match(`github\.com\/[^\n\r\/]+\/[^\n\r\/]+`)) {
    const url = tabInfo.url.split('/');
    const repository = `${url[3]}/${url[4]}`
    getRepositoryInfo(repository).then(({ full_name }) => {
      getMaintenanceLevel(full_name).then(result => {
        chrome.tabs.sendMessage(tabId, { maintenanceInfo: result })
      })
    })
  }
}

function handleMessage({ event }) {
  if (event.type === 'click') {
    ga('send', 'event', { event })
  }
  return false
}

chrome.tabs.onUpdated.addListener(handleUpdated)
chrome.runtime.onMessage.addListener(handleMessage)
