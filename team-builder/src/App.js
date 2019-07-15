import React, { useState } from "react";
import "./App.css";
import TeamMemberList from "./views/TeamMemberList";
import Form from "./components/Form";

function App() {
  let id = 4;
  const [members, setMembers] = useState([
    {
      id: 0,
      name: "Jeff",
      age: "26",
      occupation: "Chef",
      favFood: "Pasta",
      email: "test123@yahoo.com"
    },
    {
      id: 1,
      name: "April",
      age: "20",
      occupation: "Jr Developer",
      favFood: "BBQ",
      email: "turlesarepeopletoo@hotmail.com"
    },
    {
      id: 2,
      name: "Devin",
      age: "43",
      occupation: "Marketing Director",
      favFood: "Prime Rib",
      email: "blahblah@gmail.com"
    },
    {
      id: 3,
      name: "Maddie",
      age: "31",
      occupation: "Self - Employed",
      favFood: "Asparagus",
      email: "yoo@gmail.com"
    }
  ]);
  const [edit, setEdit] = useState({
    edit: false,
    member: {}
  });

  const addMember = e => {
    setMembers([...members, e]);
    console.log(id)
  };
  const editMember = name => {
    const member = members.find(mem => mem.name === name);
    setEdit({ edit: true, member: member });
    // console.log("edit", member)
  };
  return (
    <div className="App">
      <TeamMemberList members={members} editMember={editMember} />
      <Form addMember={addMember} edit={edit} members={members}/>
    </div>
  );
}

export default App;
