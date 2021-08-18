import './App.css';
import React, { useState, useEffect } from 'react';
import User from './User';
import UserForm from './UserForm';
import axios from './axios';

const initialFormValues = {
    ///// TEXT INPUTS /////
    username: '',
    email: '',
    ///// DROPDOWN /////
    role: '',
};

export default function App()
{
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [error, setError] = useState("");

    const updateForm = (inputName, inputValue) =>
    {
        setFormValues({ ...formValues, [inputName]: inputValue });
    };

    const submitForm = () =>
    {
        const newUser =
        {
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        };

        if (!newUser.username || !newUser.email || !newUser.role)
        {
            setError("You have to fill out all fields!");
        }
        else
        {
            axios.post("fakeapi.com", newUser)
                .then(response =>
                {
                    // console.log(response);
                    setUsers([response.data, ...users]);
                    setFormValues(initialFormValues);
                    setError(null);
                })
                .catch(err => console.error(err));
        }
    };

    useEffect(() =>
    {
        axios.get('fakeapi.com').then(response => setUsers(response.data));
    }, []);


    return (
        <div className='container'>
            <h1>Form App</h1>
            <h3 className="error">{error}</h3>

            <UserForm
                values={formValues}
                update={updateForm}
                submit={submitForm}
            />

            {
                users.map(user =>
                {
                    return (
                        <User key={user.id} details={user} />
                    );
                })
            }
        </div>
    );
}