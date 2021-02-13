import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
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
      id: uuid(),
      name: 'Mauricio',
      email: 'maurooren@gmail.com',
      age: 23,
      role: 'Frontend'
    }
  ]

  const [teamList, setTeamList] = useState(initialTeamList)
  const [form, setForm] = useState({})

  const handleInputChange = (name, value) => {
    setForm( {...form, [name]: value} )
  }

  return (
    <AppStyled>
      <Form input={handleInputChange} />
      {
        teamList.map(e => <TeamMember key={e.id} member={e} />)
      }
    </AppStyled>
  );
}

export default App;
