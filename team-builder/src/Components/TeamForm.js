import React, { useState, useEffect } from 'react';

const TeamMemberForm = props => {
    const [person, setPerson] = useState({name: '', email: '', role: ''});

    const onChange = event => {
        setPerson( { ...person, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        if (props.memberToEdit) {
            props.editMember(person);
        } else {
            props.addNewMember(person);
        }
        setPerson({name: '', email: '', role: ''});
    }

    useEffect(() => {
        console.log(props.memberToEdit);
        setPerson(props.memberToEdit);
    }, [props.memberToEdit]);

    return (
        <form onSubmit={submitForm} style={{display:`flex`, flexDirection:`column`, width:`350px`, margin:`0 auto`}}>
            <label htmlFor='inputName'>Full Name</label>
            <input id='inputName'
                   type='text'
                   name='name'
                   placeholder="Full Name"
                   onChange={onChange}
                   value={person.name}
            />
            <label htmlFor='inputEmail'>Email </label>
            <input id='inputEmail'
                   type='email'
                   name='email'
                   placeholder="Email"
                   onChange={onChange}
                   value={person.email}
            />
            <label htmlFor='inputJobRole'> Role </label>
            <select type='select' id='inputJobRole'
                    onChange={onChange}
                    name='role'
                    value={person.role}
                    placeholder='Team Memeber'>
                <option value='Right Winger'>Right Winger</option>
                <option value='Unprofessional'>Unprofessional</option>
                <option value='Gate Keeper of the Slack Channels'>Gate Keeper of the Slack Channels</option>
                <option value='Meme Police'>Meme Police</option>
            </select>


            <button type='submit' style={{width:`84px`, margin:`32px auto`, padding:`5px`}}>{
                props.memberToEdit !== ''? 'Submit': 'Add'}</button>
        </form>
    )
}

export default TeamMemberForm;