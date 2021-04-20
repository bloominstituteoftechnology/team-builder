import './App.css';
import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';

const defaultMember = [
  {
      id: 0,
      name: '',
      email: '',
      role: ''
  }
]

function App() {

  const [teamMembers, setTeamMembers] = useState(defaultMember);

  console.log(teamMembers);
  
  return (
    <div>
      <h1>THE TEAM</h1>
      <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
