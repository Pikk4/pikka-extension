import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const addProduct = functions.https.onRequest((req, res) => {
  const {store, product} = req.body;
  admin.database().ref("store").child(store).child(product).set(product).then(() => {
    res.status(200).end()
  })
})
