import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import TeamBuild from './TeamBuild';

function App() {
  const [team, setTeam] = useState([
    {
      name: '',
      email: '',
      role: ''
    }
  ]);

  const addTeam = teams => {
    const newTeam = {
      id: Date.now(),
      name: teams.name,
      email: teams.email,
      role: teams.role
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Team Builder App</h1>
        <Form form={addTeam} />
        <TeamBuild teamList={team} />
      </header>
    </div>
  );
}

export default App;
