import React, { useState } from "react";

const Form = props => {
  console.log("props", props);
  const [team, setTeam] = useState({
    name: "",
    email: "",
    job: ""
  });

  const handleChanges = e => {
    console.log(team);
    // console.log("the name", e.target.name)
    // console.log("the event target", e.target)
    //we are dynamically setting our keys.
    // setNote({ ...note, title: e.target.value });
    // setNote({ ...note, note: e.target.value });
    //  const nameObj={...note}
    //  nameObj[e.target.name]= e.target.value
    // setNote(nameObj)
    setTeam({
      ...team,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeam(team);
    setTeam({ name: "", email: "", job: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Name..."
        value={team.name}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        placeholder="Email"
        value={team.email}
      />
      <label htmlFor="job">Job: </label>
      <input
        id="job"
        type="text"
        name="job"
        onChange={handleChanges}
        placeholder="Job"
        value={team.job}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;