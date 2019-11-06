import React, { useState } from 'react';

import './App.css';
import TeamBuilder from "./Form"
import Card from "./Card"

function App() {
 const [teamMember, setTeamMember] = useState([
   {
     Name: "Team Member",
     Email: "TeamMember@Team.com",
     Role: "Front-end Dev"
   }
 ])

 const addNewMember = member => {
  const newTeamMember = setTeamMember([...teamMember, member]);
};

  return (
    <div className="App">
     <h1>Team Members</h1>
     
     <TeamBuilder addNewMember={addNewMember}/>
     <Card teamMember={teamMember} />
     
    </div>
  );
}

export default App;
