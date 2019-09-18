import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
function App() {
  //State to shape members, and hold array of all members.
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [team, setTeam] = useState([]);
  //handle changes on form
  function handleChange(event) {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  }
  //handle submit of the form
  function handleSubmit(event) {
    event.preventDefault();
    setTeamMember({ name: "", email: "", role: "" });
  }
  //renderMember function. based on simple checks of input
  function renderMember(e) {
    if (teamMember.name === "") {
      e.preventDefault();
    } else if (teamMember.email === "") {
      e.preventDefault();
    } else if (teamMember.role === "") {
      e.preventDefault();
    } else if (!teamMember.email.includes("@")) {
      e.preventDefault();
    } else {
      setTeam([...team, teamMember]);
    }
  }
  return (
    <div className="App">
      <h1>Add A Member</h1>
      <Form
        team={team}
        teamMember={teamMember}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        renderMember={renderMember}
      />
      {team.map((member, index) => (
        <section className="member-card" key={index}>
          <h1>{member.name}</h1>
          <h1>{member.email}</h1>
          <h1>{member.role}</h1>
        </section>
      ))}
    </div>
  );
}
export default App;
