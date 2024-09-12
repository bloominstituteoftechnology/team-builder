import React, {useState} from 'react';

function MemberForm(props) {
    // const handleChange = e => {
    //     props.setTeamMembers({...props.teamMembers, [e.target.name]: e.target.value})
    // };
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     props.addNewMember(props.teamMembers);
    //     props.setTeamMember({ name: '', email: '', role: ''})
    // }
    return (
        <form>
            <label htmlFor='name'>Name: </label>
            <input 
                id='name' 
                name='name'
                type='text'
                placeholder='name'
                //onChange={handleChange}
                //value={props.teamMembers.name}
            />
            <label htmlFor='email'>Email: </label>
            <input
                id='email'
                name='email'
                type='text'
                placeholder='email address'
                //onChange={handleChange}
                //value={props.teamMembers.email}
            />
            <label htmlFor='role'>Role: </label>
            <input 
                id='role'
                name='role'
                type='text'
                placeholder='role'
                //onChange={handleChange}
                //value={props.teamMembers.role}
            />
            <button>Submit</button>
        </form>
    );
};

export default MemberForm;