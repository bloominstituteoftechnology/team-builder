import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Components/Member'
import Form from './Components/Form'
import { v4 as uuid } from 'uuid'

const initialFormValues = {
    username: '',
    email: '',
    role: '',
}
function App() {

  const [teamList, setTeamList] = useState([{id: uuid(), username: 'Alex', email: 'alex@mail.com', role: 'Front End'}, {id: uuid(), username: 'Bill', email: 'bill@mail.com', role: 'Back End'}])
  const [error, setError] = useState('')

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    console.log('yes')
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
      <span style={{ color: 'red' }}>{error}</span>
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        />
      {teamList.map( member => {
        return(
          <Member key={member.id} details={member}/>
        )
      })}
    </div>
  );
}

export default App;
