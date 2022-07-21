import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5ARflHqyZWs85fWsYRZhaxpuvDTxSYCU",
  authDomain: "reactjscoder-89b7b.firebaseapp.com",
  projectId: "reactjscoder-89b7b",
  storageBucket: "reactjscoder-89b7b.appspot.com",
  messagingSenderId: "575802622142",
  appId: "1:575802622142:web:002f8f7dadabfba8f19eef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);