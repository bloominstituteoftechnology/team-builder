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
  const editNote = (index,newname) => {
    // console.log(notes[index].id);
    

    // Add the edited player
    const theclan = [...notes];
    // theclan.splice(index,1);
    theclan[index] = newname;
    setNotes(theclan);
  }

  const deleteNote = (index) => {
    const originalNotes = [...notes];
    originalNotes.splice(index, 1);
    setNotes(originalNotes);
  };

  const addNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      number: note.number,
      name: note.name,
    };

    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Header />
      <h1>Cardinals Team</h1>
      <Form addNewNote={addNewNote} />
      <Body notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
}


export default App;
