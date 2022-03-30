import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Form from './Components/Form'

function App() {
  const  [members, setMembers] = useState([])
  const [values, setValues] = useState({ name: '', email:'', role: ''})



  onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name: '', email:'', role: ''});
  }

  onChange = (name, value) => {
    setValues({ ...values,  [name]: value})
  }
  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}

        />
    </div>
  );
}

export default App;
