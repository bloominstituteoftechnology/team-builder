import React, { useState } from "react";

const Form = (props) => {
    console.log(props);

    const { submitPerson, initialPerson, history } = props;

    const [person, setPerson] = useState(initialPerson || { name: '', email: '', role: ''});

        const handleChange = event => {
            setPerson({ ...person, [event.target.name]: event.target.value});
        };

        const handleSubmit = event => {
            event.preventDefault();
            submitPerson(person);
            setPerson({name:'', email:'', role: ''});
            history.push('/');
        };
        return (
            <form onSubmit={handleSubmit}>
                <label > Name
                <input placeholder='name'
                       value = {person.name} 
                       name='name'
                       onChange={handleChange} 
                />
                </label>
                <label> Email
                <input 
                       placeholder='email'
                       value = {person.email}
                       name = 'email'
                       onChange={handleChange} 
                />
                </label>
                <label> Role
                <select
                    value = {person.role}
                    name = 'role'
                    onChange={handleChange}>
                        <option value=''>--Select a Role--</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Backend'>Backend</option>
                        <option value='Full Stack'>Full Stack</option>
                </select>
                </label>
                <button type='submit'>submit</button>
            </form>
    );
};

export default Form;