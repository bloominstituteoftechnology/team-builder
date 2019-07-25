import React, { useState } from "react";
import MemberList from './UserData';
import Form from './Form';

function App() {
  const membersData = [
    {id: 1, name: 'Britt', email: 'britt@brittcodes.com', role: 'Queen of Everything'},
    {id: 2, name: 'Angela', email: 'alasalle@llambda.com', role: 'Savior of the Baby Devs'}
  ]
  
  const [members, setMembers] = useState(membersData);
  
  const addToList = member =>{
    member.id = members.length + 1
    setMembers([...members, member])
  }
  return (
    <div className="container">
      <h1> The Llambda Llamas</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Join Us!</h2>
          <Form addToList={addToList}/>
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
