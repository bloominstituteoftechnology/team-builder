import React, { useState } from "react";
import Members from "./Components/Members";

const MemberForm = (props) => {
  const [addNewMember] = props;
  const [members, setMembers] = useState([
    {
      name: "",
      email: "",
      role: "",
    },
  ]);

  console.log(members);

  //   const [nameFunction, members, submitForm, handleChanges] = props;
  //   const [members, setMembers] = useState({
  //     title: props.title,
  //     email: props.email,
  //     role: props.roll,
  //   });

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMember(members);
    setMembers({
      name: members.name,
      email: members.email,
      role: members.role,
    });
  };
  const handleChanges = (event) => {
    console.log(event.target.value, "event!");
    setMembers({
      name: event.target.value,
      email: event.target.value,
      role: event.target.value,
    });
  };

  return (
    <div>
      <Members members={members} />
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          value={members.name}
          onChange={handleChanges}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter Email"
          value={members.email}
          onChange={handleChanges}
        />

        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          placeholder="Enter Role"
          value={members.role}
          onChange={handleChanges}
        />
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
};

export default MemberForm;
