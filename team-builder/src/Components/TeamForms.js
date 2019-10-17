import React, {useState} from 'react';

const TeamForms = props => {

    const [teams, setTeam] = useState({
        title: "",
        body: ""
    });
    const changeHandler = event => {
        setTeam({...teams, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeam(teams);
        setTeam({title: "", body: ""});
    };
    return(
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Title</label>
            <input
            name='title'
            id='title'
            type='text'
            placeholder='title'
            onChange={changeHandler}
            value={teams.title}
            />
            <label htmlFor="body">Description</label>
            <textarea
            name='body'
            id='body'
            placeholder='type your note here'
            onChange={changeHandler}
            value={teams.body}
            />
            <button type='submit'>Add Note</button>
        </form>
    )

};


export default TeamForms