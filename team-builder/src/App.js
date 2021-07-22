import logo from "./logo.svg";
import React, { useState } from "react";
import Form from "./Form";
import "./App.css";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

function App() {
  const [members, setMembers] = useState([]);
  return (
    <div className="App">
      <h2>Team Member List</h2>
      {members.map((member, idx) => {
        return <p key={idx}>{member.name}</p>;
      })}
      <Form />
    </div>
  );
}

export default App;
