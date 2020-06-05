import React, { useState } from 'react';
import TeamData from './TeamData';

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
        <form onSubmit={event => {
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
            <input type='submit' id='submit' />
        </form>
    )
};

export default Form;