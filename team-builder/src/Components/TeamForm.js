import React, { useState } from "react";
const TeamForm = ({addNewMember}) => {
    const [Teammember, setTeamMember]= useState({
        Username: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setTeamMember({ ...Teammember, 
            [event.target.name]: event.target.value});
        
    };
    const submitForm = event => {
        console.log(event.target)
        event.preventDefault();
        addNewMember(Teammember)
        setTeamMember({ Username: "", email: "", role: ""});

    };

    return(
        <form onSubmit={submitForm}>
        <label htmlFor= 'Username'>Username</label>
        <input 
        id= "Username"
        type="text"
        name="Username"
        placeholder="Enter Username"
        onChange={handleChanges}
        value={Teammember.Username}/>
        <label htmlFor= "email">Email</label>
        <input
        id= "email"
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChanges}
        value={Teammember.email}/>
        <label htmlFor= "role">Role</label>
        <input
        id= "role"
        type="text"
        name="role"
        placeholder="Enter role"
        onChange={handleChanges}
        value={Teammember.role}/>
        <button type='submit'>Add New member!</button>
        </form>
    );

}
export default TeamForm;
