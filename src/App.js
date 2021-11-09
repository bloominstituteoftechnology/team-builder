import React, { useState, useEffect } from 'react'
import TeamMember from './components/TeamMember';
import MemberForm from './components/MemberForm';
import './App.css';
import axios from './axios'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState('')
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    axios.post('fakeapi.com', newMember)
      .then(res => {
        const dbMember = res.data;
        setTeamMembers([dbMember, ...teamMembers]);
        setFormErrors('');
        setFormValues(initialFormValues);
      })
      .catch(err => console.error(err))


  }


  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])


  return (
    <div className='container'>
      <h1>Form App</h1>
      <h3 className='error-text'>{formErrors}</h3>

      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  )
}
