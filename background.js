chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("profi.ru")) {
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        Id: 1,
      });
    }
  });
  