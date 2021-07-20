import React, { useState, useEffect } from "react";
import Form from "./Form"
import './App.css';

const fakeTeam = [
  {
    name: "Ann",
    email: "ann@name.com",
    role: "backend engineer",
  },
  {
    name: "Bob",
    email: "bob@name.com",
    role: "frontend engineer",
  },
  {
    name: "Tom",
    email: "tom@name.com",
    role: "designer",
  },
  {
    name: "Jon",
    email: "jon@name.com",
    role: "nocho maker",
  },
  {
    name: "Klove",
    email: "klove@name.com",
    role: "me",
  }
]

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [team, setTeam] = useState([]);

  useEffect(() =>{
    return setTeam(fakeTeam)
  }, []);

  console.log(team);

  return (
    <div>
      <h1>Team members</h1>
      <Form/>
      <h2>{team.name}</h2>
      <p>Email{team.email}</p>
      <p>Role{team.role}</p>
    </div>
  );
}

export default App;
