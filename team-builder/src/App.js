import React, { useState, useEffect } from 'react'
import MemberForm from './components/MemberForm'
import Member from './components/Member'
import styled from 'styled-components'
import { render } from 'react-dom'
import axios from 'axios'
import './App.css';

const teamMembers = [
  {
    fullname: 'Jacob Bevans',
    email: 'jbev6545@gmail.com',
    location: 'St. George, Utah',
    position: 'Web Developer'
  },
  {
    fullname: 'Brayden Bevans',
    email: 'brayden.bevans@gmail.com',
    location: 'Cancun, Mexico',
    position: 'Professional Surfer'
  },
  {
    fullname: 'Madison Bevans',
    email: 'maddybevans123@yahoo.com',
    location: 'Provo, Utah',
    position: 'Pastry Chef'
  }
]

const initialFormValues = {
  fullname: '',
  email: '',
  location: '',
  position: '',
}


const StyledDiv = styled.div `

  display: inline block;
  padding: 15px;
  margin: 10px;
  text-align: center;

`;


const Title = styled.h1`

    text-align: center;
    justify-content: center;
    align-items: center;
    border: none;
    max-width: 400px;
    max-heigh: 250px;
    border-radius: 12px;
    padding: 15px;
    margin: 10px;
    font-weight: 500;
    color: black;
    background-color: #308556;
    box-shadow: 0.1;

`;




export default function App() {

  const [member, setMember] = useState(teamMembers)

  const [formValues, setForms] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => {
    setForms({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      id: Date.now(),
      fullname: formValues.fullname.trim(),
      email: formValues.email.trim(),
      location: formValues.location.trim(),
      position: formValues.position.trim()
    }

    setMember([...member, newMember])
    setForms(initialFormValues)

  }


  return (
    <StyledDiv>
      <Title>
        <h1>Join Our Team!</h1>
      </Title>

      <MemberForm 
          
          values={formValues}
          update={updateForm}
          submit={submitForm}

        />

      {
        member.map(newComer => {
          return(
            <Member key={newComer.id} details={newComer} />
          )
        })
      }

    </StyledDiv>
  );
}

