import React, { useState } from 'react';


const Forms = (props) => {
    console.log(props)
    const [member, setNewMember] = useState([{
        name: "",
        email: "",
        role: "",
    }]);
    
    const handleChange = event => {
        setNewMember({ ...member, [event.target.name]: event.target.value });
    }

    const submitForm = event => {
        console.log(member)
        event.preventDefault();
        props.addMember(member);
    }
    
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input type="text" 
                   name="name" 
                   value={member.name}
                   placeholder="Name" 
                   onChange={handleChange}
                />
            <label htmlFor="email">Email </label>
            <input type="email" 
                   name="email"
                   value={member.email}
                   placeholder="Email"
                   onChange={handleChange}
                />
            <label htmlFor="role">Role </label>
            <input type="role" 
                   name="role"
                   value={member.role}
                   placeholder="Role"
                   onChange={handleChange}
                />
                <button type="submit" >Submit</button> 
        </form>
    )
}

export default Forms;

// (...name) === spread operator, will include all that's within the useState() operator. {}object, []array, ""string, etc. 