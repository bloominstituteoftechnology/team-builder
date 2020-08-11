import React, { useState } from 'react'


const Forms = (props) =>{
    

    const [teamMember, setTeamMember] =useState({ name: "", email: "", role: ""  });


    const handleChanges = (event) =>{
    
    const newTeamObj ={...teamMember,[event.target.id]: event.target.value,}
    console.log ("handled change!",event.target.value)
      setTeamMember(newTeamObj)
      
    
    };
    console.log("Team Member", teamMember)
    

    const submitForm = (event) => {

        event.preventDefault();
        props.addNewTeamMember(teamMember);
        console.log("submitted!",event)
        setTeamMember({name: "", email: "", role: "" });// resets form after adding to app state.

      };

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input name="title" id="name" type="text" placeholder ="Enter name"onChange={handleChanges} value={teamMember.name}/>
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" pattern=".+@gmail.com" size="30" placeholder="Enter gmail" onChange={handleChanges} value={teamMember.email}/>
            <br />
            <label htmlFor="role"> Role: </label>
            <select onChange={handleChanges} id="role" value={teamMember.role}>    
                <option value='Please choose option'>Please choose option</option>
                <option value='Full Stack Developer'>FS Dev</option>
                <option value='Front End Developer'>FE Dev</option>
                <option value='Back End Developer'>BE Dev</option>
                <option value='UI/UX Developer'>UI/UX</option>
                <option value='Network Manager'>Network Manager</option>
                <option value='iOS Developer'>iOS</option>
            </select>
            <br />
            <button type= "submit"> Add Team Member</button>
        </form>
    )
}

export default Forms;


