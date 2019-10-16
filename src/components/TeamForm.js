import React, { useState } from "react";

const TeamForm = () => {

  const [value, setValue] = useState(" ");

  const changeHandler = event => {
    setValue({[event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    // props.setValue();
    // setValue({ name: "", linkedIn: "" , github:""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder ="Enter Name Here"
        onChange={changeHandler}
        value={value.name}
      />
      <label htmlFor="linkedIn">LinkedIn</label>
      <input
        id="linkedIn"
        name="linkedIn"
        placeholder ="Enter LinkedIn Handle"
        onChange={changeHandler}
        value={value.linkedIn}
      />

      <label htmlFor="github">Github</label>
      <input
        id="github"
        name="github"
        placeholder ="Enter Github Handle"
        onChange={changeHandler}
        value={value.github}
      />
      <button type="submit">Add Member</button>
    </form>
    
  );
};

export default TeamForm;
