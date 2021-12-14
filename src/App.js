import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
const [members, setMembers] = useState([]);
const [formValues, setFormValues] = useState(initialFormValues);
const [error, setError] = useState('');

const updateForm = (name, value) => {
  setFormValues({ ...formValues, [name]: value});
}

const submitForm = () => {
  const newMembers = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  if(!newMembers.name || !newMembers.email || !newMembers.role) {
    setError('All fields are required!');
  } else {
    axios.post('', newMembers)
    .then(res => {
      const membersFromServer = res.data;
      setMembers([ membersFromServer, ...members]);
      setFormValues(initialFormValues);
    }).catch(err => console.log(err))
    .finally(() => setError(''))
  }
}

useEffect(() => {
  axios.get('').then(res => setMembers(res.data))
}, [])

  return (
    <div className="container">
      <h1>Form App</h1>
      <h2>{error}</h2>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

    {/* {
      members.map(member => {
        return (
          <Member key={member.id} details={member} />
        )
      })
    } */}
    </div>
  );
}

export default App;
