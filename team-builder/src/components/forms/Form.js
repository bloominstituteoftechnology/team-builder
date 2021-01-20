import React, { useState } from 'react';
import styled from 'styled-components'


const Form = props => {
    const [members, setMember] = useState({
        id: 1,
        name: '',
        role: '',
        email: ''
    })

    const changeHandler = (event) => {
        setMember({
            ...members,
            [event.target.name]: event.target.value
        })
    }

    const submitForm =(e)=>{
        e.preventDefault();
        props.addMember(members);
        setMember({name: "", role: "", email: ""})
    }


    return (
    <div>
        <form onSubmit={submitForm}> 
            <label htmlFor="name">Name</label>
            <input  id="name" type="text" name="name" value={members.name} onChange={changeHandler} />
                <br></br>
            <label htmlFor="role">Position</label>
            <input  type="text" name="role"  value={members.role} onChange={changeHandler} />
                <br></br>
            <label htmlFor="email">Email</label>
            <input  id="email" type="text" name="email" value={members.email} onChange={changeHandler}/>
                <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
};

export default Form


