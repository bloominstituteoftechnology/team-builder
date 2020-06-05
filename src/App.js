import React, { useState } from 'react';
import TeamData from './TeamData';
import Form from './Form';
// import './App.css';
import styled from 'styled-components';
import peanutsBG from './peanutsBG.jpg';

const AppDiv = styled.div`
  text-align: center;
`;

const FormDiv = styled.div`
  width: 80%; 
  background-color: lightblue;
  box-shadow: 2px 2px darkgrey;
  margin: 0 auto;
`;

function App() {
  const members = TeamData;
  const [team, setTeam] = useState(members);
  return (
    <AppDiv>
      <h1>Team Peanuts</h1>
      <img src={peanutsBG} />
      <Form />
      {members.map(member => {
        return <FormDiv>
          <h2>{member.name}</h2>
          <p>Contact: {member.email}</p>
          <p>Title Role: {member.role}</p>
        </FormDiv>;
      })}

    </AppDiv >
  );
}

export default App;
