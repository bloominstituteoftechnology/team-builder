import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Team from "./Team";

const teamMemberInfo = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberInfo);
  const [team, setTeam] = useState([]);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setTeamMembers({ ...teamMembers, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: teamMembers.name.trim(),
      email: teamMembers.email.trim(),
      role: teamMembers.role,
    };

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError("You missed adding something to one of the fields");
    } else {
      setTeam(team.concat(newTeamMember));
    }
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <h2>{error}</h2>
      <Form teamMembers={teamMembers} update={updateForm} submit={submitForm} />

      <Team members={team} />
    </div>
  );
}

export default App;
