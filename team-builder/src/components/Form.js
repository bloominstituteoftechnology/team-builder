import React from 'react';
import { useState } from 'react';

const MemberForm = props => {
    const initialForm = {id: null, member: "", email: "", role: ""};
    const [members, setMembers] = useState(initialForm)

    const handleChange = event => {
        const {name, value } = event.target
        setMembers({...members, [name]: value})
    }
    // function handleChange(event){
    //    const updatedMember = { ...member, [event.target.name]:
    //     event.target.value};
    //     console.log(
    //         "handleChange",
    //         event.target.name,
    //         event.target.value,
    //         updatedMember
    //     );
    //     setMember(updatedMember)
    // };

    const handleSubmit = event => {
        event.preventDefault();
        if (!members.name || !members.email) return

        props.addMembers(members)
        setMembers(initialForm)
        console.log('Member Name',members);
    }
    return (
        <form onSubmit = {handleSubmit}>
            {/* {console.log(member)} */}
            <fieldset>
                <legend>Become A Member</legend>
                {/* Enter Name */}
                <div>
                    <label for='Name'>Name
                         <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter Your Name Here'
                                onChange = {handleChange}
                                value = {members.name} />
                        </div>
                    </label>
                </div>
                {/* Enter Email */}
                <div>
                    <label for='Email'>Email
                         <div>
                            <input
                                type='text'
                                name='email'
                                placeholder='Enter Your Email Here'
                                onChange = {handleChange}
                                value = {members.email} />
                        </div>
                    </label>
                </div>
                {/* Enter Role */}
                <div>
                    <label for='Role'>Role
                         <div>
                            <input
                                type='text'
                                name='role'
                                placeholder='Enter Your Role Here' 
                                onChange = {handleChange}
                                value = {members.role}/>
                        </div>
                    </label>
                </div>
                <button type = 'submit'>Submit</button>
            </fieldset>

        </form>
    )
}

export default MemberForm;