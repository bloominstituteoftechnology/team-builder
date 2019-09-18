import React, { useState } from 'react';
import uuid from 'uuid'
import Form from './components/Form';
import './App.css';

const initialTeam = [
  {
      name: 'Dom',
      id: uuid(),
      email: 'domeccleston@gmail.com',
      role: 'Web Developer'
  },

  {
    name: 'Francis',
    id: uuid(),
    email: 'francis1@gmail.com',
    role: 'Software Engineer'
  },

  {
    name: 'Toby',
    id: uuid(),
    email: 'tobi_4@hotmail.com',
    role: 'WEBEU3 TL'
  }
]

const formDefault = {
}

function App() {

  const [team, setTeam] = useState(initialTeam);
  const [formState, setFormState] = useState(formDefault);
  return (
    <div className="App">
      {team.map(teamMember => 
      <div className ='team-container'>
      Name: {teamMember.name}<br></br>
      ID: {teamMember.id}<br></br>
      Email: {teamMember.email}<br></br>
      Role: {teamMember.role}<br></br>
      </div>)}
      <Form setter={setFormState} data={formState} />
      <h3>Name: {formState.name}</h3>
      <h3>Email: {formState.email}</h3>
      <h3>Role: {formState.role}</h3>
    </div>
  );
}

export default App;
