import React from 'react';
import '../App.css';

export default function Form({formValues, update, submit}) {

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
        };

        return (
            <form onSubmit={onSubmit}>
                <h3>Team Members List</h3>
                <label>Name:</label>
                <input 
                name='name'
                value={formValues.name}
                onChange={onChange}
                type='text'
                />
                <label>Role:</label>
                <input 
                name='role'
                value={formValues.role}
                onChange={onChange}
                type='text'
                />
                <label>Email:</label>
                <input 
                name='email'
                value={formValues.email}
                onChange={onChange}
                type='email'
                />
                <div className='submit'>
                    <button type='submit'>submit</button>
                </div>
            </form>
            )
        };
    

   

