// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOplAKiaMt2m23hUv2u6JQNXz1_yNPm5I",
  authDomain: "gpt-powered-netflix-24.firebaseapp.com",
  projectId: "gpt-powered-netflix-24",
  storageBucket: "gpt-powered-netflix-24.appspot.com",
  messagingSenderId: "1083286416643",
  appId: "1:1083286416643:web:879574a5277277082f4d36",
  measurementId: "G-72D3SRTMEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();