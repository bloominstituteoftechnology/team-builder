import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';
import './App.css';
import Form from './components/Form';
import MemberCard from './components/MemberCard'
import styled from 'styled-components';


const Container = styled.div`

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
  `
const MainTitle = styled.div`
  font-size: 3rem;
  text-align: center;
`
var initialTeam = [
{id: uuid(), fname: 'Jack', lname: 'Daly', job: 'Lead Developer', email: 'jcdaly97@gmail.com'},
{id: uuid(), fname: 'Dack', lname: 'Jaly', job: 'Dead Leveloper', email: 'dcjaly79@gmail.com'},

];



function App() {
  //state
  const [team, setTeam] = useState(initialTeam)
  const [formValues,setFormValues] = useState({
    fname: '',
    lname: '',
    job: '',
    email: ''
  })

  //event handlers
  const onInputChange = event =>{
    const changedInput = event.target.name;
    const newValue = event.target.value;
    setFormValues({
      ...formValues,
      [changedInput]: newValue,
    })
  }

  const onFormSubmit = event=>{
    event.preventDefault();

    const newMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      job: formValues.job,
      email: formValues.email
    }

    setTeam([...team, newMember]);
  }


    return (

      <div className="App">
      <MainTitle>
        My Team
      </MainTitle>
        <Container>
        { 
        team.map( member=><MemberCard fname = {member.fname} lname = {member.lname} job = {member.job} email = {member.email}/>)
        }
        </Container>  
        
        <Form
        onInputChange = {onInputChange}
        onFormSubmit = {onFormSubmit}
        formValues = {formValues}
        />
      </div>
    );
}

export default App;
