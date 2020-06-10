import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TeamData from './TeamData';
import Form from './Form';
import styled from 'styled-components';
import peanutsBG from './peanutsBG.jpg';
import MemberEditForm from './MemberEditForm';

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
  const [members, setMembers] = useState(TeamData);
  // const [memberToEdit, setMemberToEdit] = useState(TeamData);

  return (
    <Router>
      <Route exact path='/'>
        <AppDiv>
          <h1>Team Peanuts</h1>
          <img src={peanutsBG} alt='7 members of the Charles Schulz Peanuts baseball team posed for a group photo wearing ball caps and gloves on a clear summer day' />
          <Form members={members} setMembers={setMembers} />
          {members.map(member => {
            return (<FormDiv >
              <h2>{member.name}</h2>
              <p>Contact: {member.email}</p>
              <p>Title Role: {member.role}</p>
              <Link to='/editform'>
                <button>Edit</button>
              </Link>
            </FormDiv>
            )
          })}


        </AppDiv >
      </Route>
      <Route path='/editform' component={MemberEditForm} />
    </Router >
  );
}

export default App;
