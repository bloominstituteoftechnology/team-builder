import React, { useState, useEffect, } from 'react';
import { v4 as uuid } from 'uuid';
import TeamMemberForm from './TeamMemberForm.js'
import TeamMember from './TeamMember'
import './App.css';


const initialTeamMemberList = [
  {
  id: uuid(),
  username: "Samuel",
  email: "sam@samuelOden.com",
  role: "team leader",
  }
]

const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamMemberList})
}

const fakeAxiosPost = (url, { name, email, role }) => {
  const newTeamMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember})
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (name, value) => {
    setFormValues({...formValues,[name]: value,})
  }

  const submitForm = () => {
    let newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
    return;

    fakeAxiosPost("fakeapi.com", newTeamMember)
      .then((res) => {
        setTeamMembers([...teamMembers, res.data]);

      })
      .catch((err) => {
        // debugger;
        console.log(err);
      });

        setFormValues(initialFormValues)

    //  d) also on success clear the form
  };

  useEffect(() => {
    fakeAxiosGet("fakeapi.com").then((res) => setTeamMembers(res.data));
  }, []);

   return (
    <div className="container">
      <h1>Team Member List</h1>

      <TeamMemberForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

    {teamMembers.map((teamMember) => {
      return <TeamMember key={teamMember.id} details={teamMember}/>
    })}
    </div>
  );
}
