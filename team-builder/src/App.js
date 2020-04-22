import React from 'react';
import { useState } from 'react'
import Form from './Form'
import MemberMap from './MemberMap'

function App() {
  
const [teamMembers, setTeamMembers] = useState([{name:"", email:"", role: ""}]);

const addNewMember = (newlyAddedFormData) => {
  setTeamMembers([...teamMembers, newlyAddedFormData])
}

  return (
    <div>
      <Form addNewMember={addNewMember}/> 
      <MemberMap teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
