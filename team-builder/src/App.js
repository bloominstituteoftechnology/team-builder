import React, { useState } from "react";
import MemberCard from "./components/MemberCard";
import NewMemberForm from "./components/NewMemberForm";

function App() {
  const [team, setNewMember] = useState([
    {
      id: 1,
      name: "Lee Gahyeon",
      email: "gahyeon@dreamcatcher.com",
      role: "Vocalist, Rapper",
    },
    {
      id: 2,
      name: "Kim Minji",
      email: "jiu@dreamcatcher.com",
      role: "Vocalist, Leader",
    },
  ]);

  const addNewMember = (member) => {
    setNewMember([...team, { ...member, id: Date.now() }]);
  };

  return (
    <div className="App">
      <NewMemberForm setNewMember={addNewMember} member={team} />
      <MemberCard team={team} />
    </div>
  );
}

export default App;
