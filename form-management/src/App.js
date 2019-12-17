import React, { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Braden",
      email: "email@lostMail.never",
      role: "Full-Stack-Web-Developer"
    },
    {
      name: "Kacee",
      email: "kacee@missionMail.com",
      role: "OUTTA HERE"
    },
    {
      name: "Colten",
      email: "culton@gmail.com",
      role: "Hes Back"
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState({
    index: null,
    name: "Name",
    email: "Email",
    role: "Role"
  });

  return (
    <div className="App">
      <Form team={team} setTeam={setTeam} edit={memberToEdit} />

      {team.map((e, i) => (
        <Team member={e} setEdit={setMemberToEdit} index={i} />
      ))}
    </div>
  );
}

export default App;
