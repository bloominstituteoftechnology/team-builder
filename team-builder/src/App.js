import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import TeamMemberForm from '../src/Form'
import TeamMember from '../src/TeamMember'

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const[formValues, setFormValues] = useState([initialFormValues]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return
    console.log("oops, error")
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <TeamMemberForm
   
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
