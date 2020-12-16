import './App.css';
import React, { useState } from "react";
import Form from "./form";

const defaultValues = {
  name: "",
  email: "",
  role: '',
};

function App() {

  const [formValues, setFormValues] = useState(defaultValues)
  const [savedFormInfo, setSavedFormInfo] = useState([]);

  const change = (evt) => {

    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {

    evt.preventDefault();
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trimEnd(), 
      role: '',
    }
    setSavedFormInfo([...savedFormInfo, newData])
    setFormValues(defaultValues);
 
  };

  return (
    <div className="App">
      <Form formValues={formValues} change={change} submit={submit}/>
    </div>
    
  );
}

export default App;
