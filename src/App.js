import React, { useState } from 'react';
import Form from './Components/Form';
import TeamMember from './Components/TeamMember';
import './App.css';
// import data from './data';

function App() {

  const [teamMember, setTeamMember] = useState([]);

  const addMember = member => setTeamMember([...teamMember, member]);


  return (
    <div className="App">
      <h1>Ndawi's Team Builder</h1>
      {teamMember.map(member => (
        <TeamMember member={member}/>
      ))}

      <Form addMember={addMember} />
    </div>



  );
}

export default App;
