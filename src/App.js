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
    role: 'back-end developer'
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
  const [memberToEdit, setMemberToEdit] = useState({name:'', email:'', role:''});

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

  const pickMemberToEdit = (email) => {
    teamMembers.forEach(member => {
      if (member.email === email) {
        setMemberToEdit(member);
      }
    })
  }

  return (
    <div className="App">
      <Team team={teamMembers} pickMemberToEdit={pickMemberToEdit} />
      <Form values={formValues} update={updateForm} submit={submitForm} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
