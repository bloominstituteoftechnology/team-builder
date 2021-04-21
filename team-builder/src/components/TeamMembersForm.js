import React, { useState } from 'react';

const TeamMembersForm = (props) => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const changeHandler = (event) => {
        setMember({
            ...member, [event.target.name]: event.target.value
        })
        
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            setMember({name: '', email: '', role: ''})
            props.addMember(member)
        }}>
            <label>Name <input type="text" 
            placeholder="Name" 
            name="name" 
            value={member.name}
            onChange={changeHandler}/>
            </label>
            
            <label>Email <input type="email" 
            placeholder="Email" 
            name="email" 
            value={member.email}
            onChange={changeHandler}/>
            </label>

            <br />

            <label> Role
                <select 
                name='role'
                value={member.role}
                onChange={changeHandler}>
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