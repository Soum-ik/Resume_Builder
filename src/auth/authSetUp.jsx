// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSENNEOO2MOk7VxVr2KM22NFSSkYjBulc",
  authDomain: "resume-21974.firebaseapp.com",
  projectId: "resume-21974",
  storageBucket: "resume-21974.appspot.com",
  messagingSenderId: "293671102421",
  appId: "1:293671102421:web:2705d235270eb378493f5c",
  measurementId: "G-WFF27D4GGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);