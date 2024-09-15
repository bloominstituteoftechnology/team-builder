import React, { useState } from 'react';

const Form = (props) => {
    
 const [team,setTeam] = useState({name: props.name , email : "" , role: ""})
  
const changes = (event) => {

    console.log("changes",event.target.value);

    const newTeam = {...team, [event.target.name]: event.target.value}
    console.log(newTeam);
    setTeam(newTeam);
    console.log(team);
}
 
        const addMember = event => {
            event.preventDefault();
            props.newTeam(team);
        }

    return (
      <form onSubmit= {addMember}>
       <label htmlFor = "name">Name</label>
        <input type = "text" placeholder = "Name" name = "name" id = "name" value = {team.name} onChange={changes} />
       <label htmlFor = "email" >Email</label>
        <input type = "email" placeholder = "Email" name = "email" id = "email" value = {team.email}  onChange={changes} />
       <label htmlFor = "role">Role</label>
        <input type = "text" placeholder = "Role" name = "role" id = "role" value = {team.role}  onChange={changes} />
      <button type = "submit">Join us!</button>
      </form>
    )
}

export default Form 