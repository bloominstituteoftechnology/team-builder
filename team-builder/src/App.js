import './App.css';
import React, { useState, useEffect } from "react";
import Form from "./Form";

const memberList = [
  {username: "", email: "", role: ""},
];

const newFormValues = {
  name: "",
  email: "",
  role: "",
}

export default function App() {
  const [members, setMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(newFormValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  };
  const submitForm = event => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.username.trim(),
      role: formValues.username.trim(),
    };
    setMembers(member.concat(newMember));
    setFormValues(initialFormValues);
  };
  
  return (
    <div className="container">
      <h1>Member List</h1>
      (members.map((member) => {
        return (
          <Member key={member.id} details={member}/>
        )
      ))
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm} />
     
    </div>
  );
}

export default App;
