import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Names from "./components/Names";

function App() {
  const [teamNames, setTeamNames] = useState([])

  const addNewName = info => {
    const newName = {
      name: info.name,
      email: info.email,
      role: info.role
    }

    setTeamNames([...teamNames, newName]);
  };

  return (
    <div>
      <Form addNewName={addNewName} />
      <Names teamNames={teamNames} />
    </div>
  );
}

export default App;