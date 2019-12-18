import React, { useState } from "react";
import "./App.css";

import MemberCard from "./card";

function App() {
  // ! Manage State for our member data inputs
  const [member, setMember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: ""
  });
  // ! Function that changes the state onChange in our form and also we need to pass down the member state through "..." the spread operator and then "," [event.target.name] event.target.value?

  const addNewMember = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });
  };

  // ! Handle Submit
  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.name, member.email, member.role);
  };

  return (
    <div className="form">
      <h1>Team Builder</h1>
      <h2>Build Your Team</h2>
      <h3>Navigate Your Distributed Team All in One Place</h3>

      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="name">Team Members' Name</label>
        <input
          type="text"
          id="name"
          placeholder="First and Last Name"
          name="name"
          value={member.name}
          onChange={event => addNewMember(event)}
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
          onChange={event => addNewMember(event)}
          required
        />
        <br />
        <label htmlFor="role">Team Members' Role</label>
        <select
          name="role"
          id="role"
          value={member.role}
          onChange={event => addNewMember(event)}
        >
          <option value="backend">Backend Engineer</option>
          <option value="frontend">Frontend Engineer</option>
          <option value="ux">UX Designer</option>
          <option value="fullstack">Full Stack Engineer</option>
        </select>
        <br />
        <label htmlFor="addMember">Add Your Team Member</label>
        <button type="submit" id="addMember">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
