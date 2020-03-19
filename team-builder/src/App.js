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

  return (
    <div className="App">
      <Form addMember={addMember} />
      <Card teamMembers={teamMembers} />
    </div>
  );
}

export default App;
