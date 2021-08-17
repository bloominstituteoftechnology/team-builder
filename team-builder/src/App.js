import React, { useEffect, useState } from 'react';
import axios from '../axios';

import logo from './logo.svg';
import './App.css';
import { assertExpressionStatement } from '@babel/types';

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
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newTeam.name || !newTeam.email || !newTeam.role) {
      setError('Please fill out all of the empty fields');
    }
    axios.post('fakeapi.com', newTeam)
      .then(res => {
        setTeam([res.data, ...team]);
        setFormValues(initialFormValues);
        setError('');
      })
      .catch(err => {
        console.error(err);
      })
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeam(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Team Form App</h1>
      {/* <h3>{error}</h3> */}
      <Form 

      />
    </div>
  );
}

export default App;
