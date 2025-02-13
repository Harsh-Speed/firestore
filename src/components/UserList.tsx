import { useQuery, useQueryClient } from "@tanstack/react-query";
import { subscribeToUsers, updateUser, deleteUser } from "../firebase/firestore";
import { useState, useEffect } from "react";

const UserList = () => {
  const queryClient = useQueryClient();
  const [users, setUsers] = useState<{ id: string; name: string; age: number }[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  // Fetch real-time data using Firestore's onSnapshot
  useEffect(() => {
    const unsubscribe = subscribeToUsers((data) => {
      setUsers(data);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleUpdate = async (id: string) => {
    if (editName && editAge) {
      await updateUser(id, editName, parseInt(editAge));
      queryClient.invalidateQueries(["users"]); // Refresh data
      setEditId(null);
      setEditName("");
      setEditAge("");
    }
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    queryClient.invalidateQueries(["users"]); // Refresh data
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {editId === user.id ? (
            <>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
              <input type="number" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
              <button onClick={() => handleUpdate(user.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {user.name} - {user.age} years old
              <button onClick={() => { setEditId(user.id); setEditName(user.name); setEditAge(user.age.toString()); }}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
