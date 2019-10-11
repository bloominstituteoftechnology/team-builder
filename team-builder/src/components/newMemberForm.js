import React, { useState } from 'react';
import '../App.css';
const MemberForm = props => {
    const [member, setMember] = useState({ 
        id:1,
        fname: "",
        lname: "",
        city: "",
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
            city: "",
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
            <label> Location: 
                <input
                name='city'
                value={member.city}
                id='cityInput'
                onChange={handleChange}
                placeholder='City'
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