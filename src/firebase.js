// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCL3kfC4qKrv82iXBl5JKTgRxO1t7Y1-I",
  authDomain: "ecommerce-6f8bc.firebaseapp.com",
  projectId: "ecommerce-6f8bc",
  storageBucket: "ecommerce-6f8bc.appspot.com", // fix typo: .firebasestorage.app -> .appspot.com
  messagingSenderId: "64976034462",
  appId: "1:64976034462:web:c8a9d2952e4220475db98f",
  measurementId: "G-0NJN6E17QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Authentication
export const auth = getAuth(app);
