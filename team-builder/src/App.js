import React, { useState } from 'react';
import './App.css';
import MemberForm from "./MemberForm";

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

export default function App() {
  const [member, setMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    let newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
  }

  return (
    <div className="App">
     <MemberForm 
     values ={formValues}
     update = {updateForm}
     submit = {submitForm}
     />
    </div>
  );
}