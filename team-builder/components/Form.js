import React, { useState } from "react";

const MemberForm = props => {
  console.log(props);
  const [members, setMembers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const HandleChanges = event => {
    setMembers({ ...members, [event.target.name]: event.target.value });
    console.log(members);
  };
  const sumbitForm = event => {
    event.preventDefault();
    props.AddNewMembers(members);
    //clears the input values
    setMembers({ name: "", email: "", role: "" });
    console.log(event.target.value);
  };
  return (
    <form onSubmit={sumbitForm}>
      <label htmlFor="name">Member Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={HandleChanges}
        value={members.name}
      />

      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        name="email"
        onChange={HandleChanges}
        value={members.email}
      />

      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        name="role"
        onChange={HandleChanges}
        value={members.role}
      />
      <button type="submit">Add Info</button>
    </form>
  );
};

export default MemberForm;
