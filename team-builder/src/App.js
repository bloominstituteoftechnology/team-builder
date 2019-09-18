import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';
import Form from './Form';
import TeamMembersList from './TeamMembersList';

const initialTeamMembers = [
  { id: uuid(), name: 'Amira', email: 'amira@lambdaschool.com', role: 'Product Manager' },
  { id: uuid(), name: 'Dom', email: 'dom@lambdaschool.com', role: 'Technical Lead' },
  { id: uuid(), name: 'Martins', email: 'martins@lambdaschool.com', role: 'Software Developer' },
  { id: uuid(), name: 'Francis', email: 'francis@lambdaschool.com', role: 'Product Sponsor' },
  { id: uuid(), name: 'Abel', email: 'abel@lambdaschool.com', role: 'Software Tester' },
  { id: uuid(), name: 'Babatunde', email: 'babatunde@lambdaschool.com', role: 'Subject Matter Expert' },
];


function App() {

  // passed in initialTeamMembers to the useState so that my state variable would use it as the initial value
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);


  const addToTeamMembers = (member) => {
    let team = [...teamMembers];
    team.push(member)
    setTeamMembers(team)
  }

  return (
    <div className="App">
      <Form add={addToTeamMembers} />
      <TeamMembersList myTeamMembers={teamMembers} />
    </div>
  );
}

export default App;
