import React, { useState } from 'react';
import './App.css';
import Member from './components/member.js'
import MemberForm from './components/newMemberForm.js';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      fname: "Allen",
      lname: "Do",
      profession: "SL",
      email: "allen@lambda.com"
    },
    {
    id:2,
    fname: "Amber",
    lname: "Robinson",
    email: "amber@lambda.com",
    profession: "Web Devoleper"
    },
    {
      id: 3,
      fname: "Jasmine",
      lname: "Terry",
      profession: "TL",
      email: "jasmine@lambda.com"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname,
      email:member.email,
      profession:member.profession
    };
    setMembers([...members, newMember]);
  };

  const delMember = id => {
    const newArray = members.filter(member => {
      return member.id !== id;
    });
    setMembers(newArray);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container' >
        <MemberForm  addMemberFn={addMember} />

        <Member membersList={members} delMemberFn={delMember} />
        </div>
      </header>
    </div>
  );
}

export default App;