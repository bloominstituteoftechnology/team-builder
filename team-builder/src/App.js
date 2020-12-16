import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

const initialValues = {
  name: "",
  email: "",
  role: "",
};
function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };
  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form values={formValues} update={updateForm} />
    </div>
  );
}
export default App;
