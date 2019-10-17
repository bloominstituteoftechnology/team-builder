import React, {useState} from 'react';
import TeamForm from './Components/TeamForm';
import TeamMember from './Components/TeamMember';

import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([{
      name: '',
      email: '',
      role:''
    }]);

  const submit = person => {
    setTeamMember([...teamMember, person])
  }
  return (
    <div className="App">
      <TeamForm submit={submit}/>
      <TeamMember mates={teamMember}/>
    </div>
  );
}

export default App;
