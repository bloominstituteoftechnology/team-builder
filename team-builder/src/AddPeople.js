import React, { useState } from 'react';



function AddPeople() {
    const [newPerson, setNewPerson] = useState({
        name: '',
        email: '',
        role: '',
        home: '',
    });

    const onChange = e => {
        setNewPerson({ ...newPerson, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form>
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
                        name='home'
                        value={newPerson.home}
                        placeholder='Home'
                        onChange={onChange}
                    />
                </label>

            </form>
        </>
    )
}

export default AddPeople;