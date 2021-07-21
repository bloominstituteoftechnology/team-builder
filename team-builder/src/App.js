import React, { useState } from 'react';
import './App.css';


import TeamForm from './components/Form';
import Team from './components/Team';


export default function App() {
  const [members, setMembers] = useState([]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>-The Squad-</h1>
      <TeamForm addMemberFn={addMember} />
      <Team teamList={members} />
    </div>
  );
}