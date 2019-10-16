import React, {useState} from 'react';
import Form from './Components/Form';

import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState('')

  const submit = person => {
    setTeamMember(...teamMember, person)
  }
  return (
    <div className="App">
      <Form submit={submit}/>
    </div>
  );
}

export default App;
