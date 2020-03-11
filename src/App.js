import React, { useState, useEffect } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './App.css';
import './css/index.css';

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setData([...data, user]);
    setUser({ name: '', email: '', role: '' });
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  return (
    <div className="App">
      <Form user={user}
        handleSubmit={event => handleSubmit(event)} handleChange={event => handleChange(event)} />

      <List user={user}
        data={data}
      />
    </div>
  );
}

export default App;

