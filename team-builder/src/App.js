import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [addedMember, setAddedMember] = useState([])

  return (
    <div className="App">
        <body>
        <h1>Team Member List</h1>
        <Form
        addedMember={addedMember} setAddedMember={setAddedMember}
        />
        <h4>Members</h4>
        <div>
          {addedMember.map(member=>(
            <div key={member.id}>
              <p>Name: {member.Namey}</p>
              <p>Email: {member.Email}</p>
              <p>Role: {member.Role}</p>
            </div>
          ))}
        </div>
        </body>
        </div>
  );
}

export default App;