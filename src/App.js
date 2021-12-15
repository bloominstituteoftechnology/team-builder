import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Form from './Form.js';

function App() {

  const team = [{id: 0, name: 'andrew', age: 30, location: 'hell'}, {id: 1, name: 'katie', age: 29, location: 'oswego il'}];

  const [teamMembers, setTeamMembers] = useState(team);

  useEffect(() => {
    setTeamMembers(team);
  }, []);

  console.log(teamMembers);

  return (
    
    <>
    <Form teamMembers={teamMembers} />
    
    </>
  );
}

export default App;
