import React, { useState } from 'react';


const Form = props => {
    const [teamMember, setTeamMember] = useState ({ name: "", email: "", role: ""});

    const handleChanges = event => {
        console.log(teamMember);
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({name: "", email: "", role: ""});
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            onChange={handleChanges}
            value={teamMember.name}
            />

            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="text"
            onChange={handleChanges}
            value={teamMember.email}
            />

            <label htmlFor="role">Role</label>
            <input
            id="role"
            type="text"
            onChange={handleChanges}
            value={teamMember.role}
            />
        </form>
    )

}

