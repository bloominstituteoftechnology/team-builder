import React, { useState } from 'react'

const Form = props => {
    //States
    const [user, setUser] = useState({
        name: '',
        email: '',
        roles: ''
    });

    //Events
    const handlerUpdate = event => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
        console.log(event.target.name);
        console.log(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted')
    };


    return (
        <form>
            <h3>Employee Name is {user.name}</h3>
            <h3>The Employee Email is{user.email}</h3>
            <h3>The Role is {user.role}</h3>
        </form>
    )
}

export default Form
