import React, {useState} from 'react';
import Form from './components/Form';
import Team from './components/Team';
import './App.css';

function App() {

  const [teamData, setTeamData] = useState([
  //   {
  //   name: 'Leighton Fritze',
  //   email: 'Leighton.Fritze.Tech@gmail.com',
  //   role: 'Owner' 
  // }
  ])
  const addNewMember = member => {
    const newPerson = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamData([...teamData, newPerson])
  }

  

  return (
    <div className="App">
    <h1>The Lambda Team</h1>
    <Form addNewMember={addNewMember} />
    <Team teamData={teamData} />
    </div>
  );
}

export default App;
