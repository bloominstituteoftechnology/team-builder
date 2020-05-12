import React, { useState } from "react" 

const Form = props => {

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    }) 

    const handleChange  = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        }) 
    }

    const submitForm  = event => {
        event.preventDefault() 
        const newMember = {...member}
    
        props.addUser(newMember) 
        setMember({
            name: "",
            email: "",
            role: "",
        }) 
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    onChange={handleChange}
                    name="name"
                /><br></br>
                <label htmlFor="email">E-mail: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="email"
                    onChange={handleChange}
                    name="email"
                /><br></br>
                <label htmlFor="role">Role: </label>
                <input
                    type="text"
                    id="role"
                    placeholder="your role"
                    onChange={handleChange}
                    name="role"
                /><br />
                <button type="submit">Join Team</button>
            </form>
        </div>
    )
}

export default Form