import React from 'react';

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;

        props.change(name, value);
    }

    handleSubmit =event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSumit={handSubmit}>
            <label>Name
            <input
                placeholder="name"
                value={props.values.name}
                name="name"
                onChnage={handleChange}
            />
            </label>
            <label>Email
                <input 
                    placeholder= "Enter email"
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder='Enter role'
                    value={props.values.role}
                    name="role"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="create your team" />
        </form>


    )
}