import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <h1>Firestore CRUD</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
