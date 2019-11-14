import React, { useState } from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);

  const addMember = (event, name, email, role) => {
    event.preventDefault();
  
    const member = {
      id: Date.now(),
      name,
      email,
      role,
    }

    setMembers([...members, member]);
  };

  return (
    <div className = "Team">
      <h1>Team</h1>
      <Form addMember = {addMember} />
      <TeamList members = {members} />
    </div>
  )
}

export default App