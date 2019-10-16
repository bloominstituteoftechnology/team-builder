import React, {useState} from 'react';
import './App.css';

function App() {

  const [teamData, setTeamData] = useState([
    {
    name: 'Leighton Fritze',
    email: 'Leighton.Fritze.Tech@gmail.com',
    role: 'Owner' 
  }
  ])

  return (
    <div className="App">
    <h1>The Lambda setTeamData</h1>
    </div>
  );
}

export default App;
