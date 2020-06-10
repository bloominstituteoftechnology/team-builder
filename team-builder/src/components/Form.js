import React, { useState } from 'react';





const Form = props =>{

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    const handleChanges = event => {
        console.log(event.target.value);
        setTeamMember({...teamMember, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({ name: '', email: '', role: '' });
    }
 return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">name</label>
        <input
            id="name"
            type="text"
            placeholder="Enter Full Name"
            onChange={handleChanges}
            value={teamMember.name}
            name="name"
        />
        <label htmlFor="email" />
        <input
            id="email"
            type="text"
            placeholder="Enter Email Address"
            onChange={handleChanges}
            value={teamMember.email}
            name="email"
        />
        <label htmlFor="role" />
        <input
            id="role"
            type="text"
            placeholder="Enter Role"
            onChange={handleChanges}
            value={teamMember.role}
            name="role"
        />
        <button type="submit">Submit Form</button>
    </form>

    );
}

export default Form;