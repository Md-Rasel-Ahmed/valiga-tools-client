// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw9S27Fmgwv4SgkOhp3-decAQ5ZL4hhgg",
  authDomain: "final-project-a7f75.firebaseapp.com",
  projectId: "final-project-a7f75",
  storageBucket: "final-project-a7f75.appspot.com",
  messagingSenderId: "273980413528",
  appId: "1:273980413528:web:1b2a2ee79a5d6a06badc2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
