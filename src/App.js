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
  const [team, setTeam] = useState(fakeTeam);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.email || !newMember.role) return;
    
    
    setTeam([...team, newMember]);
    console.log(team)
        setFormValues(initialFormValues);
  }
  

  return (
    <div>
      <h1>Team members</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {team.map(member => {
        
        return (
          <div>
          <h2>{member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
