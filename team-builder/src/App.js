import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers'



const App = () => {
  const [teamMember, setTeamMemeber] = useState([]);
return (
    <div className="App">
      <TeamMembers/>
    </div>
  );
}

export default App;
