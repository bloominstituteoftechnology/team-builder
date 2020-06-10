import React, { useState } from 'react';





const Form = props =>{

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    const handleChanges = event => {
        console.log(event.target.value);
        setTeamMember({...teamMember, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({ name: '', email: '', role: '' });
    }
 return (
        <form onSubmit={submitForm}>
            





        </form>

    );
}

export default Form();