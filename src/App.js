import React, { useState }from 'react';
import './App.css';
import Team from "./components/Team"
import Form from "./components/Form"

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Chance Rutledge",
      email: "crutledge@gmail.com", 
      role: "Web Dev Student"
    }

  ]);
  const addNewMember = member =>{
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role

    };
    setMembers([...members, newMember]);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h3>Chance's Fancy Team Roster Builder v0.01a.5 and a half</h3>
        <Form addNewMemer={addNewMember}/>
        <Team members={members}/>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Ask me How!</p>
      </header>
    </div>
  );
}

export default App;
