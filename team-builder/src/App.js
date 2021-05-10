import React, { useState } from 'react';
import Form from './components/Form.js';
import TeamList from './components/TeamList.js';

function App() {
  const [teamList, setTeamList] = useState([
    {
      Name: 'Joshua',
      Email: 'email@email.fuckthis',
      Position: 'failed web developer',
      id: 1,
    },
  ]);

  const addMember = (member) => {
    setTeamList([...teamList, {...member, id: Date.now() }]);
  };

  return (
    <div className="App">
      <Form addMember={addMember} />
      <TeamList teamList={teamList} />
    </div>
  );
}

export default App;
