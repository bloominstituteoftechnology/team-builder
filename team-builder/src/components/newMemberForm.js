import React, { useState } from 'react';
import '../App.css';
const MemberForm = props => {
    const [member, setMember] = useState({ 
        id:1,
        fname: "",
        lname: "",
        email: "",
        profession: ""
    });
 

    const handleChange = event => {
        setMember({ ...member, [event.currentTarget.name]: event.currentTarget.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.addMemberFn(member);
        setMember({ 
            id:1,
            fname: "",
            lname: "",
            email: "",
            profession: ""});
    };

    return (
    <div className='formDiv'>
        <form onSubmit={handleSubmit}>
            <label> First Name: 
                <input
                name='fname'
                value={member.fname}
                id='fnameInput'
                onChange={handleChange}
                placeholder='First Name'
                maxLength='15'
                type='textarea'
                />
            </label>
        <br/>
            <label> Last Name: 
                <input
                name='lname'
                value={ member.lname}
                id='lnameInput'
                onChange={handleChange}
                placeholder='Last Name'
                maxLength='15'
                type='textarea'
                />
            </label>
        <br/>
            <label> Email: 
                <input
                name='email'
                value={member.email}
                id='emailInput'
                onChange={handleChange}
                placeholder='Email'
                maxLength='15'
                type='textarea'
                />
            </label>
        <br/>
            <label> Profession: 
                <input
                name='profession'
                value={member.profession}
                id='professionInput'
                onChange={handleChange}
                placeholder='Profession'
                maxLength='20'
                type='textarea'
                />
            </label>
         <br/>
            <button type="submit">Add Member</button>

        </form>
    </div>
        
        
    );
};


export default MemberForm;