import React, { useState } from 'react';
import TeamData from './TeamData';

const Form = () => {
    return (
        <form>
            <label>Name</label>
            <input type='text' placeholder='name' name='name' />
            <label>Email</label>
            <input type='email' placeholder='email' name='email' />
            <label>Title Role</label>
            <input type='text' placeholder='role' name='role' />
            <input type='submit' />
        </form>
    )
};

export default Form;