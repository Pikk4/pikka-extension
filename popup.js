const btn = document.getElementById("changeColor");




btn.addEventListener("click", async () => {

  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //
  // await chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   func: () => {
  //     console.log("enter", chrome.storage);
  //     chrome.storage.sync.get("color", ({ color }) => {
  //       console.log("enter", color);
  //       document.body.style.backgroundColor = color;
  //     });
  //   },
  // });
});
