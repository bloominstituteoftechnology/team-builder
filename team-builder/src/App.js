import React, {useState} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TeamForm from './Components/TeamForm';
import Team from "./Components/Team";


function App() {
  const [team, setTeam]= useState([{
    
    Username: "Shya",
    email: "shya@gmail.com",
    role: "Web developer"
  }]);

  const addNewMember = Teammember => {
    const newTeamMember ={
      id: Date.now(),
      name: Teammember.Username,
      email: Teammember.email,
      role:Teammember.role
    }
    const newmemberArray = [...team, newTeamMember];
    setTeam(newmemberArray);
  }
  return (
    <div className="App">
      <h1>My Team Mates</h1>
      <TeamForm addNewMember={addNewMember}/>
      <Team team={team} />

    </div>
  );
}

export default App;
