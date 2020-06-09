import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Comp/Form'
import Members from './Comp/Members'


function App() {
  const [members, setMembers] = useState([
    {
      id:"",
      name:"",
      email:"",
      role:"",
    }
  ])
  const addNewMember = memberObjParam => {
    setMembers([...members, { ...memberObjParam, id: Date.now() }])
  }

  return (
    <div className="app">
      <h1>Member List Maker</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
