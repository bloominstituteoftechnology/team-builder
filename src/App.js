import React, {useState} from 'react';

import Form from './Form';

import './App.css';

// const team; 


function App() {

  const [team, setTeam] = useState("team");

  return (
    <div className="App">
      <header className="App-header">
        <Form />
          Learn React
        
      </header>
    </div>
  );
}

export default App;
