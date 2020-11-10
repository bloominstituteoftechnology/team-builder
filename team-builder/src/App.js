import React, { useState } from "react";
import Form from "./components/Form";
import TeamMembers from "./components/TeamMembers";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import "./App.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`;

function App() {
  //Team Member Data State
  const [teamMembers, setTeamMembers] = useState([
    {
      id: uuid(),
      name: "",
      role: "",
      email: "",
    },
  ]);

  //Keep track of members to edit
  const [memberToEdit, setMemberToEdit] = useState({
    id: "",
    name: "",
    role: "",
    email: "",
  });

  //Submit handler to push form values into teamMembers
  const submit = (formValues) => {
    setTeamMembers([...teamMembers, formValues]);
  };

  const setMemberEdit = (member) => {
    setMemberToEdit(member);
  };

  const editMember = (formValues) => {
    teamMembers.map((member) => {
      if (member.id === formValues.id) {
        member.name = formValues.name;
        member.role = formValues.role;
        member.email = formValues.email;
      }
    });

    setMemberToEdit({ id: "", name: "", role: "", email: "" });
    setTeamMembers([...teamMembers]);
  };

  return (
    <AppContainer>
      <TeamMembers teamData={teamMembers} setMemberEdit={setMemberEdit} />
      <Form
        submit={submit}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
    </AppContainer>
  );
}

export default App;
