import React, { useState } from 'react';

const Form = props => {
  const [teams, setTeams] = useState({ name: '', email: '', role: '' });

  const handleChanges = e => {
    setTeams({ ...teams, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form(teams);
    setTeams({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name </label>
      <input
        value={teams.name}
        name='name'
        type='text'
        placeholder='name'
        onChange={handleChanges}
      />
      <button type='submit'> Add </button>
      <label htmlFor='name'> Email Address </label>
      <input
        id='email'
        value={teams.email}
        name='email'
        type='text'
        placeholder='example@email.com'
        onChange={handleChanges}
      />

      <label htmlFor='name'> Role </label>
      <input
        id='role'
        value={teams.role}
        name='role'
        placeholder='Role'
        type='text'
        onChange={handleChanges}
      />
    </form>
  );
};
export default Form;
