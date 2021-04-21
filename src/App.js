import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
import ReactDOM from 'react-dom';

const defaultMember = [
  {
    id: 0,
    name: '',
    email: '',
    role: ''
  }
]

function App() {

  const [teamMember, setTeamMember] = useState(defaultMember);

  const addTeam = (newMember) => {
    setTeamMember([...teamMembers, newMember])
  }
  return (
    <div className='app'>
      <h1>Members of Team</h1>
    </div>
  );
}

export default App;
