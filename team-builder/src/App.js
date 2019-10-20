import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Member from './Components/Member';

function App() {
  const [members, setMembers] = useState([])

  return (
    <div className="App">
      <Form setMembers={setMembers} members={members} />
      {members.map((member, i) => <Member member={member} key={i} />)}
    </div>
  );

}
export default App;