import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewMemberForm from './components/NewMemberForm'
import TeamList from './components/TeamList'
import teamData from './TeamMembers.js'

import './App.css';


function App() {

  const [members, setMembers] = useState(teamData)
  console.log(members);



  return (
    <div className="App">
      <NewMemberForm
        member={members}
        setMember={setMembers}
       />
      <TeamList
        teamData={teamData}
       />
    </div>
  );
}

export default App;
