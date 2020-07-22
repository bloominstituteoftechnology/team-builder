import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid'
import Form from './components/form'
import Team from './components/team'


const initialFormValue = {
  name: '',
  email: '',
  role: '',
}

function App() {
const [ team, setTeam ] = useState([])
const [ form, setForm] = useState(initialFormValue)
const [memberToEdit, setMemberToEdit] = useState()

const updateForm = (inputName, inputValue) => {
  setForm({ ...form, [inputName]: inputValue})
}

const submitForm = () => {
  if(!form.name || !form.email || !form.role) return
  const newMember = {
    name: form.name.trim(),
    email: form.email.trim(),
    role: form.role,
    id: uuid()
  }
  setTeam([...team, newMember])
  setForm(initialFormValue)
}

const editMember = editedMember => {
  const newTeamMembers = team.map(member => 
    member.id === editedMember.id ? editedMember : member )
    setTeam(newTeamMembers)
    setMemberToEdit(initialFormValue)
}


useEffect(() => {
  setForm(memberToEdit || initialFormValue)
}, [memberToEdit])


  return (
    <div>
      <h1>Welcom to team Kev</h1>
      <Form update={updateForm} member={form} submit={submitForm} editMember={editMember} memberToEdit={memberToEdit}/>

    {
      team.map(member => {
        return (
          <Team member={member} setMemberToEdit={setMemberToEdit} />
        )
      })
    }
    </div>
  )
}

export default App;
