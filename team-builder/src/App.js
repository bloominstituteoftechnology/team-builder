import React, { useState } from 'react';

import Form from './Components/Form';
import TeamList from './Components/TeamList';
import data from './data'



function App() {

  const [members, setMembers] = useState(data);

  const addNewPerson = person => {
    setMembers([...members, person])
  }


  return (
    
    <div>

      <h1>Jashele's Team Builder</h1>

      <TeamList teamList={members} />

      <Form addNewPerson={addNewPerson} />

      </div>

  );
}

export default App;
