import React, { useState, useEffect } from "react";
import Member from "./Member";
import MemberForm from "./MemberForm";
import axios from "../axios";
import './App.css';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
};

export default function App() {
  const [members, setMembers] = useState([]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...initialFormValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newMember.name || !newMember.email || !newMember.role) {
      return;
    }

  axios
    .post("fakeapi.com", newMember)
    .then((res) => {
      setMembers([res.data, ...members]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      debugger;
    });
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setMembers(res.data));
  }, []);

  return (
    <div className="container">
      <header className="Form App">
      
      <MemberForm

      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {members.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
      </header>
    </div>
  );
}

