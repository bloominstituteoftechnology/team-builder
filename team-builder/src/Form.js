import React, { useState } from "react";

const Form = (props) => {
  const defaultState = { Name: "", Email: "", Role: "" };

  const [teamMember, setTeamMember] = useState(defaultState);

  const handleChange = (event) => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setAddedMember([...props.addedMember, teamMember]);
    setTeamMember(defaultState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          placeHolder="Full Name"
          name="Name"
          id="nameInput"
          value={teamMember.name}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>
      <label>
        Email
        <input
          type="text"
          placeHolder="Email"
          name="Email"
          id="emailInput"
          value={teamMember.email}
          onChange={handleChange}
        ></input>
      </label>
      <br></br>
      <label htmlFor="selectRole">
        Role
        <select id="selectRole" name="Role" onChange={handleChange}>
          <option></option>
          <option value="Front-End Developer">Front-End Developer</option>
          <option value="Mobile Developer">Mobile Developer</option>
          <option value="DataBase Administrator">DataBase Administrator</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Data Science">Data Science</option>
          <option value="Data Science">Data Science</option>
          <option value="UX Designer">UX Designer</option>
          <option value="UI Designer">UI Designer</option>
          <option value="Systems Engineer">Systems Engineer</option>
        </select>
      </label>
      <br></br>
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
