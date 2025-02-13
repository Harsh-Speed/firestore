import { useState } from "react";
import { addUser, getUsers } from "../firebase/firestore";

const AddUser:React.FC<any> = ({users,setUsers}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age) {
      await addUser(name, parseInt(age));
      setName("");
      setAge("");
      console.log("sucess")
      setUsers(await getUsers());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
