import './App.css';
import React, { useState, useEffect } from 'react'
import Member from './components/Member'
import MemberForm from './components/MemberForm'
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    // 🔥 
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () =>{

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    axios.post('fakeapi.com', newMember)
      .then(esp=>{
        const dbFriend = esp.data;
        setMembers([dbFriend, ...members])
        setFormValues(initialFormValues)
      })
      .catch(err=>{
        console.error(err);
      })
    setMembers(members.concat(newMember));
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])

  return (
    <div className="container">
      <h2>Form App</h2>
      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        members.map(member =>{
          return(
            <Member details={member} />
          )})
      }
    </div>
  );
}

export default App;
