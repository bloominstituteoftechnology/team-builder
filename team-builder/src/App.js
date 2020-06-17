import React, { useState } from 'react'; // Importing useState hook
import logo from './logo.svg';
import './App.css';

function App() {

  // setting useState to an initial object
const [teamMembers, setTeamMembers] = useState(initialTeamMembersList);

  return (
    <div className="App">
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
