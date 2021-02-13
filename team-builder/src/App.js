import React, { useState } from 'react';
import './App.css';
import TeamMember from './components/TeamMember';

function App() {

  const initialTeamList = [
    {
      name: 'Mauricio',
      email: 'maurooren@gmail.com',
      age: 23,
      role: 'Fron-end'
    }
  ]

  const [teamList, setTeamList] = useState(initialTeamList)
  const [form, setForm] = useState({})

  return (
    <div className="App">
      {
        teamList.map(e => <TeamMember member={e} />)
      }
    </div>
  );
}

export default App;
