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
        setThings({ username: '',email: '',role: '',  id: Date.now(),})
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
                    wtfdis='name'
                    value={things.name}
                    onChange={handleStuff}/>
            <br/>
            <label htmlFor="email">
                Email : 
            </label>
                <input 
                    type='text'
                    placeholder='Email'
                    wtfDis='email'
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
                    wtfDis='role'
                    value={things.role}
                    onChange={handleStuff}/>
                <br/>
                <button type="submit">Add Team Members</button>
        </form>
    )
}
export default Form;