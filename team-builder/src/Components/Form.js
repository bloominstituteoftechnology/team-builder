import React, { useState } from 'react';

export default function Form({addNewMember}) {
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChanges = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value})
  }

  const submitForm = event => {
    event.preventDefault();
    addNewMember(teamMember);
    setTeamMember({name: '', email: '', role: ''})
  }

  return (
    <form style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} onSubmit={submitForm}>
      <label htmlFor='name'>
        Name:
        <input style={{marginLeft: '5px'}} id='name' name='name' type='text' placeholder='Member Name' value={teamMember.name} onChange={handleChanges} />
      </label>

      <label htmlFor='email'>
        Email:
        <input style={{marginLeft: '8px'}} id='email' name='email' type='text' placeholder='Email' value={teamMember.email}  onChange={handleChanges} />
      </label>

      <label htmlFor='role'>
        Role: 
        <input style={{marginLeft: '15px'}} id='role' name='role' type='text' placeholder='Role' value={teamMember.role}  onChange={handleChanges} />
      </label>

      <button type='submit' style={{padding: '5px', borderRadius: '4px', width: '50px', margin: '10px auto', backgroundColor: 'dodgerblue', color: 'white'}}>
        Submit
      </button>
    </form>
  );
}