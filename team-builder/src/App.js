import React, { useState } from 'react'
import MembershipForm from './MembershipForm'
import Member from './Member'


import './App.css';

const initFormValue = {

  username: "",
  email: "",
  role: "",

}

export default function App() {
  const [teamMember, setteamMember] = useState([])

  const [formValues, setFormValues] = useState(initFormValue)

  const updateForm = (inputName, inputValue) => {

    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    const newMember = {

      username: formValues.usernam.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.username || !newMember.email || !newMember.role) return
  }


  return (
    <div className="container">
      <h1>Team Builder</h1>
      <MembershipForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {teamMember.map((teamMember) => {
        return <Member key={teamMember.id} details={teamMember} />
      })}
    </div>
  );
}
