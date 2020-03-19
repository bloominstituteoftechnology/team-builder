import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  //Initial value
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Jose Sustaita",
      email: "josesustaita70@gmail.com",
      role: "Full Stack"
    }
  ]);

  // Applying card to new member
  const addMember = card => {
    const newCard = {
      id: Date.now(),
      name: card.name,
      email: card.email,
      role: card.role
    };
    setTeamMembers([...teamMembers, newCard]);
  };
  const formStyle = {
    textAlign: "center"
  };

  return (
    <div style={formStyle}>
      <h1>Build your team!</h1>
      <Form addMember={addMember} />
      <Card teamMembers={teamMembers} />
    </div>
  );
}

export default App;
