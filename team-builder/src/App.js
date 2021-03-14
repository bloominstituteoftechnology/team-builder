
import React from 'react';
import { useState } from 'react';
import './App.css';
import Member from './Member';
import Form from './Form';

//THIS IS WHAT THE SHAPE OF THE FORM LOOKS LIKE
const initialValues = {
  //TEXTS//
name: "",
email: "",
//DROP-DOWN MENUE//
role: ""
}
function App() {
const [members, setMembers] = useState([]);

//LET'S HAVE A STATE TO HOLD ALL FORM VALUES
const [formValues, setFormValues] = useState(initialValues);
//LET'S GET A FUNC TO UPDATE OUR STATE/ AS THE INPUT COMING IN
const updateForm = (inputName, inputValue) => {
setFormValues({...formValues,[inputName]: inputValue})
}
const submitForm = () => {
  // IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  * make a new member object, trimming whitespace from name and email
  const newMember = {
    id: Date.now(),//LOOKS LIKE I NEED AN ID FOR EACH MEMBER
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  setMembers([...members, newMember])
  //  * also on success clear the form
  setFormValues(initialValues)
  
}

  return (
    <div className="App">
      <h1>Form App</h1>
      <h2>Team Members Lists</h2>
      <Form
      // 🔥 The form component needs its props.
        //  Check implementation of Form
        //  to see what props it expects.
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      <ul>
      {
       members.map(member => {
          return (
            <Member key={member.id} details={member} onSubmit={submitForm} />
          )
        })
      }
      </ul>
    </div>
  );
}
export default App;