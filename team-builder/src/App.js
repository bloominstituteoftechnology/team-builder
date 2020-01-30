import React, {useState, useEffect }from 'react';
import logo from './logo.svg';
import './App.css';

import FormInfo from './components/forminfo.js';
import Forms from './components/forms.js';

function App() {
  const [members, setMembers] = useState([]);
  const addNewInfo = info => {
    const newInfo = {
      id: Date.now(),
      name: info.name,
      email: info.email,
      role: info.role
    };
    setMembers([...members, newInfo]);
  };

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
