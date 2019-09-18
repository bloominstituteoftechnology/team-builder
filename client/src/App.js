import React, {useState} from 'react';
import './App.css';

import Form from "./components/Form";
import FormCard from "./components/FormCard";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Example Name",
      email: "Example Email",
      role: "Example Role"
    }
  ]);
  console.log(`This is members state from App.js`, members);
  
  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
        <Form addNewMember={addNewMember} />
        <FormCard members={members} />
    </div>
  );
}

export default App;
