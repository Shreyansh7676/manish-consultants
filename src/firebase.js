// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1YyCccWtNSQH3RD6YGVWCGZxIi4AKmcI",
  authDomain: "email-auth-jeenotes.firebaseapp.com",
  projectId: "email-auth-jeenotes",
  storageBucket: "email-auth-jeenotes.appspot.com",
  messagingSenderId: "863378699929",
  appId: "1:863378699929:web:6142ed4a565d93e744aa08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}