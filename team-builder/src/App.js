import React, { useState, useEffect } from 'react'
import Team from './Team'
import Form from './Form'
import axios from './axios'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App(prop) {
  const [team, setTeam] = useState([]) 
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
  setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  // const memberToEdit = () => {

  // }

  const submitForm = () => {
   const newTeam = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newTeam.username || !newTeam.email || !newTeam.role) {
      return;
    }
   axios.post('fakeapi.com', newTeam)
      .then(res => {
       setTeam([...team, res.data])
       setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, []);

  return (
    <div className='container'>
      <h1>Team Builder App</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    <h2>Team Member List</h2>
      {
        team.map(teammate => {
          return (
            <Team key={teammate.id} details={teammate} />
          )
        })
      }
    </div>
  );
}

