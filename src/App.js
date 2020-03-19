import React, { useState } from "react";
//components
import Form from "./components/Form";
import MemberCard from "./components/MemberCard";
//css
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const addMember = member => {
    setMembers([...members, member]);
  };

  const editMember = editedMember => {
    const newMembers = members.map(member =>
      member.key === editedMember.key ? editedMember : member
    );
    setMembers(newMembers);
    setMemberToEdit();
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form
        addMember={addMember}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <MemberCard memberList={members} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
