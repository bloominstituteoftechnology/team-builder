import React, { useState } from "react";

const NewMemberForm = (props) => {
  const [member, setNewMember] = useState({
    name: props.name,
    email: props.email,
    role: props.role,
  });

  const handleChanges = (event) => {
    const newMemberState = {
      ...member,
      [event.target.name]: event.target.value,
    };
    setNewMember(newMemberState);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.setNewMember(member);
    setNewMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name"> Name: </label>
      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        name="name"
        value={member.name}
        onChange={handleChanges}
      />
      <label htmlFor="email"> E-Mail: </label>
      <input
        id="email"
        type="text"
        placeholder="Enter E-Mail"
        name="email"
        value={member.email}
        onChange={handleChanges}
      />
      <label htmlFor="role"> Role: </label>
      <input
        id="role"
        type="text"
        placeholder="Enter Role"
        name="role"
        value={member.role}
        onChange={handleChanges}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default NewMemberForm;
