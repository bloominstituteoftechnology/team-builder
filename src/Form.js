import React, {useState} from 'react';
import './App.css';

const Form = props => {
    const [character, setCharacter] = useState({
        name: "",
        email: "",
        role: "",
    })

    const handleChanges = e => {
        setCharacter({...character, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewPerson(character);
        setCharacter({name: "", email: "", role: ""})
    }



    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input  id="name" type="text" name="name"/>

            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" onChange={handleChanges} value={character.name} onChange={handleChanges} value={character.email}/>

            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" onChange={handleChanges} value={character.role}/>

<button type="submit">Add Person</button>
        </form>
    )
}

export default Form;