import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from  './Form';
import TeamMember from './TeamMember';

function App() {
  const initialMembersList = [
    {
      name: 'Virginia',
      email: 'virginialdport@gmail.com',
      role: 'Server',
    },
  ]
  
  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }
  
  
  function App() {
    const [members, setMembers] = useState(initialMembersList)
    const [formValues, setFormValues] = useState(initialFormValues)
  
    const onInputChange = event => {
      const {name} = event.target
      const {value} = event.target
  
      setFormValues({...formValues, [name]:value})
    }
  
    const onSubmit = event => {
      event.preventDefault()
  
      if (
        !formValues.name.trim() ||
        !formValues.email.trim() ||
        !formValues.role.trim()
      ){
        return
      }
        const newMember = { ...formValues}
        setMembers([newMember, ...members])
        setFormValues(initialFormValues)
    }
  
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Team Members!</h1>
        </header>
        <Form values={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>
   
        {
          members.map(member => {
            return(
             <TeamMember key={member.id} details={member}/>
     
            )
          })
        }
      </div>
     );
   }
  }
   
   export default App;
