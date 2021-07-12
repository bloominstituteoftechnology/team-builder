import React, { useState } from 'react'
import TeamMemberForm from './Components/TeamMemberForm'
import TeamMembersList from './Components/TeamMembersList'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)  // state is going to hold form values

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const { name, email, role } = formValues
    setTeamMembers([
      ...teamMembers,
      {
        name: name.trim(),
        email:email.trim(),
        role: role.trim()
      }
    ])
    setFormValues(initialFormValues)
  }

  return (
    <div>
      <TeamMemberForm values={formValues} update={updateForm} submit={submitForm}/>
      {
        teamMembers.map((teammate) => {
          return (
            <TeamMembersList key={teammate.id} details={teammate} />
          )
        })
      }
    </div>
  )
}
