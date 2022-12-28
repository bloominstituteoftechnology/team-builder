import React, { useState, useEffect } from 'react'
import Form from "./Components/Form";
import members from './Components/Members';
import './App.css';
import axios from 'axios';

const initialFormValues = {
  username:'',
  email:'',
  role:'',
}

function App() {

  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name:"", email: "", role: ""});
  const [formValues, setFormValues] = useState(initialFormValues);
  const[formError, setFormError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }
  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
   if(!newMember.username || !newMember.email || !newMember.role) {
    setFormError(" Must enter username, email AND role! it ir REQUIRED!");
   } 
 axios.post("fakeapi.com", newMember)
 .then(res => {
  setMembers([ res.data, ...members ]);
  setFormValues(initialFormValues);
 })
  .catch(err => console.error(err))
}
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])
 
  return (
    <div className="App">
     <h1>Team Builder App!</h1>
     {formError && <h2 className="error">{formError}</h2>}
     <Form
     values={formValues}
     update={updateForm}
     submit={submitForm}
     />
     {
      members.map(members => {
        return (
          <members key={members.id} details={members} />
        )
      })
     }
    </div>
  )
}

export default App;
