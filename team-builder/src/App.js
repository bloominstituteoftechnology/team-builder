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

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setTeamMembers({ ...teamMemberInfo, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <Form
        TeamMembers={teamMembers}
        HandleChange={handleChange}
        HandleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
