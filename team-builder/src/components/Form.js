import React, { useState } from 'react';

const Form = props =>{

    const [teamMembers, setTeamMembers] = useState({
        name: '',
        email: '',
        role: ''
    });
    const handleChanges = event => {
        console.log(event.target.value);
        setTeamMembers({...teamMembers, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMembers);
        setTeamMembers({ name: '', email: '', role: '' });
    }
 return (
    <form onSubmit={submitForm}>
        <div>
        <label htmlFor="name">name</label>
        <input
            id="name"
            type="text"
            placeholder="Enter Full Name"
            onChange={handleChanges}
            value={teamMembers.name}
            name="name"
        />
        </div>
        <label htmlFor="email" />
        <input
            id="email"
            type="text"
            placeholder="Enter Email Address"
            onChange={handleChanges}
            value={teamMembers.email}
            name="email"
        />
        <label htmlFor="role" />
        <input
            id="role"
            type="text"
            placeholder="Enter Role"
            onChange={handleChanges}
            value={teamMembers.role}
            name="role"
        />
        <button type="submit">Submit Form</button>
    </form>

    );
}

export default Form;