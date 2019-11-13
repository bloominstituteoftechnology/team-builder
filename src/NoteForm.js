import './App.css';

import React, { useState } from "react";

const NoteForm = props => {
    const [note, setNote] = useState({ title: "", body: "" });
  
    const handleChanges = e => {
      setNote({ ...note, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };
  
    const submitForm = e => {
      e.preventDefault();
      props.addNewNote(note);
      setNote({ title: "", body: "" });
    };
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleChanges}
          value={note.title}
        />
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="body"
          value={note.body}
          onChange={handleChanges}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  };
export default NoteForm;