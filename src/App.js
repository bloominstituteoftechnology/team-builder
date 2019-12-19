import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    id: 1,
    firstname: 'Jason',
    lastname: 'Long',
    email: 'jlong5795@gmail.com',
    role: 'Front-End Developer'
  }]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      firstname: teamMember.firstname,
      lastname: teamMember.lastname,
      email: teamMember.email,
      role: teamMember.role
    }
    setTeamMembers([...teamMembers, newTeamMember]);
  }

  return (
    <div className="App">
    <h1>Team Builder</h1>
      <Form addNewTeamMember={addNewTeamMember}/>
      <Card teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
