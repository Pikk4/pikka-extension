import { ITask } from "@interface/task-interface";
import { StoreTask } from "./enum/store-task-enum";

const URL_FUNCTION = "https://us-central1-pika-4af18.cloudfunctions.net/";

chrome.runtime.onMessage.addListener((message: ITask<any>, sender, sendResponse) => {
  switch (message.type) {
    case StoreTask.ADD_PRODUCT:
      fetch(new URL("addProduct", URL_FUNCTION).href, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ store: message.store, product: message.data }),
      }).finally(() => {
        sendResponse("complete");
      });
      break;
    case StoreTask.GET_PRODUCT_DATA:
      fetch(new URL("getProductData", URL_FUNCTION).href, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ store: message.store, product: message.data }),
      })
        .then((data) => data.json())
        .then((data) => {
          sendResponse(data);
        });
      break;
  }
  return true;
});
