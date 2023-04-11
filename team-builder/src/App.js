import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Team from './Team'
import * as yup from 'yup';
import schema from './Validation/formSchema';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
  terms: false,
 }
 const initialFormErrors = {
  name: '',
  email: '',
  role: '',
}
 const initialDisabled = true 

const teamMembers = [
  {
    name: 'Luke Skywalker',
    email: 'daddysboy@tatooine.com',
    role: 'Jedi',
  },
  {
    name: 'Han Solo',
    email: 'scruffylooking@nerfherder.com',
    role: 'Scoundrel',
  },
  {
    name: 'Leia Organa',
    email: 'rebelscum@alderaan.com',
    role: 'General',
  },
  {
    name: 'Chewbacca',
    email: 'walkingcarpet@kashyyk.com',
    role: 'Pilot',
  },
]
console.log(teamMembers);

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState(teamMembers);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); 

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  const updateForm = (inputName, inputValue) => {
    validate(inputName, inputValue)
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      ...formValues,
    }
    setMembers([...members, newMember]);
  }

 

  return (
    <div className="App">
      <header className='Header'> Rebel Alliance </header>
      <div>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
      />
      </div>
      <Team teamMembers={members} />
    </div>
  );
}

export default App;
