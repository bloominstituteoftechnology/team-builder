import React, { useState } from 'react';
import Form from './components/forms/Form';
import Member from './components/members/Member';

function App() {
  const [members, newMember] = useState([
    {
      id: '',
      name: '',
      role: '',
      email: ''
    }
  ]);

  const addMember = (setMember) => {
    newMember([...members, setMember])
  }
  
  return (
    <div className="App">
      <h1>Member Registration Form</h1>
      <Form addMember={addMember}/>
      <Member members={members}/>
    </div>
    
  );
}

export default App;