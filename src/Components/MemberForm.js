import React, { useState } from "react";

function MemberForm(props) {
  const [member, setMember] = useState({
    title: props.title,
    email: props.email,
    role: props.roll,
  });

  const handleChanges = (event) => {
    console.log(event.target.value, "event!");
    setMembers({
      name: event.target.value,
      emaile: event.target.value,
      role: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ title: props.title, email: props.email, role: props.roll });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <textarea
        id="name"
        type="text"
        placeholder="Enter Name"
        value={member.name}
        onChange={handleChanges}
      />

      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        type="text"
        placeholder="Enter Email"
        value={member.email}
        onChange={handleChanges}
      />

      <label htmlFor="role">Role</label>
      <textarea
        id="role"
        type="text"
        placeholder="Enter Role"
        value={member.role}
        onChange={handleChanges}
      />
    </form>
  );
}
