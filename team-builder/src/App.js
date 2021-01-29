
import React, { useState } from 'react';
import Form from "./Form"


import './App.css';

function App() {
  const[teamMembers, setTeamMembers] = useState([]);

  const addNewEmployee = (formData) => {
    const newEmployee = {
      name: formData.name,

      email: formData.email,

      roles: formData.roles
    }
    setTeamMembers([...teamMembers, newEmployee]);
  }
  return (
    <div className="App">
      <h1 style={{color: "white"}}>Team Member List</h1>
      <Form teamMembers={teamMembers} addNewEmployee={addNewEmployee}  />

    </div>
  );
}

export default App;