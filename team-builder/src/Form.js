import React, { useState } from "react";

function Form(props) {
  const [mem, setMem] = useState();
  function handleChange(event) {
    setMem({ ...mem, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.team(mem);
  }

  return (
    <div>
    <h1>Welcome to Work</h1>
      <form onSubmit={handleSubmit}>
        <lable>Name</lable>
        <input
          id="name"
          type="text"
          name="name"
          onChange={e => handleChange(e)}></input>
        <lable>E-Mail</lable>
        <input
          id="email"
          type="text"
          name="email"
          onChange={e => handleChange(e)}
        />
        <lable>
          Role
        </lable>
        <input
          id="role"
          type="text"
          name="role"
          onChange={e => handleChange(e)}
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}
export default Form;
