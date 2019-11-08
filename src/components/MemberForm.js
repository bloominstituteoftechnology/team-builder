import React, { useState } from 'react';


const MemberForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const changeHandler = event => {
        setMember({title: event.target.value})
       
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
            onChange={changeHandler}/>
            <button type="submit">Submit</button>
        </form>
    );
};


export default MemberForm;