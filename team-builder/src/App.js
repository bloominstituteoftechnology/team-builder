import React, { useState } from 'react'
import './App.css'
import TeamForm from './TeamForm'
import Teammate from './Teammate'

// initial state
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const[teammates, setTeammates] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  console.log(teammates)


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

    setTeammates([newTeammate, ...teammates]);
    setFormValues(initialFormValues);
  }

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

      {/* {

        teammates.map(teammate => {
          return (
            <Teammate key={teammate.id} details={teammate} />
          )
        })
      } */}
    </div>
  )
}


export default App;
