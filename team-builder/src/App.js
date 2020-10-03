import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import  Header  from './Header/Header';
import Body from './Body/Body';

import Form from './Form';
// function App() {
//   return (
//     <body>
//     <Header />
//     <Body  />
//     </body>
//   );
// }

import ReactDOM from "react-dom"; 
import "./styles.scss";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      number: "003",
      name:
        "The amazing Homerun baron"
    }
  ]);

  const deleteNote = (index) => {
    const originalNotes = [...notes];
    originalNotes.splice(index, 1);
    setNotes(originalNotes);
  };

  const addNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      number: note.number
    };

    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Header />
      <h1>Cardinals Team</h1>
      <Form addNewNote={addNewNote} />
      <Body notes={notes} deleteNote={deleteNote} />
    </div>
  );
}


export default App;
