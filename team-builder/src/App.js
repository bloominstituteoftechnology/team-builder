import React, { useState } from 'react';
import './App.css';
import MemberForm from "./components/MemberForm";
import Member from "./components/Member";

// the shape of the state that drives the form
const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

export default function App() {
  // const [member, setMember] = useState([]);

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
    };

    if (!newMember.name || !newMember.email || !newMember.role) return;

  };

  return (
    <div className="container">
     <MemberForm 
     values ={formValues}
     update = {updateForm}
     submit = {submitForm}
     />

     <Member />
    </div>
  );
}