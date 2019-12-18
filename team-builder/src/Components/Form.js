import React, { useState } from "react";

const Form = (props) => {
  const [newTeam, setNewTeam] = useState({
    id: Date.now(),
    username: "",
    email: "",
    role: ""
  });
  const handleChanges = e => {
    setNewTeam({
      ...newTeam,
      [e.target.name]: e.target.value});
  };
  const submitForm = e => {
    console.log(e.target)
    e.preventDefault();
    // props.addNewTeammate(newTeam)
    props.setTeam([...props.team, newTeam])
    setNewTeam({ id: "", username: "", email: "", role: ""});
  };

  return(
    <form onSubmit={submitForm}>
      <label htmlFor="username">Username</label>
      <input
      id="username"
      type="text"
      placeholder="Username"
      onChange={handleChanges}
      name="username"
      value={newTeam.username}      
      />
      <label htmlFor="email">email</label>
      <input
      id="email"
      type="text"
      placeholder="email"
      onChange={handleChanges}
      name="email"
      value={newTeam.email}
      />
      <label htmlFor="role">role</label>
      <input
      id="role"
      type="text"
      placeholder="role"
      onChange={handleChanges}
      name="role"
      value={newTeam.role}
      />



    <button>AddNewTeammate</button>
    </form>
  )
}

export default Form;