import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

function App() {
  // const [teamMember, setTeamMember]=useState({name:"",email:""});
  

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <body>
        <h1>Team Member List!</h1>
        <Form/>
      </body>
    </div>
  );
}

export default App;
