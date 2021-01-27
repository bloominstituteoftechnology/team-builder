import React, { useState } from 'react';
import './App.css';
import Form from './Form'

const initialValues = {
  name:'',
  email:'',
  role:'',

};


function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
      setFormValues({
        ...formValues,
        [inputName]: inputValue,
      });
  }
  const submitForm = () => {
      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role,
      };

      if (newMember.name || !newMember.email || !newMember.role){
        return;
      } 

      setTeamMember([...teamMember, newMember])
      setFormValues(initialValues)
      
  }

  return (
    <div className="App">
      <div>
        <h1>Team Members!</h1>
        <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        
         />

      </div>
      {
        teamMember.map((member) => {
          return (
            <div>
              <h2>{member.name}</h2>
              <h3>email: {member.email}</h3>
              <h4>role: {member.role}</h4>
             </div>
          )
        })
      }
    </div>
  );
}

export default App;
