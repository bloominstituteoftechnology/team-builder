import React, {useState, useEffect} from 'react';
import Form from './Form';
import './App.css';
import Team from './Team'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [team, setTeam] = useState([]);
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeam = {
      username: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newTeam.username || !newTeam.email || !newTeam.role) {
      setError("All information must be filled out");
      return;
    };
    setTeam(team.concat(newTeam));
    setFormValues(initialFormValues);
    setError('');
  };

  return (
    <div className="App">
      <h1>Team App!</h1>
      <Form
      values ={formValues}
      update ={updateForm}
      submit ={submitForm}
      error ={error}
      />
      {
        team.map((team, idx) => {
          return (
            <Team key={idx} details={team}/>
          )
        })
      }
    </div>
  );
}

export default App;