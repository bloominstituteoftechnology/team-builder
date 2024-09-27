import React, { useState } from 'react';
import './App.css';

const teamMembersList =[]

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMembersList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = event =>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  }

  const submit = event =>{
    event.preventDefault()
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    console.log(typeof(teamMembers), teamMembers)
    setTeamMembers(teamMembers.concat(newTeamMember));
    setTeamMembers(initialFormValues)

  }

  return (
    <div className="App">
      <h2>Team Builder</h2>
      {teamMembers.map((member, idx) =>{
        return(
        <div key = {idx}>
          Name: {member.name} Email: {member.email} Role: {member.role}
        </div>
      )})}
      <form onSubmit ={submit}>
        <input 
          onChange = {change}
          type ='text'
          maxLength = '20'
          placeholder = 'Name'
          id = 'nameInput'
          name='name'
          value = {formValues.name}
        />
        <input 
          onChange = {change}
          type ='text'
          maxLength = '20'
          placeholder = 'Email'
          id = 'emailInput'
          name='email'
          value = {formValues.email}
        />
        <select 
        onChange = {change}
        id = 'roleSelect' 
        name = 'role'
        value = {formValues.role}>
          <option value=''>Select</option>
          <option value='Backend Engineer'>Backend Engineer</option>
          <option value='FrontEnd Engineer'>FrontEnd Engineer</option>
          <option value='Full Stack Web Developer'>Full Stack Web Developer</option>
        </select>
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
