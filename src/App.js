import React, { useState } from 'react';
import './App.css';
import Member from './components/Member';
import MemberForm from './components/MemberForm';

function App() {
  const [members, setNewMembers]=useState([
    {name: "Samantha", 
    email: "sjones@gmail.com", 
    role:"Public Relations"}]
    )
  
    const addNewMember = member => {
      setNewMembers([...members, member])
    }
  
  return (
    <div className="App">
      <h1>Squad</h1>
      <MemberForm addNewMember={addNewMember}/>
      <Member members={members} />
    </div>
  );
}

export default App;
