import React, { useState } from 'react';
import sampleData from './data/sampleData';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState(sampleData);
  
  return (
    <div className="App">
      <h1>Team Members</h1>
      {
        teamMembers.map(person => {
          return (
            <div className='member container'>
              <h3>{person.name}</h3>
              <p>{person.email}</p>
              <p>{person.role}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
