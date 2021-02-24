import React, { useState } from 'react';


const teamMembers = [
    {name: 'Mitch', role: 'Lead', email: 'cool@mitch.com'},
    {name: 'Alex', role: 'Senior', email: 'alex@alex.com'},
    {name: 'Sean', role: 'Junior', email: 'sean@sean.com'}
  ]
  
  const initialFormValues = {
    name: '',
    role: '',
    email: '',
  }
  
  function SimpleForm() {
    const {team, setTeam} = useState(teamMembers);
    const {newName, setNewName} = useState(initialFormValues);
  
  const change = event =>{
        const { name, value} = event.target
        setNewName({...newName, [name]: value })
  
  }

  const submit = event =>{
    event.preventDeafault()
    const newMember = {
        name: newName.name.trim(),
        role: newName.role.trim(),
        email: newName.email.trim()
    }
    setTeam(team.concat(newMember))

  }
  return (
    <div className = "container">
      <h1>Simple Form</h1>
        {team.map((nme, idx) => {
          return (
          <div key = {idx}>
             {nme.name} is a {nme.role} and his/her email is {nme.email}
            </div>
  
        )})
        }
        <form onSubmit = {submit}>
          <input name='name' type='text' onChange={change} value ={newName.name}/> 
          <input role='role' type='text' onChange={change} value ={newName.role}/>
          <input email='email' type='text' onChange={change} value ={newName.email}/>
          <button>submit</button>
        </form>
    </div>

  )
  
  }