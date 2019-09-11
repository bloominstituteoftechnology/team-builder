import React, { useState } from 'react';

import './App.css';

import Forms from './Form';
import Teams from './Team';

function App() {
  const [team, setNewTeam] = useState([{}])
  const addMember=(newMember) => {
    setNewTeam([...team, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Build!</h1>

        <Teams team={team} setNewTeam={setNewTeam}/>
        <Forms addMember={addMember} />
                
        <button>Edit</button>
      </header>
    </div>
   
  );
}

export default App;
