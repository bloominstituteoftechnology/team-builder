import React, { useState } from "react";

// import styled from 'styled-components';

import Form from './Form';

// const Div = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// `
// const SubDiv = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// width: 40%;
// padding: 1%;
// `



const TeamList = props => {
    const [member, setMember] = useState({
        id: '',
        name: '',
        email: '',
        role: '',
    })

    const changeHandler = event => {
        // const newObj = {...note}
        // newObj[event.target.name] = event.target.value;
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewTeam(newMember)
    }

    return (
            <form onSubmit={submitForm}> 
                    <label htmlFor='name'></label>
                        <input type='text' name='name' value={member.name} placeholder='Name' onChange={changeHandler} />
                    <label htmlFor='email'></label>
            <input type='text' name='email' placeholder='Email' value={member.email} onChange={changeHandler} />
                        <label htmlFor='email'></label>
            <input type='text' name='role' placeholder='Role' value={member.role} onChange={changeHandler} />

                <button type='submit'>Add Team Member</button>
            </form>
      
    );



}

export default TeamList;
