import './App.css';
import React, {useState} from 'react'
import Form from './Form'


const tmList = [
  { name: "name1", email: "email1", role: "role1" },
  { name: "name2", email: "email2", role: "role2" },
  { name: "name3", email: "email3", role: "role3" },
];

function App() {
  const [teamMembers, setTeamMembers] = useState(tmList);
  return (
    <div className="App">
      <header className="App-header">
        <h1>TEAM BUILDER APP</h1>
        <Form members={teamMembers} setMembers={setTeamMembers}/>
        {console.log(teamMembers)}
      </header>
    </div>
  );
}

export default App;
