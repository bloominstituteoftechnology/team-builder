import React from "react";
import styled from "styled-components";



const MateCard = styled.div`
background: white;
opacity: .7;
font-size: 2rem;
width: 30%;
margin: 3%;
border-radius: 8px;
h3 {
    font-size:1.5rem;
}

`;

const TeamMember = props => {
  return (
    <div>
      {props.mates.map((teamMember, index) => {
        return (
          <MateCard key={index}>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.email}</h3>
            <h3>{teamMember.role}</h3>
          </MateCard>
        );
      })}
    </div>
  );
};
export default TeamMember;