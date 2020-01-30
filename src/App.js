import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //setting  up state
  let [members, setMembers] = useState([
    {
      id: 0,
      name: "",
      email: "",
      role: ""
    }
  ]);

  let addNewMember = member => {
    let newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember]);
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
