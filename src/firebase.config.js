// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzcIYS7HviOiTQh4eKGzWgE3cCAdYh6o4",
  authDomain: "house-marketplace-42347.firebaseapp.com",
  projectId: "house-marketplace-42347",
  storageBucket: "house-marketplace-42347.appspot.com",
  messagingSenderId: "879950055835",
  appId: "1:879950055835:web:3c7528f2c35e1d6d57393e",
  measurementId: "G-S131YFMF43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore()