import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import FormMembrer from './FormMember.js'

function App() {

  const [members, setMembers] = useState([
    {name: "Jeanelle" , email: "jeanellepazos@gmail.com" , role: "Computer Science" },
  ]);

  const newMember = (member) => {
    setMembers ([...members, {...member, id: Date.now()}]);
  }
  
  return (
    <div className="App">
      <FormMembrer newMember = {newMember}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
