
import './App.css';
import Form from './Form'
import Team from './Team'
import React, { useState, useEffect } from 'react'



const initialFormValues = {

  name: '',
  email: '',
  role: '',

}

function App() {

  const [teams, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateTeam = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitTeam = () => {
    const newTeam = {
      name: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newTeam.name || !newTeam.email || !newTeam.role) {
      setError("Slow down there buckaroo");
      return;
    }

  }

  return (

    <div className='container'>
      <h1>Teammate Form </h1>
      <h3 className="error">{error}</h3>

      {teams.map((team, idx) => {
        return (
          <Team key={idx} team={team} />
        )
      })
      }
      <Form
        values={formValues}
        update={updateTeam}
        submit={submitTeam}
      />

    </div>
  )
}


export default App;
