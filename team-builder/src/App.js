import React, { useState } from 'react';
import './App.css';
import TeamForm from './Components/TeamForm';
import TeamCard from './Components/TeamCard';
import uuid from 'uuid'

function App() {

  const [teamMate, setTeamMate] = useState([
    
  ])

  const addTeamMate = (newTeamMate) => {
    setTeamMate([...teamMate, newTeamMate])
  }

  return (

    
    <div className="App">

        const uuid = uuid()
      {
        console.log(uuid)

      }
      
      <h1>Team Builder</h1>
      <TeamForm addTeamMate={addTeamMate} />
      <TeamCard teamMate={teamMate} />

    </div>

  );
}

export default App;
