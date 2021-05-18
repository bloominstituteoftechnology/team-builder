import React, { useState } from 'react'
import './App.css'
import TeamForm from './TeamForm'

// initial state
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const[teammate, setTeammate] = useState([])
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
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>

        {/* render <TeamForm 
        add props to inject in child forms
        /> */}

        <TeamForm
          update={updateForm}
          submit={submitForm}
          values={formValues}
        />
      </header>
    </div>
  );
}

export default App;
