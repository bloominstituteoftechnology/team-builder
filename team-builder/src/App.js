import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Note from "./component/Note";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      name: "Ahmad",
      email: "@yahoo",
      role: "24",
    },
  ]);

  const addNewNote = (item) => {
    const newNote = {
      id: Date.now(),
      name: item.name,
      email: item.email,
      role: item.role,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Form data={addNewNote} />
      <Note note={notes} />
    </div>
  );
}

export default App;
