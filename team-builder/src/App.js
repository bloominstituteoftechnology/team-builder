import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import MemberForm from './Componets/MemberForm';
// import { Route, Link } from 'react-router-dom';
import Member from './Componets/Member';



const initialFormValues = {
  memberName: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const[formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    // event.preventDefault();
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(!newMember.memberName || !newMember.email || !newMember.role){
      setError('All Fields Required');
    }
  }

  return (
    <div className="App">
      <h1>{error}</h1>
      <MemberForm 
       values={formValues}
       update={updateForm}
       submit={submitForm}
      />

    {
    members.map(member  => {
      return(
        <Member key={member.id} details={member} />
     )
      })
     }   
    </div>
  );
}

export default App;
