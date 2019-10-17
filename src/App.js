import React, {useState} from 'react';

import './App.css';
import data from "./data";
import Team from "./components/Team";
import TeamForm from "./components/TeamForm";

function App() {
  const [teamList, setTeamList] = useState(data);

  const addNewTeamMember = (member) =>{
    setTeamList([...teamList, member])
  }

  return (
    <div className="App">
      <h1 className="title">My Team</h1>
      <Team teamList={teamList}/>
      <TeamForm addNewTeamMember={addNewTeamMember}/>
    </div>
  );
}

export default App;
