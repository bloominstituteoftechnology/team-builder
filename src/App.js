import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TeamMember from './TeamMembers';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMembers = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {members.map(mem => {
        return(<TeamMember key={mem.id} details={mem} />)
      })}
    </div>
  );
}

export default App;
