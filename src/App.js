//* 💡 Import State
import React, {useState} from 'react'
import './App.css'
import TeamMember from './components/TeamMember'
import Form from './components/Form'

//* 💡 Initializing empty form
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

//* 💡 Setting States
export default function App () {
  const [teamMembers, setTeamMembers] = useState ([{name: "Ron", email: "ron@swanson.io", role: "LOGISTICIAN"}])
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    //* 💡 Updater
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    //* 💡 Submit function for onSubmit
    // Makes a new Team Member, trims whitespace:
    const newTeamMem = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    // Prevents further action if fields are blank:
    if (!newTeamMem.name || !newTeamMem.email || !newTeamMem.role) {return;}
    // Adds to existing member list
    setTeamMembers(teamMembers.concat(newTeamMem))
    // Clear form after Submit
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <h1>Welcome to the Team!</h1>

      <Form
        // Props
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      <p>Who's Already Here:</p>

      {
        teamMembers.map(tm => {
          return (
            <TeamMember key={tm.id} details={tm} />
          )
        })
      }
    </div>
  )

}
