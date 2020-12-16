import './App.css';
import React, { useState, useEffect } from 'react'
import axios from './axios'
import Form from './Form'
import Members from './Members'

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

export default function App() {
  const [teamMembersList, setTeamMembersList] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    } 

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
    return
      axios
        .post("fakeapi.com", newTeamMember)
        .then( (res) => {
          setTeamMembersList([newTeamMember, ...newTeamMember])
          setFormValues(initialFormValues)
        })
        .catch( (err) => {
          debugger
        })
  }

  useEffect( () => {
    axios.get("fakeapi.com").then( (res) => setTeamMembersList(res.data))
  }, [])

  return (
    <div className="container">
      <h1> Team Builder</h1>

      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {teamMembersList.map( (members) => {
        return <Members key={members.id} details={members} />
      })}
    </div>
  );
}
