import React, { useState } from 'react';
import data from "./data";
import TeamForm from "./components/TeamForm";
import CurrentMembers from "./components/CurrentMembers";
import './App.css';


function App() {

  const [team, setTeam] = useState(data);


  const addNewMember = member => {
    const newMember = {
      name: member.name,
      linkedIn: member.linkedIn,
      github: member.github
    };
    setTeam([...team, newMember]);
  };


  return (


    <div className="App">
     
     <h1>Team Members</h1>
          <TeamForm  addNewMember ={addNewMember} className="form"/>
          <CurrentMembers team ={team}/>
     
    
    </div>
  );
}

export default App;
