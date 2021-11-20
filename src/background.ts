import { initializeApp } from "firebase/app";
import {} from "firebase/functions";


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

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  console.log(sender);
  sendResponse(message);
});
