import React from "react";

function Note(props) {
  return (
    <div>
      {props.note.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
}
export default Note;
