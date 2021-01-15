import React, { useState } from 'react'
import TeamForm from './Form';
import teamData from './DummyData';
import Team from './Team';
import './App.css';


const initialFormValues = {
    
  username: '',
  email: '',
  role: '',

}


export default function App() {
  
  const [currTeam, setCurrTeam] = useState([teamData]);

  const [teammate, setTeammate] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)
  
  
  const updateForm = (inputName, inputValue) => {
    
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    
    const newTeammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeammate.username || !newTeammate.email || !newTeammate.role) return;

    setTeammate([...teammate, newTeammate])
    setFormValues(initialFormValues)
    setCurrTeam(currTeam)
  }

  return (
    <div className='App'>
      <h1>Team Builder App</h1>
      <TeamForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />
    {teammate.map((teammate)=>{
      return <Team key={teammate.id} details={teammate}/>
      
    })}
    </div>
  )
}


