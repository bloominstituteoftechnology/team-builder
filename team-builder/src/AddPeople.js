import React, { useState } from 'react';



function AddPeople(props) {
    const [newPerson, setNewPerson] = useState({
        name: '',
        email: '',
        role: '',
        home_town: '',
    });

    const onChange = e => {
        setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
    }

    function SavePerson(e) {
        e.preventDefault();
        props.saveNewPeople(newPerson);
        setNewPerson({ name: '', email: '', role: '', home_town: '' });
    }
    return (
        <>
            <form onSubmit={SavePerson}>
                <label htmlFor='name'>
                    Name:
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={newPerson.name}
                        placeholder='Name'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={newPerson.email}
                        placeholder='Email'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='role'>
                    Role:
                    <input
                        type='text'
                        id='role'
                        name='role'
                        value={newPerson.role}
                        placeholder='Role'
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='home'>
                    Home:
                    <input
                        type='text'
                        id='home'
                        name='home_town'
                        value={newPerson.home_town}
                        placeholder='Home'
                        onChange={onChange}
                    />
                    <button type='submit'>Add New Person</button>
                </label>

            </form>
        </>
    )
}

export default AddPeople;