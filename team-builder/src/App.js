import React from 'react';
import './App.css';
import { useState } from 'react'
import MemberForm from './components/Form';

function App() {
  const [member, setMember] = useState('')
  return (
    <div className="App">
    Team Build
    <MemberForm/>
    </div>
  );
}

export default App;
