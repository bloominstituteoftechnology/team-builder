import React, { useState } from 'react';
const PersonForm = props => {

    const [person, setPerson] = useState({
    
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    }

    const SubmitForm = e => {
        e.preventDefault();
        props.addNewPerson(person);
        setPerson({ name:"", email:"", role:""});
    };

    return (
    <div className='form-wrapper'>
        <br /><br />
        <form onSubmit={SubmitForm}>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                type='text'
                placeholder=' First Name'
                name='name'
                onChange={handleChanges}
                value={person.name}
            />
            <br /><br />
            <label htmlFor='email'>Email: </label>
            <input
                id='email'
                type='text'
                placeholder='Email'
                name='email'
                onChange={handleChanges}
                value={person.email}
            /><br /><br />
            <label htmlFor='role'>Role: </label>
            <input
                id='role'
                type='text'
                placeholder='Occupation'
                name='role'
                onChange={handleChanges}
                value={person.role}
                />
                <br /><br />
                <button type='submit'>Sign up</button>
        </form>    
        </div>
    )
}
export default PersonForm;