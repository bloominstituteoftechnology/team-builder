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
        <div>
            
        </div>
    )
}

export default Form
