// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/firestorage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-v1-46e5c.firebaseapp.com",
  projectId: "twitter-clone-v1-46e5c",
  storageBucket: "twitter-clone-v1-46e5c.appspot.com",
  messagingSenderId: "1032942796533",
  appId: "1:1032942796533:web:a4efcf746b5772f0d7cfbc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
