import { useState, useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import Auth from "./components/Auth";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged(setUser); // 🔹 Automatically update user state
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>Firestore CRUD</h1>
          <button onClick={() => auth.signOut()}>Logout</button> {/* 🔹 Logout button */}
          <AddUser />
          <UserList />
        </>
      ) : (
        <Auth /> // 🔹 Show Auth Component if no user
      )}
    </div>
  );
}

export default App;
