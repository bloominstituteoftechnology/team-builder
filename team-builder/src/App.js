import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";

function App() {
  const [team, setTeam] = useState([]);

  const addMember = member => {
    setTeam([...team, member]);
  };

  return (
    <div className="App">
      <h2>These are our team members</h2>
      {team.map(member => (
        <div key={member.email}>
          <p>{member.name}, {member.email}, {member.role}</p>
         </div>
      ))}
      <Form addMember={addMember} />
    </div>
  );
}

export default App;