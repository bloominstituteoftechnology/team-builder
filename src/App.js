import React, {useState} from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/Form';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      name: "Indigo Richards",
      email: "indigorichards@lambda.com",
      role: "Lambda Student"
    },
    {
      name: "Jacqueline Omollo",
      email: "jacquelineomollo@lambda.com",
      role: "Team Leader"
    },
    {
      name: "Christina Gorton",
      email: "christinagorton@lambda.com",
      role: "Lambda Instructor"
    },
    {
      name: "Austin Allred",
      email: "austinallred@lambda.com",
      role: "Lambda CEO"
    }
  ])

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMember([...teamMember, newMember]);
  }
  return (
    <div className="App">
      <h1>My Teammates</h1>
      <Form addNewMember={addNewMember} />
      <TeamMember teamMember = {teamMember} />
    </div>
  );
}

export default App;
