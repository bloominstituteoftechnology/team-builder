import React, { useState } from 'react';

const Form = ({ addNewUser, userEdit }) => {
  const initState = { name: '', email: '', role: '' };
  const [member, setMember] = useState({ name: '', email: '', role: '' });

  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewUser(member);
    setMember(initState);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={userEdit.name !== '' ? userEdit.name : member.name}
          onChange={handleChange}
        />
      </label>
      <label>
        E-mail:
        <input
          type='text'
          name='email'
          value={userEdit.email !== '' ? userEdit.email : member.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Role:
        <input
          type='text'
          name='role'
          value={userEdit.role !== '' ? userEdit.role : member.role}
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='submit'></input>
    </form>
  );
};
export default Form;
