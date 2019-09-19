import React, {useState} from 'react';

const Forms = props => {
    console.log(`X`,props)
    const[team2, setTeam2] = useState({name: '', email: '',role: ''})
        
    const handleChanges = e => {
        setTeam2({...team2, [e.target.name]: e.target.value})
    }

    const  submitForm  = e => {
        e.preventDefault();
        props.addForm(team2)
        setTeam2({name: '', email: '', role: ''})
    }
    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name:</label>
            <input
            id='name'
            type='text'
            name='name'
            onChange={handleChanges}
            value={team2.name}
            />
            <label htmlFor='email'>email:</label>
            <input
            id='email'
            type='text'
            name='email'
            onChange={handleChanges}
            value={team2.email}
            />
            <label htmlFor='role'>role:</label>
            <input
            id='role'
            type='text'
            name='role'
            onChange={handleChanges}
            value={team2.role}
            />

            <button type='submit'> Add Member</button>
            </form>
    )
}
export default Forms;