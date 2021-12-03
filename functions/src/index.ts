import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as corsModule from "cors";
const cors = corsModule({ origin: true });

admin.initializeApp();

export const addProduct = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { store, product } = req.body;
    admin
      .database()
      .ref("store")
      .child(store)
      .child(product)
      .set(product)
      .then(() => {
        res.status(200).end();
      });
  });
});

export const getProductData = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    console.log('get data:', req.get('origin'), req.get('host'));
    const { store, product } = req.body;
    const snap = await admin.database().ref("prices").child(store).child(product).get();
    const value = snap.val();
    res.json(value);
  });
});
