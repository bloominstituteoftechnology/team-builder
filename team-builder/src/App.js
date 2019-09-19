import React, { useState } from "react";
import "./App.css";
import MemberForm from "./Components/MemberForm";

function App() {
  //State to shape members, and hold array of all members.
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [team, setTeam] = useState([]);
  //handle changes on form
  const handleChange = e => {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  };
  //handle submit of the form
  const handleSubmit = e => {
    e.preventDefault();
    setTeamMember({ name: "", email: "", role: "" });
  };
  //renderMember function. based on simple checks of input
  const renderMember = e => {
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
  };
  return (
    <div className="App">
      <h1>Add A Member</h1>
      <MemberForm
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
