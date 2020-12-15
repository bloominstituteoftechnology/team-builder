import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const { teamMemberList, setTeamMemberList } = useState([]);
  const { formValues, setFormValues } = useState({
    name: "",
    email: "",
    role: "",
  });

  return (
    <div className="App">
      <h1>Team Builder App!</h1>
      <Form
        TeamMemberList={teamMemberList}
        SetTeamMemberList={setTeamMemberList}
      />
    </div>
  );
}

export default App;
