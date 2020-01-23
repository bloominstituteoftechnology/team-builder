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

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Members' Name</label>
        <br />
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
        <label htmlFor="email">Members' Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          name="email"
          value={member.email}
          onChange={handleChanges}
          required
        />
        <br />
        <label htmlFor="role">Members' Role</label>
        <br />
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
        <label htmlFor="addMember">Add Member</label>
        <button type="submit" id="addMember">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;