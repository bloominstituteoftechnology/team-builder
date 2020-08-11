import React, { useState } from 'react';
import ReactDOM from "react-dom";
import data from "./data";
import crewList from "./CrewList";
import Form from "./Form";
import './App.css';

function App() {

  const [crew, setCrew] = useState(data);

// Create a function to add new member using the form. Use the spread operator to keep everything the same, and add the new id using the date.now method.

  const newCrew = (crew) => {
    setCrew([...crew, {...crew, id: Date.now() }])

  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <h1>Crew Roster</h1>
       <Form newCrew={newCrew} />
      <crewList crew={crew} />
      </header>
    </div>
  );
}

export default App;
  


// refactor