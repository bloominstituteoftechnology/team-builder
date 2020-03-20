import React, { useState } from 'react';

const MemberForm = (props) => {
    console.log(props)
    const [formState, setFormState] = useState({
        title: "",
        email: "",
        body: ""
    });

    const changeHandler = event => {
        setFormState({
            ...formState,
            // [Event.target.name] is called by the onChange with the appropriate source
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        props.addMember({
            ...formState,
            id: Date.now() //Easy way to create a unique id
        });
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="title">Name:</label>
            <input
                type="text"
                name="name"
                value={formState.name}
                onChange={changeHandler}
                placeholder="Enter first and last name."
            />
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                name="email"
                value={formState.email}
                onChange={changeHandler}
                placeholder="Please enter email."
            />
            <button type="submit">Create Note!</button>
        </form>
    )
};

export default MemberForm;
