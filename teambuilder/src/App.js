import React, { useState, useEffect } from 'react'
import Form from './Form'
import Individual from './Individual'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  width: 60%;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
  display: block;
  position: center;
`

const Header = styled.h1`
  width: 70%;
  text-align: center;
  border: 1rem;
  background-color: #22bfb7;
  border-radius: 8px;
`

const FormDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 2%;
`

const initialFormValues = {
  fullName: '',
  email: '',
  role: '',
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]) 
  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (usersName, usersValue) => {
 
    setFormValues({
      ...formValues,
      [usersName]: usersValue
    })
  }

  const submitForm = () => {
 
    const { fullName, email, role } = formValues
    setTeamMembers([...teamMembers,
    {
      fullName: fullName.trim(),
      email: email.trim(),
      role: role.trim()
    }
    ])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])

  return (
    <Container>
      <Header>Form App</Header>
    <FormDiv>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      </FormDiv>

      {
        teamMembers.map(friend => {
          return (
            <Individual key={friend.id} details={friend} />
          )
        })
      }
    </Container>
  )
}
