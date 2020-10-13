import React, { useState, useEffect } from 'react';
import TeamMemberForm from './TeamMemberForm.js'
import TeamMember from './TeamMember'
import './App.css';
import axios from 'axios';

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    let newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeamMember.username || !newTeamMember.email || !newTeamMember.role)
    return;
    axios.post("http://localhost:3000", newTeamMember)
    .then((res) => {
      setTeamMembers([...teamMembers, res.data])
      setFormValues(initialFormValues)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3000").then((res) => setTeamMembers(res.data))
  }, [])

  return (
    <div className="container">
      <h1>Team Member Creator</h1>

      <TeamMemberForm
      values={formValues}
      udate={updateForm}
      submit={submitForm}
      />

    {teamMembers.map((teamMember) => {
      return <TeamMember key={TeamMember.id} details={TeamMember}/>
    })}
    </div>
  );
}
