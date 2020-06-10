import React, { useState } from 'react';
import Form from "./components/Form";
import MemberList from "./components/MemberList"
import './App.css';

function App() {
    const [members, setMember] = useState([{name: "", email: "", role: ""}])
    const setNewMember = (member) => {
      setMember([...members, member])
      console.log("App member:" , member);
    }
    return (
    <div className="App">
        <Form setNewMember={setNewMember} />
        <MemberList members={members} />
    </div>
  );
}

export default App;
