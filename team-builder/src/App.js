import './App.css';
import { useState } from 'react'
import TeamMember from './TeamMemberForm'
import Member from './Member'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
  language: ''
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      language: formValues.language,
    }
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className='App'>
      <TeamMember
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {teamMembers.map((teamMembers) => {
        return <Member key={teamMembers.id} details={teamMembers} />
      })}
    </div>
  )
}


