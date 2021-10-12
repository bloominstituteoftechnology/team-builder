import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, { useState, useEffect } from 'react'
import Member from './Member'

const initialFormValues={
  name:'',
  email:'',
  role:''
}


function App() {

  const [members, setMembers] = useState([]);
  const [errorText, setErrorText]= useState("")
  const [formValues, setFormValues] =useState(initialFormValues);

  const updateForm =(inputName, inputValue)=>{
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () =>{
    const newMember = {
      username: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      setErrorText("Please complete all fields before submission.");
      return;
    }
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
    setErrorText('Submission Successful');
    setTimeout(setErrorText,1100,'');
  }

  return (
    <div className="App">
      <h1>Form App</h1>
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      errorText={errorText}
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
};

export default App;
