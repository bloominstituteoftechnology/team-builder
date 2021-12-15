import React, { useState, useEffect } from 'react'
import Team from './Team'
import TeamForm from './TeamForm'


// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

const teamMembers = [
  {name: 'Buddy',
  email: 'Buddy@thecat.com',
  role: 'Backend Engineer',
  },
  {name: 'Donut',
  email: 'Donut@thefish.com',
  role: 'Software',
  },
  {name: 'Tazu',
  email: 'Tazu@thedog.com',
  role: 'HR',
  },
  {name: 'Boobie',
  email: 'Boobie@thedog.com',
  role: 'Frontend',
  },
]

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState(teamMembers);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {

    const newMember = {
      ...formValues,
    }

    setMembers([...members, newMember]);
    //teamMembers.push(newMember)
  }

  return (
    <div>
      <h1> Buddy's Team</h1>
      <TeamForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
      <Team teamMembers={members}
      />



    </div>
  )
  




}