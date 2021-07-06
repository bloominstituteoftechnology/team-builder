import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      title: "New member",
      body: "New member bio",
    },
  ]);

  const addMember = (name) => {
    const newMember = {
      id: Date.now,
      memberName: name.memberName,
    };
    setMembers([...members, newMember]);
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
        <Form addMember={addMember} name="Default name" />
      </header>
    </div>
  );
}

export default App;
