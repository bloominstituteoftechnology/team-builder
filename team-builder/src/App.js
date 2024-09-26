import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Member from "./components/Member";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([]);

  const submitMember = member => setMembers([...members, member]);
  const update = uMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === uMember.id) {
          return uMember;
        }
        return member;
      })
    ]);

  console.log("members", members);

  return (
    <div className="App">
      {members.map((member, i) => (
        <Member member={member} key={i} update={update} />
      ))}
      <Form add={submitMember} />
    </div>
  );
}

export default App;

