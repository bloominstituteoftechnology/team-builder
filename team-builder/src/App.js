import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 0,
      name: '',
      role: '',
      email: ''
    }
  ]);

  console.log(teamMembers);
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
