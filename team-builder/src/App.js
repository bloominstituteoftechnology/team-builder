import React, { useState } from 'react';
import './App.css';
import Forms from '../components/Forms';
import Teams from '../components/Teams';

function App() {
  const [teamMembers, setTeamMembers]=useState([
    {
      id: 1,
      name: 'Anthony Donovan',
      email: 'chitowncoder@gmail.com',
      role: 'Web Developer',
    },
  ]);

  const addNewTeamMembers = teamMember => {
    const addNewTeamMembers = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };
    const newTeamCollection = [...teamMembers, NewTeamMembers];
    setTeamMembers(newTeamCollection);
  };

  return (
    <div className="App">
      <h1> My Team </h1>
      <Forms addNewTeamMembers={addNewTeamMembers}/>
      {<Teams teamMember={teamMember}/>}
    </div>
  );
}

export default App;
