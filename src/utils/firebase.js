// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV_NEZx0EHQMr92lmfGp0IVuMqGWjqt6k",
  authDomain: "gpt-powered-netflix.firebaseapp.com",
  projectId: "gpt-powered-netflix",
  storageBucket: "gpt-powered-netflix.appspot.com",
  messagingSenderId: "364780564925",
  appId: "1:364780564925:web:ef23957ccc80f3f8a362d4",
  measurementId: "G-FKYB0FQBKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();