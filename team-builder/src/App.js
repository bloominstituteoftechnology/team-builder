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
      <h1>Team Members</h1>

      <h2>{error}</h2>
      <Form 
        values={formValues}
        update={updateList}
        submit={submitForm}
      />
      <div>
        {teamMember.map((member, index) => (
        <div key={index}>
          <p>Member: {member.name} Role: {member.role} Email: {member.email}</p>
        </div>
      ))}
      </div>
    </div>
  );
}


