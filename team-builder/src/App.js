import React, {useState} from 'react';
import './App.css';
import Form from './components/form'
import Team from './components/team'


function App() {

  const [teamData, setTeamData] = useState([
    {
      id: 1, 
      name: 'Kevin Nguyen',
      email: 'nguyenkevin225@gmail.com',
      role: 'Full Stack Web'
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.name,
      role: member.role
    }
    setTeamData([...teamData, newMember])
  }


  return (

    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember} />
      <Team teamData={teamData} />
    </div>
  );
}

export default App;
