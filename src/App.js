import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import {BrowserRouter as Router} from 'react-router-dom'
import Team from './components/Team'

const teamList =[
  {
    name: 'Dustin',
    email: 'Discustindustin1@aol.com',
    role:'Backend Developer'
  },
  {
    name: 'Brandon',
    email: 'Discustinbrandon1@aol.com',
    role:'Supervisor'
  },
  {
    name: 'Jenni',
    email: 'Discustinjenni1@aol.com',
    role:'Team Lead'
  },
  {
    name: 'Donna',
    email: 'Discustindonna1@aol.com',
    role:'Frontend Developer'
  },
]

function App() {

const [teamBuilder, setTeamBuilder] = useState(teamList)

const addMember = (member)=>{
  setTeamBuilder([...teamBuilder,member])
}

  return (
    <Router>
      <div>
        <Form addMember={addMember}/>
        <h1>Team</h1>
        {teamBuilder.map(member=>(<Team name={member.name} email={member.email} role={member.role}/>))}
      </div>
    </Router>
  );
}

export default App;
