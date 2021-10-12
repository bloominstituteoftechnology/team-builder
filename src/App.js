import React, { useState } from 'react'
import './App.css';

const memberList = [
  { name: 'Bob', email: 'bob@bob.com', role: 'Designer' }
]

function App() {

  const [teamMembers, setTeamMembers] = useState(memberList)

  return (
    <div className="App">
      <h2>Team Members</h2>
      {memberList.map((member, index) => (
        <div key={index}>
          Name: {member.name} <br></br>
          Email: {member.email} <br></br>
          Role: {member.role}
        </div>
      ))}
    </div>
  );
}

export default App;
