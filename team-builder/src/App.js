import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [formValues, setFormValues] = useState([initialFormValues]) // Step 1

  // Step 8
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]:inputValue,
    })
  }

  const submitForm = () => {
    let newForm = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    axios.post('fakeapi.com', newFriend)
    .then(res => {
      setFormValues(initialFormValues)
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="Contianer">
      <h1>Team Builder</h1>

      <Form  // Step 2
      values={formValues}
      update={updateForm}
      // submit={submitForm}
      />

      {
        
      }

    </div>
  );
}

