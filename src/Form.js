import React, { useState } from 'react';

const Form = (props) => {
    return(
        <form>
            <label>Name</label>
            <input
                type='text'
                name='name'
                value=''
                placeholder='your name'
                />
            <label>Email</label>
            <input
                type='email'
                name='email'
                value=''
                placeholder='your email address'
                />
                <label>Role</label>
            <input
                type='text'
                name='role'
                value=''
                placeholder='your desired role'
                />
        </form>
    )
}

export default Form