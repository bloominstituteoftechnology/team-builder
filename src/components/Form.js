import React, {useState} from 'react';

import './form.css'
const Form = props => {

    // console.log('props from form', props);
    const [member, setMember] = useState({ name:"", email:"", role:""});

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
const submitForm = event => {
    event.preventDefault();
    const newMember = {
        ...member,
        id: Date.now()
    };
    props.addNewMember(newMember);
}

    return (
        <form onSubmit={submitForm}>
            <div className='inputs'>
                <label className='name' htmlFor="name" />
                <input type='text' name='name' placeholder='Member Name' value={member.name} onChange={changeHandler} />
            </div>
            <div className='inputs'>
                <label className='email' htmlFor="email" />
                <input type='text' name='email' placeholder='Email' value={member.email} onChange={changeHandler} />
            </div>
            <div className='inputs'>
                <label className='role' htmlFor="role" />
                <input type='text' name='role' placeholder='Role' value={member.role} onChange={changeHandler} />
            </div>
        <button>Add Member</button>
        </form>

    );
};

export default Form;