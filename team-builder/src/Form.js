import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "Name",
    email: "Email",
    role: "Role"
  });

  const submitMember = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "Name", email: "Email", role: "Role" });
  };

  return (
    <div>
      <form onSubmit={submitMember}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name"></input>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" name="email"></input>
        <label htmlFor="role">Role:</label>
        <input id="role" type="text" name="role"></input>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default Form;
