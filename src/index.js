import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const teamMembers = [
  { name: "Amlak", email: "amlakbarkon@gmail.com", role:" Web Developer"},
  { name: "Barkon", email: "amlakbarkon@gmail.com", role:" Web Developer"},
  { name: "Helina", email: "amlakbarkon@gmail.com", role:" Web Developer"},
  { name: "Mitu", email: "amlakbarkon@gmail.com", role:" Web Developer"}
]
const initialFormValues = {
  name:'',
  email: '',
  role: ''
}
function SimpleForm(){
  const [ members, setMembers ] = useState( teamMembers)
  const [ forValues, setFormValues ] = useState( initialFormValues)
  const change = event => {
   const { name, value } = event.target;
   setFormValues({...forValues, [name]: value })
  }
  const submit = event => {
    event.preventDefault();
    const newMember = {
      name: forValues.name.trim(),
      email: forValues.email.trim(),
      role: forValues.role.trim()

    }
    setMembers([...members, newMember]);
  }
  return (
    <div className="container">
      <h1>Simple Form</h1>
      <form onSubmit={submit}>
        
            <label htmlFor="name">First Name:</label>
            <input type="text" name="name" value={forValues.name} onChange={ change} placeholder="FirstName"></input>< br/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={forValues.email} onChange={change}placeholder="amlak@yahoo.com"></input>< br/>

            <label htmlFor="role">First Name:</label>
            <input type="text" name="role" value={forValues.role} onChange={change}></input>< br/>

            <label htmlFor="role">Password:</label>
            <input type="password" name="password" value={forValues.password} onChange={change}></input>< br/>
            <button>Submit</button>
        
       </form>
      {
        members.map((member, idx) => {
         return(

           <div key="idx"className="memberContainer">
             <p>Name: {member.name}</p>
             <p>Email: {member.email}</p>
             <p>Role: {member.role}</p>
             <p>Password: {member.password}</p>
          </div>
         )
        })
      
      }
       
    </div>
  )
  
}
ReactDOM.render(

    // <App />,
     <SimpleForm />,
  document.getElementById('root')
);

