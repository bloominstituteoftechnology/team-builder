import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([

  ]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          <Form />
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
