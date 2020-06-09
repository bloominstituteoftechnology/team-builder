import React, { useState } from 'react';
import Form from './Components/Form';
import TeamMembers from './Components/TeamMembers';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Sam Hall',
      email: 'myEmail@email.com',
      role: 'CEO'
    }
  ])

  const addNewMember = member => {
    setTeamMembers([...teamMembers, {...member, id: Date.now()}])
  }

  return(
    <>
      <h1 style={{textAlign: 'center'}}>
        New Member Form
      </h1>
      <Form addNewMember={addNewMember}/>
      <h2 style={{textAlign: 'center', borderBottom: '1px solid black', margin: '15px 20px'}}>Team Members</h2>
      <TeamMembers teamMembers={teamMembers} />
    </>
  );
}

export default App;
