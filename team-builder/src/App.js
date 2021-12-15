import './App.css';
import React, { useState } from 'react';
import Member from './Member';
import MemberForm from './MemberForm';


const initialFormValues = { 
  // Text input
  MemberName: '', 
  email: '', 
  // DropDown input
  role: ''}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      MemberName: formValues.MemberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.MemberName || !newMember.email || !newMember.role) {
      setError('Oopsies! You have to fill out all the fields!')
    } else {
      setMembers([...members]);
      setFormValues(initialFormValues);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to the Team!</h1>
      <h2>{error}</h2>
      <MemberForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />

        {
          members.map(member => {
            return (
              <Member key={member.id} details={member} />
            )
          })
        }
    </div>
  );
}

export default App;
