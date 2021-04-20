import './App.css';
import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import TeamMembersForm from './components/TeamMembersForm';

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
    <div className="App">
      <h1>THE TEAM</h1>
      <TeamMembersForm />
      <TeamMembers teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
