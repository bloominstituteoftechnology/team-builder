import React, { useState } from 'react';

const MemberForm = props =>{
    const [member, setMember] = useState({name:''});
    
    const handleChange = event =>{
        setMember({...member, [event.target.name]:event.target.value});
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.addMemberFn(member);
        setMember({ name: ""});
      };
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'> Member Name</label>
            <input
            id='title'
            value={member.name}
            name='title'
            type='text'
            onChange={handleChange}
            />
            <button type ='submit'>Add Member</button>
        </form>
    );
};


export default MemberForm;