import React, {useState} from 'react';
import {uuid} from 'uuid';

function App() {

  const [users, setUsers] = useState();

  const addUser = user => {
    const newUser = {
      id: uuid.v4(),
      name: user.name,
      email: user.email,
      role: user.role
    }
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
