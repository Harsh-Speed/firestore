import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import app from "./firebaseConfig";

// Initialize Firestore
const db = getFirestore(app);

// Add a new user
export const addUser = async (name: string, age: number) => {
  try {
    await addDoc(collection(db, "test"), { name, age });
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};

// Get all users
export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "test"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update a user
export const updateUser = async (id: string, name: string, age: number) => {
  try {
    const userRef = doc(db, "test", id);
    await updateDoc(userRef, { name, age });
    console.log("User updated!");
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

// Delete a user
export const deleteUser = async (id: string) => {
  try {
    await deleteDoc(doc(db, "test", id));
    console.log("User deleted!");
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
};

export default db;
