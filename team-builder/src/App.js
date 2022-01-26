import React, { useState, useEffect } from 'react'
import Team from './Team'
import TeamForm from './TeamForm'
import axios from './Axios/index'
import './App.css'


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [teams, setTeams] = useState([]) 
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeams = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    
    if(newTeams.name.length <= 3) {
      setFormErrors("Name has to be longer than 3 characters ya chump!");
      return;
    }

    axios.post('fakeapi.com', newTeams)
      .then(res => {
        const dbTeam = res.data;
        setTeams([dbTeam, ...teams]);
        setFormErrors("");
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err))
      setTeams(teams.concat(newTeams));
    setFormValues(initialFormValues)
  }
  

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeams(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>
      <h3 className="error-text">{formErrors}</h3>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teams.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }
    </div>
  )
}
