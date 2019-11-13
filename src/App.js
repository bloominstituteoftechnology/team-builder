import './App.css';
import "./styles.css";

import React, { useState } from 'react'

import NoteForm from './NoteForm.js';
import Notes from './Notes.js'
import ReactDOM from "react-dom";
import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body
    };
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <h1>My Notes</h1>
      {/* we are going to pass a function down as a prop */}
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  );
}
export default App;
