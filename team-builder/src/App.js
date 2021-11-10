import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const teams = [
  {
    name: "Jennifer",
    email: "Jennifer@yahoo.com",
    role: "Front-End Developer",
  },
  { name: "Jennifer", email: "Jennifer@yahoo.com", role: "Back-End Developer" },
  { name: "Hope", email: "Hope@yahoo.com", role: "Full-Stack Developer" },
  { name: "Hope", email: "Hope@yahoo.com", role: "Project Manager" },
  { name: "Zoe", email: "Zoe@yahoo.com", role: "Designer" },
];

function App() {
  const [teamNames, setTeamNames] = useState(teams);
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
    </div>
  );
}

export default App;
