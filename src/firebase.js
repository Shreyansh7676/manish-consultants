// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,

  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,

  projectId: "consultant-manish",

  storageBucket: "consultant-manish.appspot.com",

  messagingSenderId: "427996513361",

  appId: "1:427996513361:web:164ff96676d553d53a2470"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}