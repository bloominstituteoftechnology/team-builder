import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms'

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
    id:1,
    name:"Team Member's Name:",
    email:"Team Member's Email:",
    role: "Team Member's Role:"
    }
]);
const addNewTeamMember = (teamMember) =>{
// const newTeamMember ={ <-- one way you could do it
//     id: Date.now(),
//     name: ntm.name,
//     body: ntm.body
// }
setTeamMembers([...teamMembers,{...teamMember, id:Date.now()}])
};

  
  return (
    <div className="App">

      <header className="App-header">
      <h1>Team Members</h1>

        <Forms addNewTeamMember={addNewTeamMember} setTeamMembers={setTeamMembers} />
        
        <div>
      {teamMembers.map(teammate=>(
        <div key={teammate.id}>
          <p>{teammate.name}</p>
          <p>{teammate.email}</p>
          <p>{teammate.role}</p>
        </div>
      ))}
    </div>
      </header>
    </div>
  );
}

export default App;

