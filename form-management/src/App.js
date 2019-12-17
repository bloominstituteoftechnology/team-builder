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
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState({
    name: "name",
    email: "email",
    role: "role"
  });

  return (
    <div className="App">
      <Form team={team} setTeam={setTeam} edit={memberToEdit} />
      {/* <Team team={team}  setEdit={setMemberToEdit}/>
       */}
      {team.map(e => (
        <Team member={e} setEdit={setMemberToEdit} />
      ))}
      {console.log(memberToEdit)}
    </div>
  );
}

export default App;
