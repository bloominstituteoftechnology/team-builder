import React, { useState } from "react";

const TeamForm = props => {
  console.log("props", props);
  const [team, setTeam] = useState({ name: "", email: "", role: "" });

  const handleChanges = e => {
    // console.log(team);
  
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeam(team);
    setTeam
    ({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        // Add placeholders
        name="name"
        onChange={handleChanges}
        value={team.name}
      />
      <br /> <br />
      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        name="email"
        onChange={handleChanges}
        value={team.email}
      />
      <br /> <br />
      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        name="role"
        onChange={handleChanges}
        value={team.role}
      />
      <br /> <br />
      <button type="submit">Add Team Member</button>
      <br /> <br />
    </form>
  );
};

export default TeamForm;
