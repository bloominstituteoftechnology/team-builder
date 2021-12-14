import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teammates, setTeammates] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newEntry = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeammates(teammates.concat(newEntry));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>People</h1>
        <h2>{error}</h2>
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
      </header>
    </div>
  );
}

export default App;
