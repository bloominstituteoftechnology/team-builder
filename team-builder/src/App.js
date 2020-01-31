import React, { useState } from "react";
import "./App.css";
import Form from './Form';
import Members from './Members'

function App() {

  const [teamList, setTeamList] = useState([]);

  function addNewMember (prop) {

    const member = {

      id: Date.now(),
      name: prop["name"],
      email: prop["email"],
      role: prop["role"],
    };

    setTeamList([...teamList, member]);
  }

  function deleteMember (id) {

    const memberFilter = teamList.filter(member =>{
      return member.id !== id;
    });

    setTeamList(memberFilter);
  }

  return (
    <div className="App">
      <Form team={addNewMember} />
      <Members memberList={teamList} deleteMember={deleteMember} />
    </div>
  );
}
export default App;