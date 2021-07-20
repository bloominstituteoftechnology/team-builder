import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

const initialValues = {
  username: '',
  email: '',
  role: '',
}


function App() {
  const [teamMember, setMember] = useState({ })
  
  return (
    <div className="App">
      <h1>FOORMS</h1>
    </div>
  );
}

export default App;
