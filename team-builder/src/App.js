import React, { useState } from "react";
import "./App.css";

import MemberCard from "./components/Card"
import Form from "./components/Form";

function App() {
  const [member, setMember] = useState([])

  const addNewMember = mem => {
    const newMember = {
      id: Date.now(),
      name: mem.name,
      email: mem.email,
      role: mem.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="container">
      <h1 className="header">Build Your Team</h1>
      <div className="form">
        <Form addNewMember={addNewMember} />
        <MemberCard member={member} />
      </div>
    </div>
  );
}

export default App;