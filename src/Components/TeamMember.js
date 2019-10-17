import React from "react";

const TeamMember = props => {
  return (
    <div>
      {props.mates.map((teamMember, index) => {
        return (
          <div key={index}>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.email}</h3>
            <h3>{teamMember.role}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default TeamMember;