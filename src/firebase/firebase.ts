import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey:process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "terushi-portfolio",
  storageBucket: "terushi-portfolio.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const db=getFirestore(app);