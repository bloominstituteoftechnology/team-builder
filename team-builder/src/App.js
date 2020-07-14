import React, {useState} from 'react';

import './App.css';
import Form from './Form';
import TeamMember from './TeamMember';

function App (){
  const initialMemberList = [
    {
    name: 'Noah',
    id: 1,
    email: 'Noahbibb90@gmail.com',
    role: 'Full Stack Engineer'
    }
  ]
  const [member, setMembers] = useState(initialMemberList)
  const changeHandler = (newMember) => {
    setMembers([...member, newMember])
  }
  return (
    <div className = 'App'>
      <header className = 'App-header'>
        <h1>Team  Member!</h1>
      </header>
      <Form newMember = {changeHandler} />
      {member.map(member => {
        return(
          <TeamMember key = {member.id} details = {member}/>
        
        )
      })}
    </div>
  );
}

export default App;
