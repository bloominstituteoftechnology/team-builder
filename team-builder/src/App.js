import React, { useState } from 'react'
import MemberForm from './components/Form'
import Team from './components/Team'

const squad = [
  {
    name: 'Niko',
    email: 'niko@niko.com',
    role: 'Artist'
  },
  {
    name: 'Niles',
    email: 'niles@niles.com',
    role: 'Engineer'
  },
  {
    name: 'Taylor',
    email: 'taylor@taylor.com',
    role: 'Producer'
  }   
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [members, setMembers] = useState(squad)

  const [formValues, setForms] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setForms({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setMembers([...members, newMember])
    setForms(initialFormValues)
  }

  return (
    <div className="container">
      <h1>Studio Team</h1>
      
      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
          return (
            <Team key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}
