import React, { useState } from 'react';
import ReactDOM from "react-dom";
import data from "./data";
import MembersList from "./CrewList";
import Form from "./Form";
import './App.css';

function App() {

  const [crewMembers, setCrewMembers] = useState(data
  
  );

// Create a function to add new member using the form. Use the spread operator to keep everything the same, and add the new id using the date.now method.

  const addNewMember = (member) => {
    setCrewMembers([...crewMembers, {...member, id: Date.now() }])

  };

  return (
    <div className="App">
      <header className="App-header">
       
       <h1>Crew Roster</h1>
       <Form addNewMember={addNewMember} />
      <MembersList crewMembers={crewMembers} />
      </header>
    </div>
  );
}

export default App;