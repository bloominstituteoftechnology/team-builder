import React, { useState } from "react";

import "./App.css";
import MemberCard from "./Components/MemberCard/MemberCard";
import Form from "./Components/Form/Form";

function App() {
  const [membersList, setMembersList] = useState([
    {
      firstName: "James",
      lastName: "Leyden",
      age: 23,
      gender: "Male",
      isEditing: true
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    isEditing: false
  });

  const addMember = member => setMembersList([...membersList, member]);

  const editMember = editedMember => {
    let memberToEditIndex = membersList.findIndex(
      member => JSON.stringify(member) === JSON.stringify(memberToEdit)
    );

    let newMembers = membersList.map((member, index) => {
      if (index === memberToEditIndex) {
        return editedMember;
      }
      return member;
    });
    setMembersList(newMembers);
  };

  return (
    <div className="App">
      <Form
        addMember={addMember}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        editMember={editMember}
      />

      <div className="card-wrapper">
        {membersList.map((member, index) => (
          <MemberCard
            member={member}
            setMemberToEdit={setMemberToEdit}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
