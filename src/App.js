import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './Components/TeamMembers';
import data from "./data"
import Form from './Components/Form';

function App() {

  const [notes, setNotes] = useState(data)

  const addNewNote = note => {
    setNotes([...notes, note])
  }
    
  return (
    <div className="App">


      <Form addNewNote={addNewNote}/>
      <TeamMembers team ={notes}/>
    </div>
  );
}

export default App;
