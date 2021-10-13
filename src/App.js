import React, { useState } from 'react'
import './App.css';
import Form from './Form';

const memberList = [
  { username: 'Bob', email: 'bob@bob.com', role: 'Designer' }
]
const initialValues = { username: '', email: '', role: '' }

function App() {

  const [teamMembers, setTeamMembers] = useState(memberList)
  const [formValues, setFormValues] = useState(initialValues)
  const [errorText, setErrorText] = useState('')

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) {
      setErrorText('Please enter a username, email, and role.');
      return;
    }

    setTeamMembers([...teamMembers, newTeamMember])
    setFormValues(initialValues)
    setErrorText('')
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        errorText={errorText}
      />
      <h2>Team Members</h2>
      {teamMembers.map((member, index) => (
        <div key={index}>
          Name: {member.username} <br></br>
          Email: {member.email} <br></br>
          Role: {member.role}
        </div>
      ))}
    </div>
  );
}

export default App;
