// import React, {useState} from 'react';



// const membersWork = [
// {name : 'Peter Bam',email :'princemhina@yoyo.com', role :'Full Stack Engineer'},
// {name : 'Ashleigh Solo', email : 'ashleiig@yaya.com', role : 'Attorney'},
// {name : 'Shawn Davids', email : 'hitupshawn@yeye.com', role :'Disco-Jockey'},
// {name : 'Natalia Smith', email : 'Smithwhat@dede.com', role : 'Activist'},
// {name : 'Aria Mhina', email :'dadsgirl@bamenterprise.com', role :'Chief Executive Officer'}
// ];

// export default Form;

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
                    <option>Full Stack Engineer</option>
                    <option>Attorney</option>
                    <option>Activist</option>
                    <option>Chief Executive Officer</option>
                    
                </select>
            </label>
            <br />
            
                <button type="submit">Submit</button>
            
        </form>
    )

}

export default TeamMembersForm;