import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const teams = [
  { name: "Jennifer" },
  { name: "Isabel" },
  { name: "Hope" },
  { name: "Zoe" },
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
