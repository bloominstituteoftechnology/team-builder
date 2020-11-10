import React from "react";
import styled from "styled-components";

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  width: 60%;
  margin-left: 10px;
  border: 1px solid black;
  background-color: slateblue;
  box-shadow: 2px 2px 20px #333;
  color: whitesmoke;
  text-shadow: 1px 1px black;
  font-size: 1.5rem;
`;

export default function TeamMembers(props) {
  const { teamData, setMemberEdit } = props;
  return (
    <>
      <TeamMemberCard>
        <h1>Team Members</h1>
        {teamData.map((member, index) => {
          return (
            <div key={index}>
              <h2>{member.name}</h2>
              <div>{member.role}</div>
              <div>{member.email}</div>
              {/* <button onClick={(e) => setMemberEdit(member)}>Edit</button> */}
            </div>
          );
        })}
      </TeamMemberCard>
    </>
  );
}
