import React, { useState } from "react";
// import Members from "./Members";

const MemberForm = (props) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const { addNewMembers } = props;

  //   const [members, setMembers] = useState([
  //     {
  //       name: "",
  //       email: "",
  //       role: "",
  //     },
  //   ]);

  console.log(member);

  //   const [nameFunction, members, submitForm, handleChanges] = props;
  //   const [members, setMembers] = useState({
  //     title: props.title,
  //     email: props.email,
  //     role: props.roll,
  //   });
  const handleChanges = (event) => {
    console.log(event.target.value, "event!");
    const newStateObj = {
      ...member,
      [event.target.name]: event.target.value,
    };
    setMember(
      newStateObj
      //     {
      //   name: event.target.value,
      //   email: event.target.value,
      //   role: event.target.value,
      // }
    );
  };
  const submitForm = (event) => {
    event.preventDefault();
    props.addNewMembers(member);
    setMember({
      name: member.name,
      email: member.email,
      role: member.role,
    });
  };

  return (
    <div>
      {/* <Members members={members} /> */}
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={member.name}
          onChange={handleChanges}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={member.email}
          onChange={handleChanges}
        />

        <label htmlFor="role">Role</label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Enter Role"
          value={member.role}
          onChange={handleChanges}
        />
        <button type="submit">Add Person</button>
        {/* <Members members={members}/> */}
      </form>
    </div>
  );
};

export default MemberForm;
