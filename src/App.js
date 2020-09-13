import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Data from './components/Data';
import Form from './components/Form';
import TeamMemberCard from './components/MemberCard';

function App() {
  const [teamMember, setTeamMember] = useState(Data);
  console.log(teamMember);

  const Wrapper = styled.div`
    text-align: center;
    background-color: black;
    font-family: tahoma;
  `;

  const Header = styled.header`
    padding: 2rem;
    font-size: 200%;
    color: white;
    text-shadow: 2px 2px 5px red;
`;

  const addNewTeamMember = (form) => {
    const formID = Data.length + 1; // Finds members total and adds new member to total count
    console.log('Form ID: ', formID);
    const newTeamMember = {
      id: formID,
      name: form.name,
      email: form.email,
      role: form.role,
      joined: form.joined
    }
    setTeamMember([...teamMember, newTeamMember]); //Searches through Data from teamMember & adds a new member
  }

  return (
    <Wrapper>
      <TeamMemberCard teamMembers={ teamMember } />
      <Header>
        Join Our Elite Team of Developers
      </Header>
      <Form addNewTeamMember={ addNewTeamMember } />
    </Wrapper>
  );
}

export default App;
