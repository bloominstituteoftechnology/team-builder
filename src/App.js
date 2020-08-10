import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Team from './Team.js';

function App() {
  //making default team
  const [team,setTeam] = useState([
    {
      id:1,
      name:"Bart",
      email:"Bart@gmail.com",
      role:"Backend"
    },
    {
      id:2,
      name:"Michele",
      email:"Michele@gmail.com",
      role:"Backend"
    },
    {
      id:3,
      name:"Tommy",
      email:"Tommy@gmail.com",
      role:"Backend"
    }
  ]);
  //setter function to add more teammates

  const newTeam = (teams) => {
    const newMember = {
      id: Date.now(),
      name: teams.name,
      email: teams.email,
      role: teams.role
    }
    setTeam([...team,newMember])
  }
  return (
    <div className="App">
        <Form newTeam = {newTeam}/>
        <Team teams = {team} />
    </div>
  );
}

export default App;
