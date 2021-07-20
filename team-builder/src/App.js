import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form.'

const initialValues = {
  username: '',
  email: '',
  role: '',
}


function App() {
  const [teamMember, setMember] = useState({ })
  
  const updateForm = (inputName, inputValue) => {
    setMember({...teamMember, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      username: teamMember.username.trim(),
      email: teamMember.email.trim(),
      role: teamMember.role.trim(),      
    }
  }
  
  return (
    <div className="App">
      <h1>FOORMS</h1>
      <Form
      values = {teamMember}
      update = {updateForm}
      submit = {submitForm}
      />
    </div>
  );
}

export default App;
