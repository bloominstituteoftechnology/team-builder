import React, {useState} from 'react';
import './App.css';
import Forms from './components/Form';
import Team from './components/Team'
import theTeam from './components/Data'



function App() {

    const [teamMembers, setTeamMembers] = useState(theTeam)

    const newTeam = (teams) => {
      const newMember = {
        name: teams.name,
        email: teams.email,
        role: teams.role
      }
      setTeamMembers([...teamMembers,newMember])}

  return (
    <div>
        <div className="header">
          <h1> Meet the Team</h1>
        </div>

        <div className="App">
         <Team members={teamMembers}/>
        </div>
        <div className="Forms">
        <h1> Join the Team</h1>
        <Forms newTeam ={newTeam}/>
        </div>
    </div>
  );
}

export default App; 