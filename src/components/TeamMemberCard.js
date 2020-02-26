import React from "react";
import styled from "styled-components";

const TeamCard = styled.div `
    border: 2px black solid;
    margin: 10%;
    padding: 3%;
`

const TeamMemberCard = props => {
  return (
    <div className="team-card">
      {props.teamCards.map(card => (
        <TeamCard className="card" key={card.id}>
          <h2>{card.name}</h2>
          <p>Email: {card.email}</p>
          <p>Role: {card.role}</p>
        </TeamCard>
      ))}
    </div>
  );
};

export default TeamMemberCard;