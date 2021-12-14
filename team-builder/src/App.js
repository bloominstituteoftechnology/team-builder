import React, { useState } from 'react'
import './App.css';
import Form from './form';



const initialFormValues = {
  name: '',
  email: '', 
  role: '',
}

const membersList = [
  { name: 'Eli', email: 'test@test.com', role: 'Fullstack'},
  { name: 'Britt', email: 'abc@123.com', role: 'Senior'},
]

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMember, setTeamMember] = useState(membersList);


  const updateList = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMember(teamMember.concat(newMember));
    setFormValues(initialFormValues);
}


  return (
    <div className='container'>
      <h1>Team Members</h1>
     

      <Form 
        values={formValues}
        update={updateList}
        submit={submitForm}
      />
    </div>
  );
}


