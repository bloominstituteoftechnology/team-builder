import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form `
    border: 2px solid black;
    padding: 5%;
    margin: 10%;
    display: flex;
    justify-content: space-evenly;    
`

const TeamForm = props => {
    const [card, setCard] = useState({
        name: "",
        email: "",
        role: "",
    });
    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value })
    };
    const getSelectValue = e => {
        const newCard = {...card};
        newCard.role = e.target.value;
        setCard(newCard);
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamCard(card);
    };
    return (
        <StyledForm onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                placeholder="first and last"
                />
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="email"
                name="email"
                onChange={handleChanges}
                />
            <label htmlFor="role">Role</label>
            <select id="list" name="list" onChange={getSelectValue}>
                <option/>
                <option value="Marketing Strategist">Marketing Strategist</option>
                <option value="Content Specialist">Content Specialist</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Editor">Editor</option>
            </select> 
            <button type="submit">Submit</button>
        </StyledForm>
    )
}

export default TeamForm;