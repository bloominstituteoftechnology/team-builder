import React, { useState, useEffect } from "react";

const Form = props => {
  
  
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
   
  
  if (props.memberToEdit.id)

  setMember(props.memberToEdit);
  

  },[props.memberToEdit]);
  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
    
  };
  const submitForm = event => {
    event.preventDefault();
    props.newMember(member);
    setMember({ name: "", email: "" });

  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
        value={member.name}
      />
      {/* <label htmlFor="role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChange}
        value={member.role}
      /> */}

      <label htmlFor="role">Role</label>
      <select
        id="role"
        type="text"
        name="role"
        onChange={handleChange}
        value={member.role}>
          <option value="">Select a Role</option>
          <option value="Front End Developer">Front End Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      
      <label htmlFor="email">Email</label>
      <input type = "email"
        id="email"
        name="email"
        onChange={handleChange}
        value={member.email}
      />

      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;