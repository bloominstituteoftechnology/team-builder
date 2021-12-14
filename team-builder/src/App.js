import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const teamMembers = [
  {name: 'Casey',
   email: 'caseyisthebest@aol.com',
   role: 'Team Supporter'
  },
  {name: 'Jada',
   email: 'jbanks628@gmail.com',
   role: 'Team Leader'
  },
  {name: 'Brit',
   email: 'BritIsLegit@yahoo.com',
   role: 'Project Coordinator'
  }
]
function App() {

  const [team, setTeam] = useState(teamMembers);
  const[val, setVal] = useState({name: '', email:'', role:''})

  const onSubmit = () => {
    setTeam([val, ...team]);
    setVal({name:'', email:'', role:''})
  }
  const onChange = (name, value) => {
    setVal({...val, [name]: value})
  }
  return (
    <div className="App">
      <h1>Build-A-Team</h1>
      <Form
      values={val}
      change={onChange}
      submit={onSubmit}
      />
      {team.map((member, i) => {
        return (
          <div key={i}>
            {member.email},
            {member.name},
            {member.role}
            </div>
        )
      })}
    </div>
  );
}

export default App;
