import './App.css';
import React, {useState} from 'react'
import Form from './Form.js'
import styled from "styled-components";

const defaultFormValues = {
  username: '',
  email:'',
  role:''
}

const defaultData = [
  {
      username:"Stav",
      email:"stavcorcos@gmail.com",
      role:"developer"
  },
  {
      username:"Sergio",
      email:"sauraho@gmail.com",
      role:"artist"
  },
  {
      username:"Luigi",
      email:"lconti@gmail.com",
      role:"developer"
  }
]


const StyledDiv = styled.div`
  width:80%;
  margin-left:10%;
`

function App() {
  const [formValues, setFormValues] = useState(defaultFormValues)
  const [team, setTeam] = useState(defaultData)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName] : inputValue})
  }

  const submitForm = () => {
    const newMember = {username:formValues.username.trim(),email:formValues.email.trim(),role:formValues.role}
    if (newMember.username === "" || newMember.email === ""){
      return;
    }
    setTeam(team.concat(newMember))
    setFormValues(defaultFormValues)
  }

  return (
    <StyledDiv>
      <h1>Team Members</h1>
      <hr></hr>
      {team.map((member, idx)=>{
        return(
          <div key = {idx}>
            <h2>{member.username}</h2>
            <h3>Email: {member.email}</h3>
            <p>Role: {member.role}</p>
            <hr></hr>
          </div>
        )
      })}
      <Form values = {formValues} submit = {submitForm} update = {updateForm} />
    </StyledDiv>
  );
}

export default App;
