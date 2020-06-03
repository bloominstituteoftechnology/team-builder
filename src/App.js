import React, {useState} from 'react';

import Form from './Form';
import TeamList from './TeamList.js';
import AddTeamMember from './AddTeamMember';
import './App.css';

import { waitForElementToBeRemoved } from '@testing-library/react';

const teamData = [
  {
    id: 1,
    name: "tom",
    email: "dev@developer.com",
    role: "Full Stack Developer"
  }
];
console.log("const team->", teamData);

function App() {

  const [team, setTeam] = useState(teamData);
  const addTeamMember = newTeamMember => {
    setTeam([...team,newTeamMember]);
  };
console.log("Team is->",team);
  return (
    <div className="App">
      <header className="App-header">
        <Form addTeamMember={addTeamMember} />
        <AddTeamMember />
        <TeamList />
          The Core App of the Team Builder App....
        
      </header>
    </div>
  );
}

export default App;
