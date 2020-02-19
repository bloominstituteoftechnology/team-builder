import React, {useState} from 'react';
import './App.css';
import TeamContainer from "./components/TeamContainer";
import Form from "./components/Form";
import teamData from "./data/teamData";

function App() {
  const [teamList, setTeamList] = useState(teamData);
  return (
    <div>
      <TeamContainer teamList={teamList}/>
      <Form teamList={teamList} setTeamList={setTeamList}/>
    </div>
  );
}

export default App;
