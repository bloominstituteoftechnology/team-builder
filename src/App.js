import React, { useEffect, useState } from "react";
import Form from "./Form";
import "./App.css";
import axios from './axios/index'
import TeamMembers from "./components/TeamMembers";

const initialTeamValue = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialTeamValue)
  const [errorText, setErrorText] = useState("");

  const resetFormFields = () => {
    setFormValues(initialTeamValue)
  }

  const updateForm = (inputName, inputValue) => {
    setFormValues(prev => {
      return {
        ...prev,
        [inputName]: inputValue
      }
    })
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    setTeamMembers([...teamMembers, newTeamMember])
    resetFormFields()
  }

    // if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
    // setErrorText('You must complete all fields')
    // return
  // }

    // axios
    //   .post("fakeapi.com", newTeamMember)
    //   .then((res) => {
    //     setTeamMembers([res.data, teamMembers])
    //     setFormValues(initialTeamValue)
    //     setErrorText('')
    //   })
    //   .catch((err) => {
    //   console.error(err)
    //   })
    // }

    // useEffect(() => {
    //   axios.get("fakeapi.com").then((res) => setTeamMembers(res.data))
    // })

  return (
    <div className="App">
      <h2>Hello World!</h2>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
        errorText={errorText}
      />
      <TeamMembers list={teamMembers} />
    </div>
  );
}

export default App;
