import React from "react";

const Members = (props) => {
  const { members } = props;
  console.log(members);
  return (
    <div className="membersList">
      {props.members.map((member) => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;
