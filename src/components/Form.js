import React, { useState } from "react";

const Form = props =>{
    // console.log(props)
    const [team, setTeam] = useState({name: "", email: "", role: ""});

    const teamChange = e =>{
        console.log(e.target.name);
        
        setTeam({...team, [e.target.name]: e.target.value
                        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(team);
        setTeam({ name: "", email: "", role: ""});
    };


    return(
        <form onSubmit={submitForm}>
         <label htmlFor="name">Name: </label>
         <input
            id="name"
            type="text"
            name="name"
            onChange={teamChange}
            value={team.name}
            />
            <label htmlFor="email">Email: </label>

              <input
            id="email"
            type="text"
            name="email"
            onChange={teamChange}
            value={team.email}
            />
            <label htmlFor="role">Role: </label>

            <input
            id="role"
            type="text"
            name="role"
            onChange={teamChange}
            value={team.role}
            />
            <button type="submit">Add Member</button>
        </form>
    )


}


export default Form;