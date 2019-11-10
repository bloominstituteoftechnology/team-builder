import React, { useState } from 'react';


const MemberForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value})
       
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email:"", role:""})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Name</label>
            <input 
            id="title" 
            name="title" 
            type="text" 
            placeholder="title" 
            onChange={changeHandler}
            value={member.name}/>

            <label htmlFor="title">Email</label>
            <input 
            id="title" 
            name="title" 
            type="text" 
            placeholder="title" 
            onChange={changeHandler}
            value={member.email}/>

            <label htmlFor="title">Role</label>
            <input 
            id="title" 
            name="title" 
            type="text" 
            placeholder="title" 
            onChange={changeHandler}
            value={member.role}/>
            <button type="submit">Submit</button>
        </form>
    );
};


export default MemberForm;