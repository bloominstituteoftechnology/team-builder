import React, { useState, useEffect } from 'react'
import axios from '/Users/joehernandez/team-builder/team-builder/src/axios/index.js'
import Form from './Form'
import './App.css';
import TeamMember from './TeamMember'





const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
const [teamMembers, setTeamMembers] = useState([])

const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue })
}

const submitForm = () => {
  const newTeamMember = {
    email: formValues.email.trim(),
    name: formValues.name.trim(),
    role: formValues.role,
  }

  if (!newTeamMember.email || !newTeamMember.name || !newTeamMember.role) return
  axios.post('fakeapi.com', newTeamMember)
  .then(res => {
    setTeamMembers([newTeamMember, ...teamMembers])
    setFormValues(initialFormValues)
  })
}

useEffect(() => {
  axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
}, [])



  return (
    <div className='container'>
      <h1>Form App</h1>
  
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  );
}
