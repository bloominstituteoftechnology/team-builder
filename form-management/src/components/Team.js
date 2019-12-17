import React from "react";

const Team = props => {
  //   console.log(props.team);
  const { setEdit, member } = props;
  return (
    <div className="team-member">
      <div>
        <h3>{member.name}</h3>
        <p>{member.email}</p>
        <p>{member.role}</p>
        <button
          onClick={e => {
            setEdit({
              name: member.name,
              email: member.email,
              role: member.role
            });
            console.log("click");
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
// Team();
export default Team;
