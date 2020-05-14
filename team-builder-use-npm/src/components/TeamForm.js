import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css'

function TeamForm(props) {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
      
        props.addMember({
            ...formState,
            id: Date.now()
        });

        setFormState({
            name: '',
            email: '',
            role: ''
        });
    };

    

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='fullName'>Full Name: </label>
                <input
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={changeHandler}
                    placeholder='Enter full name here'
                    required
                />
                <label htmlFor='email'>Email: </label>
                <textarea
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={changeHandler}
                    placeholder='Enter email here'
                    required
                />
                <label htmlFor='role'>Role: </label>
                <textarea
                    type='text'
                    name='role'
                    value={formState.role}
                    onChange={changeHandler}
                    placeholder='Enter role here'
                    required
                />
                <Button variant="contained" color="primary" type="submit">Add Member</Button>
            </form>
        </div>
    )
}

export default TeamForm;