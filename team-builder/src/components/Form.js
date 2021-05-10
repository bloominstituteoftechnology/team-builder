import React, { useState } from 'react';

export default function Form(props) {
  const [member, setMember] = useState(
    {
      Name: '',
      Email: '',
      Position: '',
    },
  );


  const changeHandler = (e) => {
    const newStateObj = { ...member, [e.target.name]: e.target.value };
    setMember(newStateObj);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addMember(member);
    setMember(
      {
        Name: '',
        Email: '',
        Position: '',
      },
    );
  };

  return (
    <div>
      <h1>TeamForm</h1>
      <form onSubmit={submitForm}>
        <label name='name' htmlFor='name'>Name: </label>
        <input
          id='name'
          type='text'
          name='Name'
          placeholder='first name'
          onChange={changeHandler}
          />

        <label name='email' htmlFor='email'>Email: </label>
        <input
          id='email'
          type='text'
          name='Email'
          placeholder='please enter your email'
          onChange={changeHandler}
          />

        <label name='position' htmlFor='position'>Position </label>
        <input
          id='position'
          type='radial'
          name='Position'
          onChange={changeHandler}
          />
        <button type='submit'>Click to Submit</button>
      </form>
    </div>
  );
}
