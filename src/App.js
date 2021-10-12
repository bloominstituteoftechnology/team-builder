import React, { useState }  from 'react';
import './App.css';
import TeamList from './components/teamList/TeamList'
import { teamMembersData } from './teamMembers';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [teamMembers] = useState(teamMembersData);

  return (
    teamMembers ? 
    <div className="App">
      <Switch>
        <Route exact path="/">
          <TeamList teamMembers={teamMembers} showNew={false}/>
        </Route>
        <Route exact path="/new">
          <TeamList teamMembers={teamMembers} showNew={true}/>
        </Route>
      </Switch>
    </div> : null
  );
}

export default App;
