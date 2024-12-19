import React, {useState} from "react";
import './App.css';
import {useUsers} from "./hooks/useUsers";
import {User} from "./types/User";

function App() {
  const emptyUserData: User = {id: '', firstName: "", lastName: ""}

  const [newUser, setNewUser] = useState<User>(emptyUserData);

  const {
    users,
    isUsersLoading,
    createUser,
    isCreatingUser,
    isUsersRefetching
  } = useUsers();

  const handleAddUser = () => {
    createUser(newUser);
    setNewUser(emptyUserData);
  };

  return (
    <div className="App">
      <div>
        <h1>Add New User Form</h1>
        <input
          type="text"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
        />
        <button onClick={handleAddUser} disabled={isCreatingUser}>
          {isCreatingUser ? "Adding..." : "Add User"}
        </button>
      </div>
      {isUsersLoading || isUsersRefetching ? (
        <span>Loading users...</span>
      ) : (
        <div>
          <h1>Users List</h1>
          <div>
            {users?.map((user) => (
              <div key={user.id}>{`${user.firstName} ${user.lastName}`}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
