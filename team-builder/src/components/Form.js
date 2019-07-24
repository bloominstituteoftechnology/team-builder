import React from 'react';
import { useState } from 'react'

function MemberForm() {
    const [member,setMember] = useState({member: "", email: "", role: ""});

    function handleChange(event){
       const updatedMember = { ...member, [event.target.name]:
        event.target.value};
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedMember
        );
        setMember(updatedMember)
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Member Name',member);
    }
    return (
        <form onSubmit = {handleSubmit}>
            {console.log(member)}
            <fieldset>
                <legend>Become A Member</legend>
                {/* Enter Name */}
                <div>
                    <label for='Name'>Name
                         <div>
                            <input
                                type='text'
                                name='member'
                                placeholder='Enter Your Name Here'
                                onChange = {handleChange}
                                value = {member.name} />
                        </div>
                    </label>
                </div>
                {/* Enter Email */}
                <div>
                    <label for='Email'>Email
                         <div>
                            <input
                                type='text'
                                id='#'
                                placeholder='Enter Your Email Here'
                                onChange = {handleChange}
                                value = {member.email} />
                        </div>
                    </label>
                </div>
                {/* Enter Role */}
                <div>
                    <label for='Role'>Role
                         <div>
                            <input
                                type='text'
                                id='#'
                                placeholder='Enter Your Role Here' 
                                onChange = {handleChange}
                                value = {member.role}/>
                        </div>
                    </label>
                </div>
                <button type = 'submit'>Submit</button>
            </fieldset>

        </form>
    )
}

export default MemberForm;