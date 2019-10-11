import React, { useState, useEffect } from 'react';

const Form = (props) => {
    const [team, addTeam] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChange = (event) => {
        addTeam({
            ...team,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMember([
            team,
            ...props.member
        ])
        reset();
    }

    const reset = () => {
        addTeam({
            name: "",
            email: "",
            role: ""
        })
    }
    
    useEffect(() => {
        addTeam(props.memberToEdit);
    }, [props.memberToEdit])

    return (
        <form onSubmit={handleSubmit}>
            <div className="name-label">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={team.name} onChange={handleChange} />
            </div>

            <div className="email-label">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={team.email} onChange={handleChange} />
            </div>

            <div className="role-label">
                <label htmlFor="role">Role</label>
                <input id="role" name="role" value={team.role} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}

export default Form;