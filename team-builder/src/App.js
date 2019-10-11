import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { notEqual } from 'assert';
import MemberForm from "./Components/MemberForm";
import Members from "./Components/member";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Ian",
      role: "Full Stack Developer",
      email: "ian@spacepirtelabs.com"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };

    setMembers([...members, newMember]);

  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addMemberFn={addMember} />
      <Members memberList={members} />
    </div>
  );
}

export default App;