import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <p>{teamMembers}</p>
      <Form
      value={formValues}

      />
    </div>
  );
}

export default App;
