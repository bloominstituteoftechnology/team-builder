import React, { useEffect, useState } from "react";
import Form from "./Form";
import "./App.css";
import axios from 'axios'

const initialTeamValue = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialTeamValue)
  const [errorText, setErrorText] = useState("");

  const updateForm = (inputName, inputValue) => {
    setTeamMembers({ ...teamMembers, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: teamMembers.name.trim,
      email: teamMembers.email.trim,
      role: teamMembers.role,
    };

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
    setErrorText('You must complete all fields')
    return
  }

    axios
      .post("fakeapi.com", newTeamMember)
      .then((res) => {
        setTeamMembers([res.data, teamMembers])
        setFormValues(initialTeamValue)
        setErrorText('')
      })
      .catch((err) => {
      console.error(err)
      })
    }

    useEffect(() => {
      axios.get("fakeapi.com").then((res) => setTeamMembers(res.data))
    })

  return (
    <div className="App">
      <h2>Hello World!</h2>
      <Form
        values={teamMembers}
        update={updateForm}
        submit={submitForm}
        errorText={errorText}
      />

      {teamMembers.map((team) => {
        return <Form key={team.id} details={team} />
      })}
    </div>
  );
}

export default App;
