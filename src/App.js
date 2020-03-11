import React, { useState } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import './App.css';

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Form user={user} />
      <List />
    </div>
  );
}

export default App;
