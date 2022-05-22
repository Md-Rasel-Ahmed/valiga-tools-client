// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHTfYI4FSRVhzFHgExCD6v4aRJ7Tm5vbA",
  authDomain: "valiga-hardware.firebaseapp.com",
  projectId: "valiga-hardware",
  storageBucket: "valiga-hardware.appspot.com",
  messagingSenderId: "1060092597434",
  appId: "1:1060092597434:web:727c1f01e3909d0db49e83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
