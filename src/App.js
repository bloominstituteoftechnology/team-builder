import React, { useState } from "react";
// import Form from ",/Form"
import './App.css';

const fakeTeam = [
  {
    name: "Jon",
    email: "jon@name.com",
    role: "backend engineer",
  }
  {
    name: "Bob",
    email: "bob@name.com",
    role: "frontend engineer",
  }
  {
    name: "Tom",
    email: "tom@name.com",
    role: "designer",
  }
]

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [team, setTeam] = useState([])
  
  return (
    <div>
      <h1>Team members</h1>
      {/* <Form/> */}
      <h2>name</h2>
      <p>email</p>
      <p>role</p>
    </div>
  );
}

export default App;
