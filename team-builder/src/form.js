import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  // ! Handle Submit
  const handleSubmit = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Team Members' Name</label>
        <input
          type="text"
          id="name"
          placeholder="First and Last Name"
          name="name"
          value={member.name}
          onChange={handleChanges}
          required
        />
        <br />
        <label htmlFor="email">Team Members' Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          name="email"
          value={member.email}
          onChange={handleChanges}
          required
        />
        <br />
        <label htmlFor="role">Team Members' Role</label>
        <select
          name="role"
          id="role"
          value={member.role}
          onChange={handleChanges}
        >
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="UX Designer">UX Designer</option>
          <option value="Fullstack Engineer">Full Stack Engineer</option>
        </select>
        <br />
        <label htmlFor="addMember">Add Your Team Member</label>
        <button type="submit" id="addMember">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
