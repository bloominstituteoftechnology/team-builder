import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import Form from "./components/Form";
import Card from "./components/Card";

const initialTeam = [
  {
    id: 1,
    name: "Jenny",
    role: "rapper",
    nationality: "New Zealand"
  },
  {
    id: 2,
    name: "Lisa",
    role: "dancer",
    nationality: "Thailand"
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeam)
  const [memberToEdit, setMemberToEdit] = useState()

  const addNewMember = (member) => {
    if (memberToEdit) {
      let editedTeam = teamMembers
      const memberToEditIndex = editedTeam.findIndex(currentMember => currentMember.id === member.id)
      editedTeam[memberToEditIndex] = member
      console.log(editedTeam)
      setTeamMembers(editedTeam)
      setMemberToEdit(undefined)
    } else {
      setTeamMembers([...teamMembers, {id: teamMembers.length + 1, ...member }])
    }
  }

  const editMember = (id) => {
    setMemberToEdit(teamMembers.find((member) => member.id === id))
  }

  return (
    <Container>
      <div>
        {teamMembers.map((member) => <Card key={member.id} {...member} memberToEdit={memberToEdit} editMember={editMember} />)}
      </div>
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} />
    </Container>
  );
}

export default App;
