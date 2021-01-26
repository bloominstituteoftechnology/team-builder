import React, { useState } from "react";
import "./App.css";
import TeamForm from "./Components/TeamForm";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};
function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, SetFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    SetFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return;
  };
  return (
    <div className="App">
      <TeamForm values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}
export default App;
