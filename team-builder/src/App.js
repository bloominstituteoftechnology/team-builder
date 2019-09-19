import React, { useState } from 'react';
import './App.css';

import Member from "./components/Member";
import Forms from "./components/Forms";

function App() {
  const[team, setTeam] = useState([
    {
      id: 1,
      
      name: 'Carlos Venegas',
      email: 'lambda@lambda.com',
      role: 'Chief Engineer'
  }])

const addForm = form => {
  const newForm = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    role: form.role
  }
 setTeam([...team, newForm])
}

  return (
    <div className="App">
      <h1 className='header'> Team Members</h1>
      <Forms addForm={addForm} />
      <p>Example Provided:</p>
      <Member team3 ={team} />
      
    </div>
  );
}

export default App;
