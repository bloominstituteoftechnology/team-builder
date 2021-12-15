import React, { useState } from 'react'
import './App.css';
import Form from './form';


const initialFormValues = {
  name: '',
  email: '', 
  role: '',
}

const membersList = [
  { name: 'John', email: 'test@test.com', role: 'Fullstack'},
  { name: 'Britt', email: 'abc@123.com', role: 'Senior'},
]

export default function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMember, setTeamMember] = useState(membersList);
  const [error, setError] = useState('');


  const updateList = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = (event) => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      setError('Looks like your missing something!');
    } else {
      setTeamMember(teamMember.concat(newMember));
      setFormValues(initialFormValues);
      setError('')
    }
}


  return (
    <div className='container'>
      <h1>Create Your Team</h1>
      <Form 
        values={formValues}
        update={updateList}
        submit={submitForm}
      />
      <h4 className='error'>{error}</h4>
      <h2>Team Members:</h2>
      <div className='memberList'>
        {teamMember.map((member, index) => (
        <div className='member' key={index}>
         <h3> Member: {member.name}</h3> 
         <p>Role: {member.role}</p>
         <p>Email: {member.email}</p>
        </div>
      ))}
      </div>
    </div>
  );
}


