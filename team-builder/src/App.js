import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './Form'
import './App.css';


function App() {
  
  const [members, setMembers] = useState([]);

  return (
      <div className="App">
        <Form members={members} setMembers={setMembers}/>
        <Members members={members}/>
      </div>
    );
  }



export default App;
