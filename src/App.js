import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Form from "./components/Form";
import MemberForm from "./components/MemberForm";
import './App.css'; 

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Carlos Banks",
      email: "cb@lambda.com",
      role: "Developer"
    }
  ]);

  const addNewMember = member => {
    const newMember = setMembers([...members, member]);
  };


  return (
    <div className="App">
      <h1>Add your team members!</h1>
      <MemberForm addNewMember={addNewMember} />
      <h1>See your teammates here!</h1>
      <Form members={members} />
    </div>
  );
}

export default App;
