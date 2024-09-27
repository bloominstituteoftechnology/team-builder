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

  const initialFormValue = {
    name: '',
    email: '',
    age: '',
    role: ''
}

  const [teamList, setTeamList] = useState(initialTeamList)
  const [form, setForm] = useState(initialFormValue)

  const handleInputChange = (name, value) => {
    setForm( {...form, [name]: value} )
  }

  const handleSubmitForm = () => {
    setTeamList([...teamList, {...form, id: uuid()}])
    setForm(initialFormValue)
  }

  return (
    <AppStyled>
      <Form input={handleInputChange} submit={handleSubmitForm} initial={form} />
      {
        teamList.map(e => <TeamMember key={e.id} member={e} />)
      }
    </AppStyled>
  );
}

export default App;
