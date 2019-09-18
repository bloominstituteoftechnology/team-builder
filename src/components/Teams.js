import React from 'react';
import styled from "styled-components";

const TeamsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
height: 20rem;
width: 100%;
background: blue;

`;

const Teams = props => {
  return (
    <TeamsContainer>
      {props.teams.map(team => (
        <div className="team" key={team.id}>
          <h2>{team.title}</h2>
          <p>{team.body}</p>
        </div>
      ))}
    </TeamsContainer>
  );
};

export default Teams;
