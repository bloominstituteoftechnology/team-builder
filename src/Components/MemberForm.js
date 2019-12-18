import React, { useState } from "react";

const MemberForm = props => {
  // console.log("this is our props",props);
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({name:"", email: "", role: ""})
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
      
        type="text"
        placeholder="Enter Name"
        onChange={handleChanges}
        name="name"
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        type ="text"
        placeholder ="Enter E-Mail"
        onChange ={handleChanges}
        name="email"
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        type="text"
        placeholder="What's your role?"
        onChange ={handleChanges}
        name="role"
        value={member.role}
      />

      
     
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;