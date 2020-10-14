import React, { useState } from 'react';
import Forms from './components/Forms'
import Team from './components/Team'
import TeamData from './components/TeamData'
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState(TeamData)

  const newTeam = (teams) => {
    const newMember = {
      name: teams.name,
      email: teams.email,
      role: teams.role
    }
    setTeamMembers([...teamMembers, newMember])

  }
  return (
    <div>
    <div className="header">
      <h1> This is our team!</h1>
    </div>

    <div className="App">
     <Team members={teamMembers}/>
    </div>
    <div className="Forms">
    <h1>Become a member!</h1>
    <Forms newTeam ={newTeam}/>
    </div>
</div>
  );
}

export default App;
