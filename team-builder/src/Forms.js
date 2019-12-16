import React, { useState } from 'react';

const Forms = props => {
    console.log(props);

    const [form, setForm]= useState({name: '', email: '', role: ''});

    const handleChanges = event => {
        console.log('event', event.target.value);
        setForm({...form, [event.target.name]: event.target.value})
        console.log(form);
    };
    // const handleSubmit = 

//write a function that submits the form object using the 'Set" function. 
    const onSubmit = event =>  {
        event.preventDefault();
        props.addTeamMember(form);
        setForm({name: "", email: "", role: ""})
    
    }
    
    return (
        
        
        <form onSubmit={onSubmit}>
            <label htmlfor= "Name">Name</label>
            <input
                id= 'Name' 
                type='text' 
                placeholder= 'enter name' 
                onChange= {handleChanges}
                name="name"
                value= {form.name}
                />
            <label htmlfor= 'email'>email</label>
            <input 
                id= 'email' 
                type='text'
                placeholder= 'enter email'
                onChange= {handleChanges}
                name= 'email'
                value= {form.email}
                />
            <label htmlfor= 'role'>role</label>
            <input 
                id= 'role' 
                type='text'
                placeholder= 'enter role'    
                onChange= {handleChanges}
                name= 'role'
                value= {form.role}
            />
            <button className= "submitButton" type= "submit">Click Here to Submit</button>

        </form>
    )
}

export default Forms;