import React, { useState } from 'react';

const Forms = (props) => {
    console.log(props)
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });
    
    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input type="text" name="name" placeholder="Name" 
                onChange={handleChange}
                />
            <label htmlFor="email">Email </label>
            <input type="email" placeholder="Email"
             />
            <label htmlFor="role">Role </label>
            <input type="role" placeholder="Role"
                onChange={handleChange}
                />
        </form>
    )
}

export default Forms;

// (...name) === spread operator, will include all that's within the useState() operator. {}object, []array, ""string, etc. 