import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeInfo = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitMember = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitMember}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeInfo}
        />

        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeInfo}
        />

        <input
          id="role"
          type="text"
          name="role"
          placeholder="Role"
          onChange={changeInfo}
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default Form;
