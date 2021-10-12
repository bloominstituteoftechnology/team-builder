import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
const StyledH1 = styled.h1`
  margin-top: 3%;

  text-transform: capitalize;
  text-align: center;
  padding: 0 0.5rem;
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 50vh;
  overflow-y: auto;

  .members-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .member {
      padding: 3%;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      margin: 2%;
      p {
        margin-top: 0;
      }
    }
  }
`;

export default function List({ teamMembers }) {
  return (
    <div style={{ width: "50%" }}>
      <StyledH1>The Dev Team</StyledH1>
      <StyledList>
        <div className="members-container">
          {teamMembers.map((member) => {
            return (
              <div key={nanoid(4)} className="member">
                <p key={nanoid(4)}>Name: {member.name}</p>
                <p key={nanoid(4)}>Role: {member.role}</p>
                <p key={nanoid(4)}>Email: {member.email}</p>
              </div>
            );
          })}
        </div>
      </StyledList>
    </div>
  );
}
