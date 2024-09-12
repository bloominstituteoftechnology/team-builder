import React, {useState} from 'react';
import MemberForm from './Form';
import Member from './Member';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState({id: '1', name: 'Mitch', email: 'elderknudsen98@gmail.com', role: 'Front-end'})
  const addNewMember = (member) => {
    const newMember = {
        id: Date.now(),
        name: member.name,
        email: member.email,
        role: member.role
    };
}
  return (
    <div className="App">
      <MemberForm addNewMember={addNewMember} />
      <Member teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
