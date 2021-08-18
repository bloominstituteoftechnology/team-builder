import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormList from "./components/FormList";

function App() {
  const [members, setMembers] = useState([{}, {}]);

  return (
    <div className="App">
      <h1>Add Team Member</h1>

      <Form members={members} setMembers={setMembers} />
      <FormList members={members} />
    </div>
  );
}

export default App;
