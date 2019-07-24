import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewMemberForm from './components/NewMemberForm'
import TeamList from './components/TeamList'
import teamData from './TeamMembers.js'

import './App.css';


function App() {

  const [member, setMember] = useState([])


  return (
    <div className="App">
      <NewMemberForm />
      <TeamList
        teamData={teamData}
       />
    </div>
  );
}

export default App;
