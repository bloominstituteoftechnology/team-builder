import React, { useState, useEffect } from 'react'
import Member from './Member'
import MemberForm from './MemberForm'
import axios from '../axios'


const initialFormValues = {

  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [members, setMembers] = useState([]) 

  
  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => {
    
  }

  const submitForm = () => {
 
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])

  return (
    <div className='container'>
      <h1>Form App</h1>

      <MemberForm
     
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}