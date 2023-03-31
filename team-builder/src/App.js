import React, { useState } from 'react';

import Form from './components/Form';
import TeamList from './components/TeamList';

function App() {
  const [ teamMemberList, setTeamMemberList] = useState([])

  return (
    <div className="App">
      <Form teamMemberList={teamMemberList} setTeamMemberList={setTeamMemberList} />
      <TeamList teamMemberList={teamMemberList} setTeamMemberList={setTeamMemberList} />
    </div>
  );
}

export default App;