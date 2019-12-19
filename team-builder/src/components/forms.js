import React, { useState } from 'react';

const Forms = props => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    });
    const handleStuff = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const submitForm = event => {
        event.preventDefault();
        setUser({name: '', email: '', role: ''});
    };
    return (
        <form onSubmit={submitForm}>
            
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleStuff}
                value={user.name}
                />
            
            <label htmlFor="name">Email:</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleStuff}
                value={user.email}
                />
            
            <label htmlFor="name">Role:</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleStuff}
                value={user.role}
                />
                <button type="submit">Add Team Member</button>
        </form>
    );
};

export default Forms