import FormList from "./components/FormList";
import Form from "./components/Form";
import React, {useState} from "react";
import styled from "styled-components";

const AppDiv = styled.div`
width: 800px;
margin: 0 auto;
display: flex;
flex-direction:column;
align-items: center;
`


function App(){

  const[members, setMembers] = useState([
    {},
    {}
  ]);

  console.log(members);

  return(
  <AppDiv className="App">
    <h1>Add Team Member</h1>

    <Form members={members} setMembers={setMembers} />
    <FormList members={members} />

  </AppDiv>
  )};

export default App;