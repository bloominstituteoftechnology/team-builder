import React, { useState } from "react";
import "./App.css";
// import ReactDOM from "react-dom";

import Form from "./components/Form";
import Member from "./components/Member";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Akak Almazbekova",
      email: "akak@gmail.com",
      role: "Student"
    }
  ]);

  const AddNewMember = member => {
    const newMembers = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMembers]);
  };

  return (
    <div className="App">
      <h1>Join</h1>
      <Form AddNewMember={AddNewMember} />
      <Member members={members} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
