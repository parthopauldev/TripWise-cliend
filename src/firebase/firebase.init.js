// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOVMfRfgblbwQSZQdSmwLrVjk8O5bvOw",
  authDomain: "tripwise-auth-ca33a.firebaseapp.com",
  projectId: "tripwise-auth-ca33a",
  storageBucket: "tripwise-auth-ca33a.firebasestorage.app",
  messagingSenderId: "818375953151",
  appId: "1:818375953151:web:30e66120770bc8feaadaca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
