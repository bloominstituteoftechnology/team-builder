import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TeamMembers from './components/TeamMembers';

var data = [
  {
    id: 1,
    name: "Bob",
    email: "bob@gmail.com",
    role: "React Developer"
  }
];


function App() {
  const [teamList, setTeamList] = useState(data);

  const addTeamMember = person => {
    setTeamList([...teamList, person]);
  }

  return (

    <div className="App">
        <h1>Team Members</h1>
        <Form addTeamMember={addTeamMember}/>
        <TeamMembers teamList={teamList}/>
    </div>
  );
}

export default App;
