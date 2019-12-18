import React from "react";

const Team = props => {
  const { setEdit, member, index } = props;

  return (
    <div className="team-member-btn-wrapper">
      <div className="team-member">
        <h3>Name: {member.name}</h3>
        <p>Email: {member.email}</p>
        <p>Role: {member.role}</p>
      </div>
      <button
        onClick={e => {
          setEdit({
            index: index,
            name: member.name,
            email: member.email,
            role: member.role
          });
          console.log("click");
        }}
        className="team-member-btn btn"
      >
        Edit
      </button>
    </div>
  );
};
export default Team;
