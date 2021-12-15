import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  }

  const submitForm = () => {
    const newMember= {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if(!newMember.name || !newMember.email || !newMember.role){
      setError('All sections must be filled in!');
    } else{
    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initialFormValues);
    setError('');
    }
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <h2>{error}</h2>
      <Form
      value={formValues}
      update={updateForm}
      submit={submitForm}

      />

      {
        teamMembers.map((member, idx) => {
          return <TeamMember key={idx} details={member} />
        })
      }
    </div>
  );
}

export default App;
