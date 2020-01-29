import React, {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
        Name: '',
        Email: '',
        Role: ''
    })
    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value})
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({Name: '', Email: '', Role: ''})  
    };


return (
    <form onSubmit={submitForm}>
        <label htmlFor='name'>Full Name</label>
        <input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges} />

        <label htmlFor='Email'>Full Name</label>
        <input id='email' type='email' name='email' placeholder='email address' onChange={handleChanges} />

        <label>
            Role: <select onChange = {e => {
                setRole(event.target.value);
            } 
            } id='setRole'>
                <option/>
                <option>Backend Engineer</option>
                <option>Frontend Engineer</option>
                <option>UI Designer</option>
                <option>Data Scientist</option>

            </select>
        </label>

        <button type='submit'>Add Member</button>
    </form>
)
};