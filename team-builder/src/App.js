import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import TeamMembers from "./TeamMembers";
import NewMember from "./NewMember";

function App() {
  const [members, setMember] = useState([{}]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember]);
  };

  return (
    <div>
      <h1>Team Builder Supreme</h1>
      <div className="App">
        <Form addNewMember={addNewMember} />
        {/* <TeamMembers /> */}
        <NewMember members={members} />
      </div>
    </div>
  );
}

export default App;
