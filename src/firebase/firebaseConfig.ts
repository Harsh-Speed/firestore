// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaxeKZ-_tVeYFh93sCttlzJ_Z8uRf2qEE",
  authDomain: "speed-firestore.firebaseapp.com",
  projectId: "speed-firestore",
  storageBucket: "speed-firestore.firebasestorage.app",
  messagingSenderId: "983509720450",
  appId: "1:983509720450:web:2cf3d522fbdc3b370a039b",
  measurementId: "G-HD077R5TY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
