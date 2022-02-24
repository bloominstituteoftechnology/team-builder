import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name , value } = event.target;
        props.handleChange(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
            placeholder="enter name"
            value={props.values.name}
            name="name"
            onChange={handleChange}
            />
            </label>

            <label>Email
                <input
                placeholder="enter email"
                value={props.values.email}
                name="email"
                onChange={handleChange}
                />
            </label>

            <label>Role
                <input
                placeholder="enter role"
                value={props.values.role}
                name="role"
                onChange={handleChange}
                />
            </label>
            <input type="submit" value="create team"/>
        </form>

    )
    
}


export default Form;