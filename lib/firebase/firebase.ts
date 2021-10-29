import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

if (!getApps.length) {
  initializeApp({
    apiKey: "AIzaSyDDT5wWsfi6REi0ZQkxOQcRJVWGpo3dvD0",
    authDomain: "reviewurcode.firebaseapp.com",
    projectId: "reviewurcode",
    storageBucket: "reviewurcode.appspot.com",
    messagingSenderId: "844904836127",
    appId: "1:844904836127:web:51575813301c1b01e1b92a",
    measurementId: "G-4S48QKTQGN",
  });
}
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
