import React, { useState } from 'react'


const Forms = (props) =>{
    

    const [teamMember, setTeamMember] =useState({ name :props.name,email :props.email, role: props.role, });


    const handleChanges = (event) =>{
    
    const newTeamObj ={...teamMember,[event.target.name]: event.target.value}
    console.log ("handled change!",event.target.value)
      setTeamMember({newTeamObj})
      
    
    };
    console.log("Team Member", teamMember)
    

    const submitForm = (event) => {

        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({name: "", email: "", role: "" });// resets form after adding to app state.
      };
    

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input name="title" id="name" type="text" placeholder ="Enter name"onChange={handleChanges} value={teamMember.name}/>
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" pattern=".+@gmail.com" size="30" placeholder="Enter gmail" onChange={handleChanges} value={teamMember.email}/>
            <br />
            <label htmlFor="role" >Role:</label>
            <select onChange={handleChanges} value={teamMember.role}>    
                <option value='1'>FS Dev</option>
                <option value='2'>FE Dev</option>
                <option value='3'>BE Dev</option>
                <option value='4'>UI/UX</option>
                <option value='5'>Network Manager</option>
                <option value='6'>iOS</option>
            </select>
            <br />
            <button type= "submit"> Add Team Member</button>
        </form>
    )
}

export default Forms;


