import React, { useState } from 'react';
import TeamData from './TeamData';

const Form = () => {
    return (
        <form>
            <input type='text' placeholder='name' name='name' />
            <input type='email' placeholder='email' name='email' />
            <input type='text' placeholder='role' name='role' />
            <input type='submit' />
        </form>
    )
};

export default Form;