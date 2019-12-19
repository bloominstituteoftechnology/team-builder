import React, { useState } from "react";
import "./App.css";

import MemberCard from "./card";
import Form from "./form";

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Sample Card Name",
      email: "Sample.Card@Email",
      role: "Sample Role Developer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="form">
      <h1>Team Builder</h1>
      <h2>Build Your Team</h2>
      <h3>Navigate Your Distributed Team All in One Place</h3>
      <Form addNewMember={addNewMember} />
      <MemberCard member={member} />
    </div>
  );
}

export default App;
