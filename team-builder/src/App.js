import './App.css';
import React, { useState, useEffect } from 'react'
import TeamMember from './TeamMember';
import TeamMemberForm from './TeamMemberForm';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState('')
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      setError('All fields are required!')
    } else {
      setMembers([ newMember, ...members ]);
      setFormValues(initialFormValues);
      setError("")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Team Members
        </h1>
        <h2>
          {error}
        </h2>
      
      <TeamMemberForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        members.map(member => {
          return (
            <TeamMember key={member.id} details={member}/>
          )
        })
      }
      </header>
    </div>
  );
}

export default App;
