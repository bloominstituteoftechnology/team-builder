import React, {useState} from 'react';
import './App.css';

function App() {

  const [teamData, setTeamData] = useState([
    {
    name: 'Leighton Fritze',
    email: 'Leighton.Fritze.Tech@gmail.com',
    role: 'Owner' 
  }
  ])
  const addNewMember = member => {
    const newPerson = {
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamData([...teamData, newPerson])
  }

  console.log('teamData', teamData);

  return (
    <div className="App">
    <h1>The Lambda Team</h1>
    <p addNewMember={addNewMember} />
    <p teamData={teamData} />
    </div>
  );
}

export default App;
