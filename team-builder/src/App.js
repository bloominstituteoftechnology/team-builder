import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'

function App() {
const [ team, setTeam ] = useState([])



  return (
    <div>
      <h1>React app working</h1>
      <Form/>
    </div>
  )
}

export default App;
