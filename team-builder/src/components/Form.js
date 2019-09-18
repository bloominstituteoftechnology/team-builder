import React, { useState } from 'react';


const Form = props => {
    const [teamMember, setTeamMember] = useState ({
        name: "", 
        email: "", 
        role: ""
    });

    const handleChanges = event => {
        console.log(teamMember);
        setTeamMember({...teamMember, [event.target.id]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        const newTeamMember = {
            ...teamMember,
            id:Date.now()
        }
        props.addNewTeamMember(newTeamMember);
        setTeamMember({name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <div className = "entry-field">
                <label htmlFor="name">Name</label>
                <input
                id="name"
                type="text"
                value={teamMember.name}
                onChange={handleChanges}
                />
            </div>

            <div className = "entry-field">
                <label htmlFor="email">Email</label>
                <input
                id="email"
                type="text"
                value={teamMember.email}
                onChange={handleChanges}
                />
            </div>
            <div className = "entry-field">
                <label htmlFor="role">Role</label>
                <input
                id="role"
                type="text"
                value={teamMember.role}
                onChange={handleChanges}
                />
            </div>
            <button type="submit">Add Team Member</button>
        </form>
    )
}

export default Form;

