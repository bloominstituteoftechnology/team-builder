import React, {useState} from 'react';
import './App.css';
import Forms from './components/Form';
import Team from './components/Team';
import Data from './components/Data.js';



function App() {

    const [teamMembers, setTeamMembers] = useState(Data)

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
          <h1> Our Team</h1>
        </div>

        <div className="App">
         <Team members={teamMembers}/>
        </div>

        <div className="Forms">
        <h1> Want to join our rad team?</h1>
        <Forms newTeam ={newTeam}/>
        </div>

    </div>
    
  );
}

export default App;