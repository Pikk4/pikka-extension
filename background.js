console.log("init back ground");

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log("change", changes, namespace);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  console.log(sender);
  sendResponse(message);
});
