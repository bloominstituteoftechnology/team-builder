import React, { useState } from 'react';


const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({ name: "", email: "", role: "", })
    }
    
    return (
        <form className="form" onSubmit={submitForm}>
            <label htmlFor="name">
                Name:
                <input id="name" type="text" placeholder="Enter Full Name"
                    onChange={handleChanges} value={member.name} name="name" />
            </label>
            <label htmlFor="email">
                E-Mail:
                <input id="email" type="text" placeholder="Enter E-Mail"
                    onChange={handleChanges} value={member.email} name="email" />
            </label>
            <label htmlFor="role">
                Role:
                <input id="role" type="text" placeholder="Enter Role"
                    onChange={handleChanges} value={member.role} name="role" />
            </label>
            <button type="submit">Add to List</button>
        </form>
    )
}

export default Form