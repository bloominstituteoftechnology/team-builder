import './App.css';
import React, { useState } from 'react'
import Form from './Form';
import TeamMember from './TeamMember';

const intialFormValues = {
  fname: '',
  role: '',
  email: ''
}

export default function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(intialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const { fname, email, role } = formValues
    setTeam([
      ...team,
      {
        fname: fname.trim(),
        email: email.trim(),
        role: role.trim()
      }
    ])
    setFormValues(intialFormValues)
  }

  return (
    <div className="container">
      <h1>Team Alpha</h1>
        <Form
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
        {
          team.map(member => {
            return(
              <TeamMember key={member.id} details={member} />
            )
          })
        }
    </div>
  );
}
