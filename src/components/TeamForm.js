import React, { useState } from "react";

const TeamForm = (props) => {

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
    // alert(`submitting ${value.name},${value.linkedIn},${value.github}`);
    props.AddNewMember(value);
    setValue({ name: "", linkedIn: "" , github:""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder ="New Member Name"
        onChange={changeHandler}
        value={value.name}
      />
      <label htmlFor="linkedIn">LinkedIn</label>
      <input
        id="linkedIn"
        type="text"
        name="linkedIn"
        placeholder ="New Member LinkedIn"
        onChange={changeHandler}
        value={value.linkedIn}
      />

      <label htmlFor="github">Github</label>
      <input
        id="github"
        type="text"
        name="github"
        placeholder ="New Member Github"
        onChange={changeHandler}
        value={value.github}
      />
      <button type="submit">Add New Member</button>
    </form>
    
  );
};

export default TeamForm;
