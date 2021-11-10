import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./form";

const teams = [
  {
    name: "Jennifer",
    email: "Jennifer@yahoo.com",
    role: "Front-End Developer",
  },
  { name: "Jennifer", email: "Jennifer@yahoo.com", role: "Back-End Developer" },
  { name: "Isabel", email: "Isabel@yahoo.com", role: "Full-Stack Developer" },
  { name: "Hope", email: "Hope@yahoo.com", role: "Project Manager" },
  { name: "Zoe", email: "Zoe@yahoo.com", role: "Designer" },
];

function App() {
  const [teamNames, setTeamNames] = useState(teams);
  const [values, setValues] = useState({ name: "", email: "", role: "" });
  const onSubmit = () => {
    setTeamNames([values, ...teamNames]);
    setValues({ name: "", email: "", role: "" });
  };
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  return (
    <div className="App">
      <Form values={values} change={onChange} submit={onSubmit} />
    </div>
  );
}

export default App;
