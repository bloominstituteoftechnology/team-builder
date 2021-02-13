import React, { useState } from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/Form';
import styled from 'styled-components';

const AppStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

function App() {

  const initialTeamList = [
    {
      name: 'Mauricio',
      email: 'maurooren@gmail.com',
      age: 23,
      role: 'Fron-end'
    }
  ]

  const [teamList, setTeamList] = useState(initialTeamList)
  const [form, setForm] = useState({})

  return (
    <AppStyled>
      <Form />
      {
        teamList.map(e => <TeamMember member={e} />)
      }
    </AppStyled>
  );
}

export default App;
