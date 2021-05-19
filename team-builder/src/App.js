import logo from "./logo.svg";
import "./App.css";
import Members from "./components/Members";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [initialFormValue, setInitialFormValue] = useState("");
  const [formValues, setFormValues] = useState(initialFormValue);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue }); ///What is this used for? why is inputName in brackets followed by a colon? is it because it's adding key value pairs?
  };

  const submitForm = () => {
    /////Do I need this function?
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role)
      return;
  };

  return (
    <div className="container">
      <Form formValues={formValues} update={updateForm} submit={submitForm} />
      <h1>Here is the members list</h1>
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
