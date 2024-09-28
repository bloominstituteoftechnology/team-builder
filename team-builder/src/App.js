import './App.css';
import React, {useState} from 'react'

function App() {
  const people =[
    {name:'Luis', email:'Luis1234@gmail.com', role:'Programmer'},
    {name:'Alex', email:'Alex1234@gmail.com', role:'Driver'},
    {name:'Richard', email:'Richard1234@gmail.com', role:'Driver'},
    {name:'Angel', email:'Angel1234@gmail.com', role:'Welder'}
  ]
  const initialFormValue = {
    name: '',
    email: '',
    role: '',
  } 
  const [teamMember, setTeamMember] = useState(people)
  const [formValues, setFormValues] = useState(initialFormValue)

  const change = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]: value })
  }

  const submit = evt => {
    evt.preventDefault()
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    if (!newPerson.name || !newPerson.email || !newPerson.role) {
      return;
    }
    setTeamMember(teamMember.concat(newPerson))
    setFormValues(initialFormValue)
  }

  return (
    <div className = 'container'>
      
      <h1>Team Builder</h1>
      <div className = 'form'>
      <form  onSubmit={submit}>
        <input name='name' type='text' onChange={change} value={formValues.name} placeholder='name'/>
        <input name='email' type='text' onChange={change} value={formValues.email} placeholder='email'/>
        <input name='role' type='text' onChange={change} value={formValues.role} placeholder='role'/>
        <button>Submit</button>
      </form>
      </div>
        <div className = 'nameContainer'>
          {teamMember.map((member, idx) =>{
            return (
              <div key = {idx} className = 'listContainer'>
                <div className = 'name'>
                Name: {member.name}
                </div>
                <div className = 'email'> 
                Email: {member.email} 
                </div>
                <div className = 'role'>
                Role: {member.role}
                </div>
              </div>
            )
          }
          )}
        </div>
     
    </div>
    
  )}

export default App;
