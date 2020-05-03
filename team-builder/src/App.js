import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from "./member"
import Form from "./form"

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
      name: member.name
    }
    setMembers([...member, addMember])
    
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form />
      <MemberForm member={members} />
    </div>
  );
}

export default App;
