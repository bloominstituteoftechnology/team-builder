import './App.css';
import "./styles.css";

import React, { useState } from 'react'

//import Form from './Form.js'
import NoteForm from './Forms.js';

//import ReactDOM from "react-dom";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      name: "Robert Elias",
      email:
        "robertelias@gmail.com",
      role: "Lead Software Engineer"
    },

    {
      id: 2,
      name: "John Smith",
      email:
        "JSmith@gmail.com",
      role: "Software Developer"
    }
  ]);

  const Form = props => {
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

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role
    };
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <h1>My Team</h1>
      {/* we are going to pass a function down as a prop */}
      <NoteForm addNewNote={addNewNote} />
      <Form notes={notes} />
    </div>
  );
}
export default App;
