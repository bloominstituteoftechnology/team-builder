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
      <h1>Team Management</h1>
      <div className='content container'>
        <section className='team container'>
          <h2>Team Members</h2>
          {
            teamMembers.map(person => {
              return (
                <div className='team-member-container'>
                  <h3>{person.name}</h3>
                  <p>{person.email}</p>
                  <p>{person.role}</p>
                </div>
              );
            })
          }
        </section>
        <Form addNewMember={addNewMember}/>
      </div>
    </div>
  );
}

export default App;
