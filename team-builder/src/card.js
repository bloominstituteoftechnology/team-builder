import React from "react";

const MemberCard = props => {
  return (
    <div>
      {props.member.map(member => {
        <div key={member.id}>
          <h1>{member.name}</h1>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>;
      })}
    </div>
  );
};

export default MemberCard;
