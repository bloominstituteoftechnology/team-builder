
import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import NewMember from './NewMember';





function App() {

  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers}/>
      <NewMember teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
