import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [addedMembers, setAddedMembers] = useState([]);

  // state hold values of form
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    // implement form state updater used inside inputs' `onChange` handler that takes in name of an input and its value, and updates `formValues`
    // [inputName] -> doesn't read as string to computer, value of inputName is a string (inputValue)
    setFormValues({...formValues, [inputName]: inputValue});
  }
  
  const submitForm = () => {
    // implement submit function that will be used inside form's own `onSubmit` and make a new member object that trims whitespace from name and email
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }


  return (
    <div className="App">
      <Form 
        values={formValues}
        // update={updateForm}
        // submit={submitForm}
      />
    </div>
  );
}