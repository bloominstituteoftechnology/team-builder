import React, { useState } from 'react';

const Form = props => {
    const [things, setThings] = useState({
        id: Date.now(),
        username: '',
        email: '',
        role: ''
    });
    const handleStuff = event => {
            setThings({
            ...things,
            [event.target.name]: event.target.value
            });
    }
    const sbmitHandlr = event => {
        event.preventDefault();
        props.setThings([...props.things, things]);
        setThings({ id: Date.now(), username: '',email: '',role: ''})
    };
    return (
        <form onSubmit={sbmitHandlr}>
            <label htmlFor="name">
                Full Name : 
            </label>
                <input 
                    id= {things.id}
                    type='text'
                    placeholder='Full Name'
                    name='name'
                    apple='name'
                    value={things.name}
                    onChange={handleStuff}/>
            <br/>
            <label htmlFor="email">
                Email : 
            </label>
                <input
                    id= {things.id} 
                    type='text'
                    placeholder='Email'
                    apple='email'
                    name='email'
                    value={things.email}
                    onChange={handleStuff}/>
            <br/>
            <label>
                Role :
            </label> 
                <input 
                    id= {things.id}
                    type='text'
                    placeholder='Role'
                    name='role'
                    apple='role'
                    value={things.role}
                    onChange={handleStuff}/>
                <br/>
                <button type="submit">Add Team Members</button>
        </form>
    )
}
export default Form;