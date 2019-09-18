import React, {useState} from 'react';
import './App.css';

import styled from "styled-components";

//My Imports
import Teams from "./components/Teams";
import TeamForm from "./components/TeamForm";

//Styles
const AppContainer = styled.div`
height: 100%;
width: 100%;
background: lightblue;
`;

function App() {
  const [ teams, setTeams ] = useState([
  {
    id: 0,
    title: "Team List",
    body: "New Teams Added Below"
  }
]);

  //passing parameter team
  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      title: team.title,
      body: team.body
    };
    // bringig in state teams
    setTeams([...teams, newTeam]);
  };

  return (
    <AppContainer className="App">
      <h1>Display Teams!</h1>

      <TeamForm addNewTeam={addNewTeam} />
      <Teams teams={teams} />

    </AppContainer>
  );
}

export default App;
