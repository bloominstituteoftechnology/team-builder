import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

export default function App() {
  const [members, setMembers] = useState([]);

  // state hold values of form
  const [values, setValues] = useState({name: '', email: '', role: ''});

  const submitForm = () => {
    setMembers([values, ...members]);
  }

  const updateForm = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue});
  }

  return (
    <div className='App'>
      <h1>Sign-up for the whitelist here 👀</h1>
      <Form 
        values={values}
        update={updateForm}
        submit={submitForm}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}
    </div>
  )
}