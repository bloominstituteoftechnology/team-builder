import React, { useState } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './App.css';

const data = [];
function App() {
  const handleSubmit = event => {
    event.preventDefault();
    // data[...user, user];
    // setUser({ name: '', email: '', role: '' });
    console.log(user);
  }

  const handleChange = event => {
    console.log(event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Form user={user} handleSubmit={event => handleSubmit(event)} handleChange={event => handleChange(event)} />
      <List user={user} />
    </div>
  );
}

export default App;
