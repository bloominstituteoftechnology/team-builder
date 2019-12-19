import React, { useState } from 'react';

const Form = props => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        role: ''
    });
    const handleStuff = event => {
            setUser({
            ...user,
            [event.target.name]: event.target.value
            });
        console.log(event.target.name);
    }
    const sbmitHandlr = event => {
        console.log('user.name');
        console.log('user.email');
        console.log('user.role');
        event.preventDefault();
        props.adNwInf(user);
        setUser({ username: '',email: '',role: ''})
    };
    return (
        <form onSubmit={sbmitHandlr}>
            <label>
                Full Name : 
                <input 
                    type='text'
                    placeholder='Full Name'
                    name='username'
                    value={user.name}
                    onChange={handleStuff}/>
            </label>
            <br/>
            <label>
                Full Name : 
                <input 
                    type='text'
                    placeholder='Full Name'
                    name='username'
                    value={user.name}
                    onChange={handleStuff}/>
            </label>
            <br/>
            <label>
                Full Name : 
                <input 
                    type='text'
                    placeholder='Full Name'
                    name='username'
                    value={user.name}
                    onChange={handleStuff}/>
            </label>
                <br/>
                <button type="submit">Add Team Members</button>
        </form>
    )
}
export default Form;