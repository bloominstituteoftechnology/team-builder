import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Form from "./components/Form"

function App() {

  const initialFormValues = {
    username: "",
    email: "",
    role: "",
  }

  const [members, setMembers] = useState([])
  const [formValue, setFormValue] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValue({...formValue, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      username: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role,
    }
  }

  return (
    <div className="container">
      <h1>Form</h1>
        <Form
          values={formValue}
          updater={updateForm}
          submitter={submitForm}
        />

    </div>
  );
}

export default App;
