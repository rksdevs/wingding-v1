// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjSxOYjQczkEfnp2G_HBvi6ieFuowVkug",
  authDomain: "wingding-development-dbc89.firebaseapp.com",
  projectId: "wingding-development-dbc89",
  storageBucket: "wingding-development-dbc89.appspot.com",
  messagingSenderId: "155918374038",
  appId: "1:155918374038:web:48adc7e1988251d0dfdeb7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
