import React, { useState }from 'react';
import './App.css';
import TMForm from './TMForm'


function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
    name: 'Michael Scott', 
    email: 'worldsbestboss@DM.com', 
    role: 'Regional Manager'
    },
    {
      name: 'Dwight Schrute',
      email: 'schrutefarms@DM.com',
      role: 'Assistant to the Regional Manager'
    },
    {
      name: 'Creed',
      email:'iamcreed@DM.com',
      role:'Quality Assurance Director'
    }
  ]);

  const addNewTM = person => {
    setTeamMembers([...teamMembers, {...person}])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dunder Mifflin Paper Company Employees</h1>
        <TMForm addNewTM = {addNewTM}/>
        <Members members={teamMembers}/>
      </header>
    </div>
  );
}

const Members = props => {
  return(
    <div className= 'box'>
      {props.members.map(member => (
        <div className= 'member' >
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
