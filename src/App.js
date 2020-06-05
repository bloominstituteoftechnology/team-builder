import React, { useState } from 'react';
import TeamData from './TeamData';
import Form from './Form';
// import './App.css';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
`;

const FormDiv = styled.div`
  background-color: lightblue;
`;

function App() {
  const members = TeamData;
  const [team, setTeam] = useState(members);
  return (
    <AppDiv>
      <Form />
      {members.map(member => {
        return <FormDiv>
          <h1>{member.name}</h1>
          <p>Contact: {member.email}</p>
          <p>Title Role: {member.role}</p>
        </FormDiv>;
      })}

    </AppDiv>
  );
}

export default App;
