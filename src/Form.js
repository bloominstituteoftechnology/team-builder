import React, { useState } from 'react';
import styled from 'styled-components';

const Formstyling = styled.form`
    width: 50%;
    margin: 0 auto;
    font-weight: bolder;
    box-shadow: 1px 1px darkgray;
    background-color: lightblue;
`;
const ButtonStyling = styled.input`
    background-color: rgb(157, 81, 0);
    font-weight: bold;
    color: lightblue;
`;


const Form = () => {
    // const addNewMember = member => {
    //     const newMember = {
    //         id: Date.now(),
    //         name: formData.name
    //     };
    //     setFormData(...formData, newMember)
    // } 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const onInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Formstyling onSubmit={event => {
            event.preventDefault();
            // onInputChange();
        }}>
            <label>Name</label>
            <input type='text'
                onChange={onInputChange} placeholder='name' name='name' id='name' />
            <label>Email</label>
            <input type='email'
                onChange={onInputChange}
                placeholder='email' name='email' id='email' />
            <label>Title Role</label>
            <input type='text'
                onChange={onInputChange}
                placeholder='role' name='role' id='role' />
            <ButtonStyling type='submit' id='submit' />
        </Formstyling>
    )
};

export default Form;