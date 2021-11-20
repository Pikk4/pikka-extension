import { initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";
import { connectDatabaseEmulator, getDatabase, ref, get } from "firebase/database";

import { ITask } from "@interface/task-interface";
import { StoreTask } from "./enum/store-task-enum";

const app = initializeApp({
  apiKey: "AIzaSyB0Z4GMb_mHSL582D3dU0AFE0wsfaK8zb8",
  authDomain: "pika-4af18.firebaseapp.com",
  databaseURL: "https://pika-4af18.firebaseio.com",
  projectId: "pika-4af18",
  storageBucket: "pika-4af18.appspot.com",
  messagingSenderId: "197084647841",
  appId: "1:197084647841:web:167611e1542196c3543be0",
  measurementId: "G-L0BSEVKF74",
});
const functions = getFunctions(app);
const db = getDatabase(app);

chrome.management.getSelf().then((extensionData) => {
  if (extensionData.installType === "development") {
    connectFunctionsEmulator(functions, "localhost", 5001);
    connectDatabaseEmulator(db, "localhost", 9000);
  }
});

chrome.runtime.onMessage.addListener((message: ITask<any>, sender, sendResponse) => {
  switch (message.type) {
    case StoreTask.ADD_PRODUCT:
      httpsCallable(functions, "addProduct")({ store: message.store, product: message.data });
      break;
    case StoreTask.GET_PRODUCT_DATA:
      const reference = ref(db, `prices/${message.store}/${message.data}`);
      get(reference).then((snapshot) => {
        if (snapshot.exists()) {
          sendResponse(snapshot.val());
        } else {
          sendResponse(null);
        }
      });
      return true;
  }
});
