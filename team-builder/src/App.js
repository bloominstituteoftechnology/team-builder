import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  const [teamlist, setTeamList] = useState([
    { name: 'Dionis', character: 'Karlee'},
    { name: 'Mark', character: 'Evangelo'},
    { name: 'Brian', character: 'Doc'},
    { name: 'Anauris', character: 'Harley'},
])


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
