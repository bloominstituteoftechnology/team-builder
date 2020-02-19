import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowTeam from './ShowTeam';


function App() {
  const [person, setPerson] = useState([
    {
      id: Date.now(),
      name: "Luke Hoemke",
      email: 'IamAJerk@gmail.com',
      role: "Professional Jerk",
      home_town: "Howell, MI"
    },
    {
      id: Date.now(),
      name: "Tim Rohrer",
      email: 'IloveLauren@gmail.com',
      role: "Proffessional Pearl Diver Warrior",
      home_town: "Carson City, MI"
    },
    {
      id: Date.now(),
      name: "Jordan Devaney",
      email: 'jordandevaney28@gmail.com',
      role: "Computer Ninja and better than Luke and pearl diving",
      home_town: "Whitmore Lake, MI"
    }
  ])
  return (
    <div className="App">
      <ShowTeam people={person} />
    </div>
  );
}

export default App;
