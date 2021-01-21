import React from "react";

const Members = props => {
  return (
    <div className="member-list">
      {props.members.map((member, i) => (
        <div className="member" key={i}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;