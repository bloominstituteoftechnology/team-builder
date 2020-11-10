import './App.css';
import React from 'react';
import {useState} from 'react-dom';

function App() {
  const teamData = [
    {id: 1, name: 'Adham'},
    {id: 2, name: 'Wael' },
    {id: 3, name: 'Mohamed'},
    {id: 4, name: 'Ahmed'},
  ]

  const [teamState, setTeamState] = useState();
  


  return (
    <div className="App">
      <div className='home-header'>
        <h1> Team Overview </h1>
      </div>
    </div>
  );
}

export default App;
