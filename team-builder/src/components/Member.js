import React, { useState } from "react";

const Member = props => {
  const { name, email, role, id } = props.member;

  const [input, setInput] = useState({
    name: name,
    email: email,
    role: role,
    id: id
  });
  const [editing, setEditing] = useState(false);

  const handleEdit = e => {
    setEditing(!editing);
  };

  const inputHandler = e => {
    console.log("target name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdate = e => {
    e.preventDefault();
    props.update(input);
    setEditing(false);
  };

  console.log("edit", editing);
  return editing ? (
    <form onSubmit={handleUpdate}>
      <h1>Add Member</h1>
      <div>
        <label htmlFor="Name">
          Name:{" "}
          <input
            type="text"
            value={input.name}
            onChange={inputHandler}
            name="name"
          />
        </label>
        <label htmlFor="Email">
          Email:{" "}
          <input
            type="text"
            value={input.email}
            onChange={inputHandler}
            name="email"
          />
        </label>
        <label htmlFor="Role">
          Role:{" "}
          <input
            type="text"
            value={input.role}
            onChange={inputHandler}
            name="role"
          />
        </label>
      </div>
      <button>Add Member</button>
    </form>
  ) : (
    <div>
      <h3>Name</h3>
      <p>{name}</p>
      <h3>Email</h3>
      <p>{email}</p>
      <h3>Role</h3>
      <p>{role}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Member;
