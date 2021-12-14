import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Teammate from './Teammate'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teammates, setTeammates] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newEntry = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeammates(teammates.concat(newEntry));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form values={formValues} update={updateForm} submit={submitForm}/>
        <h1>My Team</h1>
        {teammates.map((teammate, idx) => {
          console.log(teammate)
          return (
            <Teammate key={idx} details={teammate}/>
          )
        })}
      </header>
    </div>
  );
}

export default App;
