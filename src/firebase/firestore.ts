import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import app from "./firebaseConfig";

// Initialize Firestore
const db = getFirestore(app);

// Function to get real-time Firestore data
export const subscribeToUsers = (callback: (data: any[]) => void) => {
  return onSnapshot(collection(db, "users"), (snapshot) => {
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(users);
  });
};

// Add user
export const addUser = async (name: string, age: number) => {
  await addDoc(collection(db, "users"), { name, age });
};

// Update user
export const updateUser = async (id: string, name: string, age: number) => {
  await updateDoc(doc(db, "users", id), { name, age });
};

// Delete user
export const deleteUser = async (id: string) => {
  await deleteDoc(doc(db, "users", id));
};
