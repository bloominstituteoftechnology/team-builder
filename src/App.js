import './App.css';
import React, { useState } from 'react';
import TeamMember from './TeamMember';
import TeamForm from './TeamForm';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [team, setTeam] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
       setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Team Member Form</p>
        <TeamForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
          />
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
