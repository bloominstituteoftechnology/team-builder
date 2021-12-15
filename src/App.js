import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Form from './Form.js';

function App() {

  const team = [{id: 0, name: 'andrew', email: 'andrew.gary91@gmail.com', location: 'oswego IL'}, {id: 1, name: 'katie',email: 'katiebennett@gmail.com', location: 'oswego il'}];

  const [teamMembers, setTeamMembers] = useState([]);

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
