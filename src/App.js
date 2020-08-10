import React, { useState } from "react";
import ReactDom from "react-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [members, setMembers] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChanges = (event) => {
    console.log(event.target.value, "event!");
    setMembers({ name: event.target.value });
  };
  console.log(members);
  const addName = (member) => {
    const newMember = {
      id: Date.now(),
      title: member.name,
      email: member.email,
      role: member.role,
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label htmlFor="name">Name</label>
        </form>
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          onChange={handleChanges}
        ></input>
        <form>
          <label htmlFor="email">Email</label>
        </form>
        <input id="email" type="text" placeholder="Enter Email"></input>
        <form>
          <label htmlFor="role">Role</label>
        </form>
        <input
          id="role"
          type="text"
          placeholder="Enter Role"
          onChange={handleChanges}
        ></input>
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
