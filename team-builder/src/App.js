import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Form from './components/Form'

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
      <h1>Team Builder App</h1>
      <Form values={formValues}/>
    </div>
  );
}

export default App;