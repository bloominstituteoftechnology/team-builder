import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemberForm from "./Components/MemberForm";
import Members from "./Components/Members";

function App() {
  const [members, setMembers] = useState([
    {
      name: "Ryan Clark",
      email: "rbclark244@gmail.com",
      role: "Developer",
    },
  ]);

  const addNewMembers = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setMembers([...members, newMember]);
  };

  // const handleChanges = (event) => {
  //   console.log(event.target.value, "event!");
  //   setMembers({
  //     name: event.target.value,
  //     emaile: event.target.value,
  //     role: event.target.value,
  //   });
  // };
  // const submitForm = (event) => {
  //   event.preventDefault();
  //   props.addNewMember(members);
  //   setMembers({
  //     title: members.title,
  //     email: members.email,
  //     role: members.roll,
  //   });
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MemberForm
          addNewMembers={addNewMembers}
          // member={member}
          // setMembers={setMembers}
          // nameFunction={addName}
          // members={members}
          // submitForm={submitForm}
          // handleChanges={handleChanges}
        />
        <Members members={members} />
      </header>
    </div>
  );
}

export default App;
