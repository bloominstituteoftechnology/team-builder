import React from "react";

const Notes = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <div className="note" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;