import React from "react";

const CurrentMembers = props => {

  return (
    <div>
      {props.team.map(member => (
        <div className="members-box" key={member.id}>
          <h4 className="members-text">{member.name}</h4>
          <p className="members-text">{member.linkedIn}</p>
          <p className="members-text">{member.github}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrentMembers;
