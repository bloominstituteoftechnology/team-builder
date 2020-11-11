import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border: black 3px solid;
    border-radius: 10px;
    margin: 2%;
    padding: 1%;
    width: auto;

    .inputItem {
        margin: 1%;
    }

    .inputItem input {
        width: 100%;
        margin-top: .5%;
        box-sizing: border-box; // needed to make input box fit inside div
    }

    .inputItem button {
        float: right;
        width: 5rem;
    }
`

const Form = (props) => {

    const [user, setUser] = useState ({
        name: '',
        email: '',
        role: ''
    });

    const newUser = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const addUser = event => {
        event.preventDefault();
        props.newUser(user);
    }

    return (
        <StyledForm onSubmit = { addUser }>
            <div className='inputItem'>
                <label>Name: </label>
                <input type='text' placeholder='name' name='name' id='name' value={user.name} onChange={newUser} />
            </div>
            <div className='inputItem'>
                <label>Email: </label>
                <input type='email' placeholder='user@domain.com' name='email' value={user.email} onChange={newUser} />
            </div>
            <div className='inputItem'>
                <label>Role: </label>
                <input type='role' placeholder='programmer' name='role' value={user.role} onChange={newUser} />
            </div>
            <div className='inputItem'>
               <button type='submit'>Add</button>
            </div>
        </StyledForm>
    );
};

export default Form