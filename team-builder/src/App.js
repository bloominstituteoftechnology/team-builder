import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './MemberForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Add New Member</h1>
      </header>

      <MemberForm/>

    </div>
  );
}

export default App;
