import React from "react";

const Member = props => {
  return (
    <>
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </>
  );
};

export default Member;
