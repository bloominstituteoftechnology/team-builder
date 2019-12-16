import React from 'react';
import './App.css';
import { useState } from "react";
import Forms from './Forms';

function App() {
  const [teamList, setTeamList]= useState([]);
  const [newMember, setNewMember]= useState({name:"", email:"", role:""});

  function addTeamMember(member) {
    setTeamList([...teamList, member]);
    console.log(teamList);
  }
  return (
    <div className="App">
      <Forms addTeamMember= {addTeamMember} />  
      {teamList.map(item => {
        return (
          <div>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Role: {item.role}</p>          
          </div>
        )
      })}

    </div>
  );
}

export default App;
