import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Team from './components/Team';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {

const [teamMembers, setTeamMembers] = useState([]);
const [formValues, setFormValues] =  useState(initialFormValues);

const updateForm = (inputName,inputValue) => {
  setFormValues({...formValues,[inputName]: inputValue});
}

const submitForm = () => {
  const newTeamMember = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return;

  setTeamMembers([newTeamMember, ...teamMembers]);
  setFormValues(initialFormValues);
}

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form formValues={formValues} updateForm={updateForm} submitForm={submitForm} />
      {teamMembers.map((member, index) => {
        return <Team teamMember={member} key={index} />
      })}
    
    </div>
  );
}

export default App;
