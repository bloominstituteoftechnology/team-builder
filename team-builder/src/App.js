import React from 'react';
import './App.css';
import { useState } from 'react'
import MemberForm from './components/Form';
//import TeamList from './components/TeamList';
import Table from './components/Team';

function App() {

 const TeamList = [
    {
        id: 1,
        name:'Kenya Alston',
        email:'kenya@gmail.com',
        Role:'Front-End Engineer',
    },
    {
        id: 2,
        name:'Luke Skywalker',
        email:'skywalker45@yahoo.com',
        Role:'Back-End Engineer',
    },

    {
        id: 3,
        name:'Benjamin Franklin',
        email:'bfranklin@gmail.com',
        Role:'UX Design',
    }
]

  const [members, setMembers] = useState(TeamList)

  const addMembers = member => {
    member.id = members.length +1
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <h1>Team Build</h1>
      <div>
        <h2>View Members</h2>
        <Table members={members}/>
      </div>
      <div>
        <h2>Add Members</h2>
        <MemberForm addMembers={addMembers} />
      </div>
    </div>
  );

}

export default App;
