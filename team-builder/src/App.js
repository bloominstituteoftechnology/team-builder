import React from "react";
import { useState } from "react";
import Form from "./Form.js";
import "./App.css";

function App() {
  const [member, setMember] = useState("");

  return (
    <div className="App">
      <Form member={member} setMember={setMember} />
    </div>
  );
}

export default App;
