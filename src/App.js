import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';




const App = () => {

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }

  const [teamMember, setTeamMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues ({...formValues, [inputName]: inputValue})
  }

  const submitForms = () => {
    
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }

    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return
    

    // axios
    // .post('fakeapi.com', newTeamMember)
    // .then((res) => {
    setTeamMember([...teamMember, newTeamMember]);
    setFormValues([initialFormValues]);
    // .catch((err) => {
    //   console.log(err);
    
  };

  // useEffect(() => {
  //   axios
  //   .get('fakeapi.com')
  //   .then((res) => setTeamMember(res.data))
  //   .catch((err) =>{
  //     console.log(err);
  //   })
  //   }, []);

  

  return (
    <div className="App">
        <h2>Team Members</h2>
        <Form 
        formValues={formValues}
        update={updateForm}
        submit={submitForms}
        />
      
        {teamMember.map((member) => {
          return (
            <div>
                  <h2>{member.name}</h2>
                  <h3>Email: {member.email}</h3>
                  <h4>Role: {member.role}</h4>
                  </div>
          )
          
        })}
        
    </div>
  );
}

export default App;
