import React, { useState } from 'react';

const Forms = (props) => {
    console.log(props)
    const [member, setMember] = useState({
        name: "",
        role: ""
    });
    
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input type="text" name="name" placeholder="Name" 
                onChange={changeHandler}
                />
            <label htmlFor="email">Email </label>
            <input type="text" name="email" placeholder="Email"
             />
            <label htmlFor="role">Role </label>
            <input type="text" name="role" placeholder="Role"
                onChange={changeHandler}
                />
        </form>
    )
}

export default Forms;

// (...name) === spread operator, will include all that's within the useState() operator. {}object, []array, ""string, etc. 