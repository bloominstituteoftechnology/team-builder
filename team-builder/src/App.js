import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewMemberForm from './components/NewMemberForm'
import TeamList from './components/TeamList'
import teamData from './TeamMembers.js'
import TeamCard from './components/TeamCard';

import './App.css';


function App() {

  const [people, setPeople] = useState([
    {name: "Greg", email: "greg@gmail.com", role: "React"},
    {name: "Rick", email: "rick@gmail.com", role: "Actor"}
  ]);




  return (
    <div className="App">
      <NewMemberForm
       />
       {people.map(person => <TeamCard person={person} />)}
    </div>
  );
}

export default App;
