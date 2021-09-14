import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}
function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    console.log('here in submitform')
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newTeam.name || !newTeam.email || !newTeam.role) {
      setError('Please fill out all of the empty fields');
    }
    setTeam([...team, newTeam])
  }

  return (
    <div className="App">
      <h1>Team Form App</h1>
      <h1>Apply to Richard's Massage Entourage</h1>
      {/* <h3>{error}</h3> */}

      <Form
        values={formValues}
        updates={updateForm}
        submit={submitForm}
      />
      {
        team.map((member, index) => {
          return (
            <div key={index}>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
          </div>
          )
        })
      }
    </div>
  );
}
export default App;