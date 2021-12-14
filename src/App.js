import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './form';
import Member from './member';
import axios from 'axios';


const intialFormValues = {
  username: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMember] = useState([]);
  const [formValues, setFormValues] = useState(intialFormValues);
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
      setError("Missing information, Please retry!!!");
    } else {
      // axios.post('fakeapi.com', newMember)
      //   .then(res => {
      //     const memberFromServer = res.data;
      //     setMember([memberFromServer, ...members]);
      //     setFormValues(intialFormValues);
      //   }).catch(err => console.error(err))
      //   .finally(() => setError(""))
      setMember(members.concat(newMember));
      setFormValues(intialFormValues);
    }
  }
  // useEffect(() => {
  //   axios.get('fakeapi.com').then(res => setMember(res.data))
  // }, [])



  return (
    <div className='container'>
      <h1>Team Builder App</h1>
      <h3>{error}</h3>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        members.map((member, idx) => {
          return (
            <Member key={idx} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
