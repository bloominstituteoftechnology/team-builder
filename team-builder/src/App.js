import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([])
  return (
        <Form />      
  );
}

export default App;
