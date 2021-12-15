import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const teamMemberInfo = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState({ teamMemberInfo });
  const [error, setError] = useState("");

  const updateForm = (name, value) => {
    setTeamMembers({ ...teamMembers, [name]: value });
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
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Team Builder</h1>
      <h2>{error}</h2>
      <Form TeamMembers={teamMembers} Update={updateForm} Submit={submitForm} />
    </div>
  );
}

export default App;
