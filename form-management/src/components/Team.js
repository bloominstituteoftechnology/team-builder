import React from "react";

const Team = props => {
  //   console.log(props.team);
  const { setEdit, member, index } = props;
  return (
    <div className="team-member-btn-wrapper">
      <div className="team-member">
        <h3>{member.name}</h3>
        <p>{member.email}</p>
        <p>{member.role}</p>
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
    </div>
  );
};
// Team();
export default Team;
