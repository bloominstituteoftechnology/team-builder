import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Member from './Components/Member'
import TeamForm from './Components/TeamForm'
import './App.css';

const initialTeamList = [
  {
    id: uuid(),
    name: 'Christina',
    email: 'christina@christina.com',
    role: 'Data Scientist'
  },
  {
    id: uuid(),
    name: 'Meredith',
    email: 'meredith@meredith.com',
    role: 'Back End Developer'
  },
  {
    id: uuid(),
    name: 'Alex',
    email: 'alex@alex.com',
    role: 'Front End Developer'
  },
  {
    id: uuid(),
    name: 'Jackson',
    email: 'jackson@jackson.com',
    role: 'UX Designer'
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { name, email, role }) =>{
  const newTeamMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}

function App() {
  const [teamMember, setTeamMember] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue}
    setFormValues(updatedFormValues)
  }

  const submitForm = ()=> {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return
    fakeAxiosPost('fakeapi.com', newTeamMember)
      .then(res => {
        const teamMemberFromAPI = res.data
        setTeamMember([ teamMemberFromAPI, ...teamMember])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeamMember(res.data))
  }, [])

  return (
    <div className='container'>
      <header><h1>Team Members</h1></header>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMember.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }  
    </div>
  )
}

export default App;
