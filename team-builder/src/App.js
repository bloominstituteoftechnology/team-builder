import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import ListCreator from './ListCreator';
import TeamMates from './TeamMateData';

function App() {
  const [teamData, setTeamData] = useState(TeamMates);

  const addNewMember = (member) =>{
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamData(
      [...teamData,
      newMember]
    )
  };

  return (
    <div>
      <h1> Team Builder</h1>
      <Form teamData={teamData} setTeamData={setTeamData} addNewMember={addNewMember}/>
      <hr></hr>
      <div className="teamListDiv">
        <h2>Team Members: </h2>
        <ListCreator teamData={teamData} />
      </div>
      
    </div>
    
    
  );
}

export default App;
