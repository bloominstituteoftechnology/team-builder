import React, { useState } from "react";


const Form = (props) => {
    //Setting teams empty state
 const [team,setTeam] = useState({name: props.name , email : "" , role: ""})
    //handling change event for inputs on team
const changes = (event) => {
    console.log("team Changes",event.target.value);
    const newTeamObject = {...team, [event.target.name]: event.target.value}
    console.log('new team obj ',newTeamObject);
    setTeam(newTeamObject);
    console.log(team);
}
    //submitting team member
        const submitMember = event => {
            event.preventDefault();
            props.newTeam(team);
        }
    //making a form
    return (
      <form onSubmit= {submitMember}>
       <label htmlFor = "name">Name</label>
        <input type = "text" placeholder = "Enter Name" name = "name" id = "name" value = {team.name} onChange={changes} />
       <label htmlFor = "email" >Email</label>
        <input type = "email" placeholder = "Email" name = "email" id = "email" value = {team.email}  onChange={changes} />
       <label htmlFor = "role">Role</label>
        <input type = "text" placeholder = "Enter Role" name = "role" id = "role" value = {team.role}  onChange={changes} />
      <button type = "submit">Add Member</button>
      </form>
    )
}

export default Form;