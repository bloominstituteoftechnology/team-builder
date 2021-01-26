import React, { useState } from 'react';
import './App.css';
import Team from './Team';
import Form from './Form'

const initialTeam = [
  {
    name: 'Jon',
    email: 'jon@team.com',
    role: 'manager'
  }, {
    name: 'Elizabeth',
    email: 'liz@team.com',
    role: 'backend developer'
  }, {
    name: 'Alison',
    email: 'ali@team.com',
    role: 'quality assurance'
  }
]

const initialFormValues = {name:'', email:'', role:''}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName,inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (newMember.name && newMember.email && newMember.role) {
      setTeamMembers([...teamMembers, newMember]);
      setFormValues(initialFormValues);
    } else {
      alert('Please fill out all fields before submitting.')
    }
  }

  return (
    <div className="App">
      <Team team={teamMembers} />
      <Form values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
