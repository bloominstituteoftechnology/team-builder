import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMemebers from './component/TeamMemebers';
import data from "./data"
import TeamMemebersForm from './component/TeamMemebersForm';

function App() {
  const[notes, setNotes] = useState(data)
  

  const addNewNote = note => {
    setNotes([...notes, note])
  }
  return (
    <div className="App">
    

      <TeamMemebersForm addNewNote={addNewNote}/>
      <TeamMemebers team ={notes}/>
    </div>
  );
}

export default App;
