import { useState, useEffect } from 'react';
import './App.css';
import teamMembers from './data/data';

function App() {
  const [team, setTeam] = useState([]);

  useEffect(() => setTeam(teamMembers), [])

  return (team.length > 0 ?
    (<div className="App">
      <h1>Team Members</h1>
      {team.map((member, index) =>
        <div className="team_member" key={index} >
          <h2>{member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      )}
    </div>)
    : (<div className="App">
      <h1>Team Members</h1>
      <p>Fetching Team Members...</p>
    </div>));
};

export default App;
