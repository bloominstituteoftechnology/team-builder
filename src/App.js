import React, { useState } from 'react';
import './App.css';

function App() {
  //applying a useState hook and setting a state peoperty to members
 const [members, setMembers] = useState([]);

  const addMember = (e, name, email, role) => {
    e.preventDefault();

    //defining member. The id is predetermined by a timestamp
    const member = {
      id: Date.now(),
      name, 
      email,
      role
    }

    //What will apply changes to member
    setMembers([...members, member])
  }

  //return the components that will be displayed 
  // Form is the input that will receive information (email, name, role)
  // TeamList will display the input information from Form
  return(
    <div className = "Team">
      <h1>Team</h1>
      <Form addMember = {addMember}/>
      <TeamList members ={members}/>
    </div>
  )
}

export default App