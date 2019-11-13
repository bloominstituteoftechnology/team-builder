import './App.css';

import React, { useState } from "react";

const NoteForm = props => {
    const [note, setNote] = useState({ name: "", email: "", role:"" });
  
    const handleChanges = e => {
      setNote({ ...note, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };
  
    const submitForm = e => {
      e.preventDefault();
      props.addNewNote(note);
      setNote({ name: "", email: "", role:"" });
    };
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={note.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={note.email}
          onChange={handleChanges}
        />
        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          name="role"
          value={note.role}
          onChange={handleChanges}
        />
        <button type="submit">Add Team Member</button>
      </form>
    );
  };
export default NoteForm;