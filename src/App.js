import React, { useState } from "react";
import MemberList from './UserData';

function App() {
  const membersData = [
    {id: 1, name: 'Britt', email: 'britt@brittcodes.com', role: 'Queen of Everything'},
    {id: 2, name: 'Angela', email: 'alasalle@llambda.com', role: 'Savior of the Baby Devs'}
  ]
  
  const [members, setMembers] = useState(membersData);
  
  const addMember = member =>{
    member.id = members.length + 1
    setMembers([...members, member])
  }
  return (
    <div className="container">
      <h1> The Llambda Llamas</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Join Us!</h2>
        </div>
        <div className="flex-large">
          <h2>Meet the Team</h2>
          <MemberList members={members}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
