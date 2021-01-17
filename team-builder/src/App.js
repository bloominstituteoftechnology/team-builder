import React, { useState } from 'react';
import Form from './components/Form'
import Member from './components/Member'
import './App.css';

const intiialFormValues ={
  name: '',
  email: '',
  role: '',
  status: ''
}




function App() {

  
  const [formValues, setFormValues] = useState(intiialFormValues)

  const [members, setMembers]= useState([])

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () =>{
    const newMember ={
      name: formValues.name.trim(),
      email: formValues.email.trim,
      role: formValues.role,
      status: formValues.status
    }
    if(!newMember.name || !newMember.email|| !newMember.role|| !newMember.status) return;

    setMembers(members.concat(newMember))
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Please Enter Your Information</h4>
      <Form 
        values={formValues}
        update={updateForm}
        submit ={submitForm}
      />


      <h3>Current Members</h3>
          <Member details ={formValues} />
     
      
    </div>
  );
}

export default App;
