import React from "react";
import styled from "styled-components";
const StyledList = styled.div`


`;

export default function List({ teamMembers }) {
  return (
    <StyledList>
      {teamMembers.map((member) => {
        return (
          <div className="member">
            <p>Name: {member.name}</p>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
          </div>
        );
      })}
    </StyledList>
  );
}
