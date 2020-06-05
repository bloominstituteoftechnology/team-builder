import React, { useState } from 'react';
import TeamData from './TeamData';
import './App.css';

function App() {
  const members = TeamData;
  const [team, setTeam] = useState(members);
  return (
    <div className="App">
      {members.map(member => {
        return <div>
          <h1>{member.name}</h1>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>;
      })}

    </div>
  );
}

export default App;
