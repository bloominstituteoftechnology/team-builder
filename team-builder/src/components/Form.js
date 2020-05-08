import React, {useState} from 'react';


const Form = props => {
    const [members, setMembers] = useState (
        {
            id: Date.now(),
            name: '',
            title: ''
        }
    );
    const clearForm = () => {
        setMembers({id: Date.now(), name: '', title: ''})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(members);
        clearForm();
    }

    const handleChange= (event) => {
        setMembers({...members, [event.target.name]: event.target.value})
    }




    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Team Members Name: </label>
        <input
            id="name"
            name="name"
            type="text"
            placeholder="Team members name here: "
            value={members.name}
            onChange={handleChange}
        />
        <label htmlFor="title">Team Members title: </label>
        <input
            id="title"
            name="title"
            type="text"
            placeholder="Team members title here: "
            value={members.title}
            onChange={handleChange}
        />
        <button type="submit">Save info</button>
        </form>
    );
}

export default Form