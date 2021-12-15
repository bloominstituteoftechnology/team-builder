import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import axios from 'axios';
import Members from './components/Members';


const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      setError("All fields are required, ya chump!!!");
    } else {
      axios.post("fakeapi.com", newMember)
        .then(res => {
          const membersFromServer = res.data;
          setMembers([ membersFromServer, ...members ]);
          setFormValues(initialFormValues);
        }).catch(err => console.error(err))
        .finally(() => setError(""))
    }
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </header>

      {
        members.map(members => {
          return (
            <Members key={members.id} details={members} />
          )
        })
      }

    </div>

    

  );
}

export default App;
