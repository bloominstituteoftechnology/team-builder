import React, { useState } from 'react';
import './App.css';
// import MembersList from './components/membersList.js';
import Member from './components/member.js'
import MemberForm from './components/newMemberForm.js';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      fname: "Jon",
      lname: "Addison",
      profession: "web developer",
      city: "New York"
    },
    {
    id:2,
    fname: "Ana",
    lname: "Tulea",
    city: "San Jose",
    profession: "WEB Developer"
    },
    {
      id: 3,
      fname: "Jony",
      lname: "Peterson",
      profession: "developer",
      city: "New Orleans"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname,
      city:member.city,
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
