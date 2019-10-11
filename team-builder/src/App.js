import React, {useState} from 'react';
import {v4} from 'uuid';
import UserForm from './components/UserForm';
import Users from './components/Users';


function App() {

  const [users, setUsers] = useState([
    // {
    //   id: v4(),
    //   name: "Sample User",
    //   email: "a@be.com",
    //   role: "Lab Minion"
    // }
  ]);

  const addUser = user => {
    const newUser = {
      id: v4(),
      name: user.name,
      email: user.email,
      role: user.role
    }
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <h1>User List</h1>
      <UserForm addUserCB={addUser} />
      
      <Users userList={users} />

    </div>
  );
}

export default App;
