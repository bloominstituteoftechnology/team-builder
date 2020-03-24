import React, { useState } from 'react';

const Form = ({teamList, setTeamList}) => {
  //Set state
  const [newMember, setNewMember] = useState({
      name: '',
      role: '',
      email: ''
  });
  // set handleChange fuction
  function handleChange(e) {
setNewMember({...newMember, [e.target.name]: e.target.value})
  }
  //set handleSubmit function
  function handleSubmit(e) {
      e.preventDefault();
      setTeamList([...teamList, newMember])
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name='name' value = {newMember.name} onChange={handleChange}></input>
      </label>
      <br/>
      <label>
        Role:
        <input type="text" name = 'role' value = {newMember.role} onChange={handleChange}></input> 
      </label>

      <br/>
      <label>
        Email:<input type="email" name = 'email' value = {newMember.email} onChange={handleChange}></input>
      </label>
      <br/>
      <button type='submit'> Sign Up Here</button>
    </form>
  );
};

export default Form;
