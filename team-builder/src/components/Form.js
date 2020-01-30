import React, { useState } from "react";

const Form = props => {
  console.log("props", props);
  const [team, setTeam] = useState({
    name: "",
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
    setTeam({ name: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Name..."
        value={team.name}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;