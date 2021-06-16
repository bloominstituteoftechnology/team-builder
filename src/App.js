import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  return (
    <div className="App">
      <form>
        <label>
          Name: <input id='nameInput' placeholder='Enter Name' type='text' />
        </label>
        <label>
          E-Mail: <input id='emailInput' placeholder='Enter E-mail' type='email' />
        </label>
      
      </form>
    </div>
  );
}

export default App;
