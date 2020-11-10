import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Users from './components/Users';

function App() {
  
  const [users, setUsers] = useState([]);

  const addNewUser = (props) => {
    const newUser = {
      name: props.name,
      email: props.email,
      role: props.role,
    };
    setUsers([...users, newUser]);
  }

  return (

    <div>
      <div>
        <h1>Team Builder</h1>
      </div>
      <div className='Form'>
        <Form newUser = { addNewUser } />
      </div>
      <div className='App'>
        <Users users={ users } />
      </div>
    </div>
  );
}

export default App;
