import React,{useState} from 'react';
import './App.css';

import TeamForms from './Components/TeamForms';
import Teams from './Components/Teams';
import data from "./data";



function App() {
  const [team, setTeam] = useState(data);

  const addNewTeam = team => {
    setTeam([...team, team])
  }

  return (
    <div className="App">
      <h1>Teams</h1>
      <TeamForms addNewTeam={addNewTeam}/>
      <Teams TeamList={team}/>
    </div>
  );
}

export default App;
