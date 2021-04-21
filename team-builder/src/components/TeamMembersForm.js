import React, { useState } from 'react';

const TeamMembersForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    return (
        <form onSubmit={event => {
            event.preventDefault();
        }}>
            <label>Name <input type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={event => {
                setName(event.target.value)
            }}/>
            </label>
            
            <label>Email <input type="email" 
            placeholder="Email" 
            name="email" 
            value={email}
            onChange={event => {
                setEmail(event.target.value)
            }}/>
            </label>

            <br />

            <label> Role
                <select 
                name='role'
                value={role}
                onChange={event => {
                   setRole(event.target.value)
                }}>
                    <option>--Select--</option>
                    <option>Frontend Engineer</option>
                    <option>Backend Engineer</option>
                    <option>Fullstack Engineer</option>
                    <option>Data Scientist</option>
                    <option>Designer</option>
                </select>
            </label>
            <br />
            
                <button type="submit">Submit</button>
            
        </form>
    )

}

export default TeamMembersForm;