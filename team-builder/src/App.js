import './App.css';
import React, { useState } from 'react'
import Form from './components/Form'

const initialValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;
    setTeamMembers([newTeamMember, ...teamMembers]); 
    setFormValues(initialValues);

  };

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form values={formValues} update={updateForm} submit={submitForm}/>
    </div>
  );
}

export default App;