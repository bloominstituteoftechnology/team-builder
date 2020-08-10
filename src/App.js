import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemberForm from "./Components/MemberForm";

function App() {
  const [members, setMembers] = useState([
    { name: "Ryan", email: "rbclark", role: "dev" },
  ]);
  const addNewMember = (member) => {
    setMembers([...members, { ...member, id: Date.now() }]);
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
        <a>Learn React</a>
        <MemberForm
          addNewMember={addNewMember}
          // nameFunction={addName}
          // members={members}
          // submitForm={submitForm}
          // handleChanges={handleChanges}
        />
      </header>
    </div>
  );
}

export default App;
