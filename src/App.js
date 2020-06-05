import React, { useState } from 'react';
import TeamData from './TeamData';
import Form from './Form';
import './App.css';
// import styled from 'styled-components';

// const AppDiv = styled.div`
//   border: 2px dotted lightblue;
// `;

function App() {
  const members = TeamData;
  const [team, setTeam] = useState(members);
  return (
    <div className='App'>
      <Form />
      {members.map(member => {
        return <div>
          <h1>{member.name}</h1>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>;
      })}

    </div>
  );
}

export default App;
