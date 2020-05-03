import React, { useState } from 'react';
import './App.css';
import MemberForm from "./form"
import MemberCard from './member';

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: "Keng Thao",
    email: "doodle@hp.com",
    role: "frontend engineer"
  }])

  const addNewMember = member => {
    const addMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, addMember])
    
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <MemberCard members={members} />
    </div>
  );
}

export default App;
