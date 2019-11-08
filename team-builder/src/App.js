
import React, {useState} from 'react';

import './App.css';
import TeamMembers from './Components/TeamMembers';
import TeamMembersForm from './Components/TeamMembersForm';
import data from './Components/data';

function App() {
  const[notes, setNotes] = useState(data)

  const addNewNote = note => {
    setNotes([...notes, note])
  }
  return (
    <div className="App">


      <TeamMembersForm addNewNote={addNewNote}/>
      <TeamMembers team ={notes}/>
    </div>
  );
}

export default App;