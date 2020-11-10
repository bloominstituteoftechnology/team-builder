import React, { useState } from 'react';

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
        <form onSubmit = { addUser }>
            <label>Name</label>
                <input type='text' placeholder='name' name='name' id='name' value={user.name} onChange={newUser} />
            <label>Email</label>
                <input type='email' placeholder='user@domain.com' name='email' value={user.email} onChange={newUser} />
            <label>Role</label>
                <input type='role' placeholder='programmer' name='role' value={user.role} onChange={newUser} />
            <button type='submit'>Add</button>
        </form>
    );
};

export default Form