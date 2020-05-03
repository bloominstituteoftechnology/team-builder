import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from "./member"
import Form from "./form"

function App() {
  const [members, setMembers] = useState([{
    id: 1,
    name: "Keng Thao",
    email: "doodle@hp.com",
    role: "frontend engineer"
  }])
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form />
      <Member member={members} />
    </div>
  );
}

export default App;
