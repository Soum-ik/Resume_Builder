// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmyD6LkC4I3NaPY6E7gJOsX4h0zmigtyc",
  authDomain: "developer-9o9.firebaseapp.com",
  databaseURL:
    "https://developer-9o9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "developer-9o9",
  storageBucket: "developer-9o9.appspot.com",
  messagingSenderId: "563748231896",
  appId: "1:563748231896:web:12dccaa8e6676997e0d5ad",
  measurementId: "G-55TQR1KZ43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
