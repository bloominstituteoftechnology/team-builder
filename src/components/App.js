import React, {useState, useEffect} from "react"
import Form from "./Form"
import Team from "./Team"
import {v4 as uuid} from "uuid"

const intialTeamList = [
  {
    id: uuid(), 
    username: 'sami',
    email: 'sami@gmail.com',
    role: 'backend engineer',
  },
]


const initialFormValues = {
  username: '',
  email: '',
  role: '',
}


const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: intialTeamList })
}
const fakeAxiosPost = (url, { username, email, role }) => {
  const newTeamMember = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}

export default function App() {
  const [teamMember, setteamMember] = useState([]) 
  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return
   
    fakeAxiosPost('fakeTeam.com', newTeamMember)
      .then(res => {
        const teamFromAPI = res.data
        setteamMember([teamFromAPI, ...teamMember])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeTeam.com').then(res => setteamMember(res.data))
  }, [])

  return (
    <div className='container'>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMember.map(person => {
          return (
            <Team key={person.id} details={person} />
          )
        })
      }
    </div>
  )
}