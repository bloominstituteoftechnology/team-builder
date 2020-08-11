import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms'

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
    id:"",
    name:"",
    email:"",
    role: ""
    }
]);
const addNewTeamMember = (teamMember) =>{

setTeamMembers([...teamMembers,{...teamMember, id:Date.now()}])
console.log("Team Members",teamMembers)
};

  
  return (
    <div className="App">

      <header className="App-header">
      <h1>Team Members</h1>

        <Forms addNewTeamMember={addNewTeamMember} setTeamMembers={setTeamMembers} />
        
        <div>
      {teamMembers.map(teammate=>(
        <div key={teammate.id}>
          <p>Name: {teammate.name}</p>
          <p>Email: {teammate.email}</p>
          <p>Role: {teammate.role}</p>
        </div>
      ))}
    </div>
      </header>
    </div>
  );
}

export default App;

