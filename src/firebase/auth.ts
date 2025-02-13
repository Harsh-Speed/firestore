import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

// Register new user
export const registerUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// Login user
export const loginUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

// Logout user
export const logoutUser = async () => {
  await signOut(auth);
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
