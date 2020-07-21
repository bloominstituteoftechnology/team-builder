import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import Team from './components/team'



const initialFormValue = {
  name: '',
  email: '',
  role: 'frontend',
}



function App() {
const [ team, setTeam ] = useState([])
const [ form, setForm] = useState(initialFormValue)

const updateForm = (inputName, inputValue) => {
  setForm({ ...form, [inputName]: inputValue})
}

const submitForm = () => {
  const newMember = {
    name: form.name.trim(),
    email: form.email.trim(),
    role: form.role
  }
  setTeam([...team, newMember])
}

  return (
    <div>
      <h1>React app working</h1>
      <Form update={updateForm} values={form} submit={submitForm}/>

    {
      team.map(member => {
        return (
          <Team details={member}/>
        )
      })
    }
    </div>
  )
}

export default App;
