import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBaxeKZ-_tVeYFh93sCttlzJ_Z8uRf2qEE",
  authDomain: "speed-firestore.firebaseapp.com",
  projectId: "speed-firestore",
  storageBucket: "speed-firestore.appspot.com", // Correct storage bucket format
  messagingSenderId: "983509720450",
  appId: "1:983509720450:web:2cf3d522fbdc3b370a039b",
  measurementId: "G-HD077R5TY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app;