import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import AddMember from './components/AddMember'
import TeamList from './components/TeamList'
function App() {
  const [team, setTeam] = useState([])
  const addTeamMember = (name, role, email) => {
    let newTeamMember = {name, role, email}
    let newTeam = [...team, newTeamMember]
    setTeam(newTeam)
    console.log(newTeam)
  }


  return (
    <div className="App">
      <AddMember addTeamMember={addTeamMember}/>
      <TeamList teamList={team} />
    </div>
  );
}

export default App;
