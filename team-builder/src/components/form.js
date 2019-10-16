import React, { useState } from 'react';

function Form(props) {
    const [person, setPerson] = useState({ name:"", email:"", role:""});
    
      const handleChange = event => {
        setPerson({ ...person, [event.target.name] :  event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.setMembers([...props.members, person]);
      };
return(
    <form onSubmit={event => handleSubmit(event)}>
        <label>
          MemberName:
          <input  type='text' 
                  name= 'name' 
                  value={person.name}
                  onChange={event => handleChange(event)} />
        </label>
        <label>
          Email:
          <input  type='text' 
                  name= 'email'
                  value={person.email}
                  onChange={event => handleChange(event)} />
        </label>
        <label>
          Role:
          <input  type='text' 
                  name= 'role'
                  value={person.role}
                  onChange={event => handleChange(event)} />
        </label>
        <button>Submit</button>
    </form>
)}
    export default Form;