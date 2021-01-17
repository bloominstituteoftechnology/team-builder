import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Form from "./Forms"


function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
        <h1>Team List</h1>
        <Form  />
        <h2>Members of the Team</h2>
        <div className ="teamInfo"> 
        <teamMember/>
        </div>
    </div>
  );
}

export default App;
