chrome.browserAction.onClicked.addListener(function(tab) {
  console.log(`${tab.url} is Red!`);
  chrome.tabs.executeScript({
    code : 'document.body.style.backgroundColor="red"'
  });
});