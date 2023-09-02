// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs66Cnx6XBlCqSfP4dWUxAZ_8WDkiiXEc",
  authDomain: "food-recipe-app-7c8b0.firebaseapp.com",
  projectId: "food-recipe-app-7c8b0",
  storageBucket: "food-recipe-app-7c8b0.appspot.com",
  messagingSenderId: "174675418770",
  appId: "1:174675418770:web:8bcf93f7993c691563904b",
  measurementId: "G-Z2524Z3WFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);
const storage = getStorage(app);


export {db, auth,storage };