import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TeamList from './components/TeamList';
import styled from 'styled-components';

import data from './data';

const DIV = styled.div`
border: 1px solid blue;
border-radius: 10px;
margin: 15px 0 15px 0;
width: 50%;
display: flex;
align-content: center;
justify-content: center;
background-color: navy;
color: white;
`

const Border = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

function App() {
  const [members, setMembers] = useState(data);

  const addNewTeam = member => {
    setMembers([...members, member]);
  }

  return (
    <Border className="App">
      {/* <h2></h2> */}
      <TeamList addNewTeam={addNewTeam}/>
      <DIV>
        <Form teamList={members} />
      </DIV>
    </Border>
  );
}



export default App;
