import React, { useState } from 'react';
import './App.css';
import Member from './components/Member';
import MemberForm from './components/MemberForm';

function App() {
  
  return (
    <div className="App">
      <h1>Squad</h1>
      <MemberForm />
      <Member />
    </div>
  );
}

export default App;
