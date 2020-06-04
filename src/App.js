import React, {useState} from 'react';

import {useLocalStorage} from './hooks/useLocalStorage';
import Form from './components/Form';
import TeamList from './components/TeamList.js';
// import AddTeamMember from './AddTeamMember';
import './App.css';
// import { waitForElementToBeRemoved } from '@testing-library/react';
//Setup initial data->
const teamData = [
  {
    id: 1,
    name: "tom",
    email: "dev@developer.com",
    role: "Full Stack Developer"
  }
];
//one off establishment of stored value in local storage.
//This should be handled by the useLocalStorage hook, but
//for some reason using the hook creates an infinete loop.
//Need to investigate...
// ->window.localStorage.setItem("team", JSON.stringify(teamData));
// console.log("const team->", teamData);

function App() {
  const [team, setTeam] = useState(teamData);
  // console.log("team from app->",team);
  // const [storedTeam, setStoredTeam, handleStoredTeam] =useLocalStorage("team");
  const [storedTeam, setStoredTeam] =useLocalStorage("team");
  console.log(storedTeam);
  // console.log("Before settting storedTeam value->",storedTeam);
  // setStoredTeam(team);

  // console.log("storedTeam value->",storedTeam);
  
  const addTeamMember = newTeamMember => {
    // console.log("From App->newTeamMember",newTeamMember);
    setTeam([...team, newTeamMember]);
    setStoredTeam([...storedTeam, newTeamMember]);
    // handleStoredTeam(team);
    // console.log("storedTeam->",storedTeam);

    // console.log("From APP, Team is->",team);
  };

  return (
    <div className="App">
      <header className="App-header">
      The Core App of the Team Builder App....
        <Form addMember={addTeamMember} />
        {/* <AddTeamMember /> */}
        <TeamList team={storedTeam}/>

        
      </header>
    </div>
  );
}

export default App;
