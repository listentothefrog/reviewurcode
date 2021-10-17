import firebaseConfig from "./firebaseConfig";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

if (!getApps.length) {
  initializeApp(firebaseConfig);
}
export const auth = getAuth();
export const db = getFirestore();
