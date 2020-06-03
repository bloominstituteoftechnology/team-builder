import React, {useState} from 'react';

import Form from './Form';
import TeamList from './TeamList.js';
// import AddTeamMember from './AddTeamMember';
import './App.css';
// import { waitForElementToBeRemoved } from '@testing-library/react';

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
  console.log("team from app->",team);
  const addTeamMember = newTeamMember => {
    // console.log("From App->newTeamMember",newTeamMember);
    setTeam([...team, newTeamMember]);
    // console.log("From APP, Team is->",team);
  };

  return (
    <div className="App">
      <header className="App-header">
      The Core App of the Team Builder App....
        <Form addMember={addTeamMember} />
        {/* <AddTeamMember /> */}
        <TeamList team={team}/>

        
      </header>
    </div>
  );
}

export default App;
