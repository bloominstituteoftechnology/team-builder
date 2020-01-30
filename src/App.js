import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './Components/TeamMembers';
import data from "./data"
import Form from './Components/Form';

function App() {
  const [notes, setNotes] = useState(data)

  const addNewNote = note => {
    const addNewNote = note => {
      setNotes([...notes, note])
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
