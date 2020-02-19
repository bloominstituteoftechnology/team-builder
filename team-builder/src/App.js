import React, { useState } from 'react';
import './App.css';
// import Data from './components/data/Data';
import FormTeam from './components/form/FormTeam';
import Member from './components/member/Member';

function App(props) {
  const [team, setTeam] = useState([
    {
      name: 'Hamid',
      email: 'hamid.azizy@hotmail.com',
      role: 'Frontend Engineer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setTeam([...team, newMember]);
  };
  return (
    <div className='App'>
      <FormTeam addNewMember={addNewMember} />
      <Member team={team} />
    </div>
  );
}

export default App;
