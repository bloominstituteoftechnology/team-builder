import React, { useState } from "react";
import styled from "styled-components";

const TeamForm = styled.form`
display: flex;
flex-direction: column;
width: 500px;
margin: auto;
`;

const Form = props => {
    const [teamMember, setTeamMember] = useState ({
        name: "",
        email: "",
        role: "",
    });

    const changeHandler = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value })
    };

    const submitForm = event => {
        event.preventDefault();
        props.addTeamMember(teamMember);
        setTeamMember({name: "", email: "", role: ""});
    }


    return(
        <TeamForm onSubmit={submitForm}>
            <label htmlFor="name">Team Member Name:</label>
            <input name="name" id="name" type="text" placeholder="Name" value={teamMember.name} onChange={changeHandler} />

            <label htmlFor="email">Team Member Email:</label>
            <input name="email" id="email" type="email" placeholder="Email" value={teamMember.email} onChange={changeHandler} />

            <label htmlFor="role">Team Member Role:</label>
            <textarea name="role" id="role" type="text" placeholder="Role" value={teamMember.role} onChange={changeHandler} />

            <button type="submit">Add Team Member</button>
        </TeamForm>
    )
}

export default Form;