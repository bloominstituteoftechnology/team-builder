import React, { useState } from "react";

const PlayerForm = (props) => {
  const [note, setNote] = useState({id:"", number: "", name: "" });

  const handleChanges = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ id: "",number: "", name: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="note">Player's Team Number</label>
      <input
        id="number"
        type="text"
        placeholder="Enter Team Number"
        onChange={handleChanges}
        value={note.number}
        name="number"
      />
      <label htmlFor="note">Player's Name</label>
      <textarea
        id="note"
        placeholder="Add Player's Name here"
        value={note.name}
        onChange={handleChanges}
        name="name"
      />
      <button type="submit">Add Player</button>
    </form>
  );
};
export default PlayerForm;
