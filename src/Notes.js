import React from "react";

const Notes = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <div className="note" key={note.id}>
          <p>Name: {note.name}</p>
          <p>Email: {note.email}</p>
          <p>Role: {note.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;