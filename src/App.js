import React, { useState } from 'react';
import sampleData from './data/sampleData';
import Form from './components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState(sampleData);
  
  const addNewMember = newMember => {
    setTeamMembers([...teamMembers, newMember]);
  }

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
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
