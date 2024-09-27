import './App.css';
import React, { useState } from 'react'
import Form from './Form.js';


const memberList = [
  {name: 'Jason', email: 'Jason@email.com', role: 'Front-End' },
  {name: 'Mat', email: 'Mat@email.com', role: 'Front-End' },
  {name: 'Todd', email: 'Todd@email.com', role: 'Back-End' }
]

const initialValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  
  const [members, setMembers] = useState(memberList)
  const [values, setValues] = useState(initialValues)

  const change = evt => {
    const {name, value} = evt.target
    setValues({...values, [name]: value })
    
  }

  const submit = evt => {
    evt.preventDefault()
    const newMember = {
      name: values.name.trim(),
      email: values.email.trim(),
      role: values.role.trim(),
    }
    setMembers(members.concat(newMember))
    setValues(initialValues)
  }
  
  
  return (
    <div className="App">
      <h1> Members </h1>
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            <h2>Name: {member.name}</h2>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>  
        )
      })
      }
      <Form submit = {submit} change = {change} values = {values} />

    </div>
  );
}

export default App;
