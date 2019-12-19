import React, { useState } from 'react';

const Form = props => {
    const [usr, setUsr] = useState({
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
        props.adNwInf(usr);
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
                    value={usr.name}
                    onChange={handleStuff}/>
            </label>
            <br/>
            <label>
                Full Name : 
                <input 
                    type='text'
                    placeholder='Full Name'
                    name='username'
                    value={usr.name}
                    onChange={handleStuff}/>
            </label>
            <br/>
            <label>
                Full Name : 
                <input 
                    type='text'
                    placeholder='Full Name'
                    name='username'
                    value={usr.name}
                    onChange={handleStuff}/>
            </label>
                <br/>
                <button type="submit">Add Team Members</button>
        </form>
    )
}
export default form