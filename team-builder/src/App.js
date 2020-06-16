import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Components/Member'
import Form from './Components/Form'
import { v4 as uuid } from 'uuid'

const initialFormValues = {
    username: '',
    email: '',
    role: ''
}
function App() {

  const [teamList, setTeamList] = useState([{id: uuid(), name: 'Alex', email: 'alex@mail.com', role: 'Front End'}, {id: uuid(), name: 'Bill', email: 'bill@mail.com', role: 'Back End'}])
  const [error, setError] = useState('')

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {

    const { name, value } = evt.target

    setFormValues({
      ...formValues,
      [name]: value,

    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    if(!formValues.username || !formValues.email || !formValues.role) {
      setError('You need to fill out all the info')
      return
    }

    const newMember = {
      id: uuid(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamList(teamList => [newMember, ...teamList])
    setFormValues(initialFormValues)
  }



  return (
    <div className="App">
      <h1>Team List App</h1>
      <Form 
        values={formValues}
        onInputchange={onInputChange}
        onSubmit={onSubmit}/>
      {teamList.map( member => {
        return(
          <Member details={member}/>
        )
      })}
    </div>
  );
}

export default App;
