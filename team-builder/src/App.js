import React, { useState } from 'react';
import Form from "./Form"

import './App.css';

function App() {
  const[teamMembers, setTeamMembers] = useState([]);
  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      
    </div>
  );
}

export default App;
