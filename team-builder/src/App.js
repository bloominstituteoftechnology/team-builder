import React, { useState } from "react";
import "./App.css";
import TeamMemberList from "./views/TeamMemberList";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([
    { name: "Jeff", age: "26", occupation: "Chef", favFood: "Pasta" },
    { name: "April", age: "20", occupation: "Jr Developer", favFood: "BBQ" },
    {
      name: "Devin",
      age: "43",
      occupation: "Marketing Director",
      favFood: "Prime Rib"
    },
    {
      name: "Maddie",
      age: "31",
      occupation: "Self - Employed",
      favFood: "Asparagus"
    }
  ]);

  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
    occupation: "",
    favFood: ""
  });
  const changeHandler = e => {};
  return (
    <div className="App">
      <TeamMemberList members={members} />
      <Form />
    </div>
  );
}

export default App;
