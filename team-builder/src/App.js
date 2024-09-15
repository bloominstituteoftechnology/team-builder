import React, {useState} from 'react';
import './App.css';
import Forms from './components/Form';
import Team from './components/Team';
import Data from './components/Data.js';



function App() {

    const [teamMembers, setTeamMembers] = useState(Data)

    const ourTeam = (teams) => {

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
        <h2> Want to be a part of our rad team?</h2>
        <Forms newTeam ={ourTeam}/>
        </div>

    </div>

  );
}

export default App;