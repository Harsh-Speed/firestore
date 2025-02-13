import { useState, useEffect } from "react";
import { getUsers, updateUser, deleteUser } from "../firebase/firestore";
import AddUser from "./AddUser";

const UserList = () => {
  const [users, setUsers] = useState<any>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleUpdate = async (id: string) => {
    if (editName && editAge) {
      await updateUser(id, editName, parseInt(editAge));
      setUsers(await getUsers());
      setEditId(null);
      setEditName("");
      setEditAge("");
    }
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUsers(await getUsers());
  };

  return (
    <>
    <AddUser users={users} setUsers={setUsers} />
    <ul>
      {users.map((user:any) => (
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
    </>
  );
};

export default UserList;
