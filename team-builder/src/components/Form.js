import React, { useState } from "react";

const Form = (props) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setMembers([...props.members, newMember]);
    resetsForm(e);
  };

  const resetsForm = (e) => {
    e.preventDefault();
    setNewMember({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={newMember.memberName}
          placeholder="ex. John Wayne"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={newMember.email}
          placeholder="ex. example@gmail.com"
        />
        <input
          onChange={handleChange}
          type="text"
          name="role"
          value={newMember.role}
          placeholder="ex. Front End Developer"
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};
export default Form;
