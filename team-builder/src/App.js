import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Members from './components/Members';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      memberName: "Name",
      email: "Email",
      role: "Role"
    }
  ]);

  const addInfo = (newInfo) => {
    setMembers([...members, newInfo])
  }

  return (
      <div className="App">
        <h1>Team Members</h1>
        <Form addInfo={addInfo} /> 
        <Members members={members}/> 
      </div>   
  );
}

export default App;
