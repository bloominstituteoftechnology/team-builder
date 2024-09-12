import './App.css';
import React, { useState } from 'react';
import Member from './member';
import FormInput from './form';

const teamMembers = [{
  name: 'test',
  email: 'test',
  role: 'test'
}
];

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
const [member, setMember] = useState(teamMembers);

const [formValues, setValues] = useState(initialFormValues);

const updateForms = (inputName, inputValue) => {
  setValues({...formValues, [inputName]: inputValue})
};

const submitForm = () => {
  const newData = {
    id: Date.now(),
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
  }
  setMember([...member, newData])
  setValues(initialFormValues)
}

  return (
   <div>
     <h1>Hi</h1>
     <FormInput
        values={formValues}
        update={updateForms}
        submit={submitForm}
        />
      {member.map(i => {
        return(<Member key={initialFormValues.id} details={i}/>)
      })
      } 
   </div>
  );
}


