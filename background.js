
(function() {

  var sendMessageToContent = function() {
    // send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: 'focus'}, function(response) {
        if (!response) {
          console.log("should have worked");
        }
      });
    });

  }

  chrome.contextMenus.create({
    title: "Focus",
    onclick: sendMessageToContent
  });


})();
