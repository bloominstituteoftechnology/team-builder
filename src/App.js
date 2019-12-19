import React, { useState } from 'react';
import Team from "./components/Team";
import TeamForm from "./components/TeamForm"
import './App.css';

function App() {
  const [ teams, setTeams ] = useState([ {
    id: 1,
    name: "Rick Sanchez",
    email: "rick-sanchez@rickmorty.com",
    role: "Evil genius/loving grandpa"
  }
]);

// lets us create a new team (create function that contains--> takes same as team)
  const addNewTeam = team => {
    const newTeam = {
      // id: is unique 
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeams([...teams, newTeam]);
  }
  // spread operator: check if can change with useParams

  return (
    <div className="App">
      <h1>Team list</h1>
      {/* // render props */}
      <TeamForm addNewTeam = {addNewTeam} />
      <Team teams={teams} />
    </div>
  );
}

export default App;
