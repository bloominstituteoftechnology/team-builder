import React, { useState } from "react";

const TeamForm = () => {

  const [value, setValue] = useState({
    name:"",
    linkedIn: "",
    github:""
  });

  const changeHandler = event => {
    setValue({...value, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    alert(`submitting ${value.name},${value.linkedIn},${value.github}`);
    // props.setValue();
    // setValue({ name: "", linkedIn: "" , github:""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder ="Enter Name Here"
        onChange={changeHandler}
        value={value.name}
      />
      <label htmlFor="linkedIn">LinkedIn</label>
      <input
        name="linkedIn"
        placeholder ="Enter LinkedIn Handle"
        onChange={changeHandler}
        value={value.linkedIn}
      />

      <label htmlFor="github">Github</label>
      <input
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
