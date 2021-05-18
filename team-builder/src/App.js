import React, { useState, useEffect } from 'react'
import './App.css'
import TeamForm from './TeamForm'
import Teammate from './Teammate'
import axios from 'axios'

// initial state
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const[teammates, setTeammates] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  // form state updater function
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  // submit form function
  const submitForm = () => {
    // new teammate object
    const newTeammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeammate.username || !newTeammate.email || !newTeammate.role) return
    axios.post('fakeapi.com', newTeammate)
      .then(res => {
        const teammateFromBackend = res.data
        setTeammates([teammateFromBackend, ...teammates])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    axios
    .get('fakeapi.com')
    .then(res => setTeammates(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Team Builder</h1>

      {/* render <TeamForm 
      add props to inject in child forms
      /> */}

      <TeamForm
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />

      {

        teammates.map(teammate => {
          return (
            <Teammate key={teammate.id} details={teammate} />
          )
        })
      }
    </div>
  )
}

export default App;
