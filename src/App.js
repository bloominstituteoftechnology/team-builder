import React, { useState } from 'react';
import Teames from "./components/Teames";
import TeamForm from "./components/TeamForm";
import logo from './logo.svg';
// import '.styles.scss';

function App() {
  const [teames, setTeames] = useState ([
    {
      id: 1,
      name: "Mike",
      position: "Designer",
      email: "mike@gmail.com",
      
    }
  ]);
  const addNewTeamMem = (formData) => {
    const newTeamMem = {
      id: Date.now(),
      name: formData.name,
      position: formData.position,
      email: formData.email,
    };
    setTeames([...teames, newTeamMem]);
  }
  return (
    <div className="App">

        <h1>Team members</h1>
        <TeamForm addNewTeamMem={addNewTeamMem} />
        <Teames teames={teames} />
    </div>
  );
}

export default App;
