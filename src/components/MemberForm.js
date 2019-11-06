import React, { useState } from "react";

const MemberForm = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember({ name: "", email: "", role: ""});
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>{member.name}</h1>
        <label htmlFor="title">Team Member Name</label>
        <input
          onChange={handleChanges}
          id="title"
          type="text"
          name="name"
          value={member.name}
        />

        <label htmlFor="body">Team Member Email</label>
        <input
          onChange={handleChanges}
          id="body"
          type="text"
          name="email"
          value={member.email}
        />

        <label htmlFor="body">Team Member Role</label>
        <input
          onChange={handleChanges}
          id="body"
          type="text"
          name="role"
          value={member.role}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemberForm;
