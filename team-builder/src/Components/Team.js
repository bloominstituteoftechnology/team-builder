  
import React from "react";

const Team = (props) => {
  return (
    <div className="build-list">
      {props.team.map(Teammember => (
        <div className="build" key={Teammember.id}>
          <h2>{Teammember.Username}</h2>
          <p>{Teammember.email}</p>
          <p>{Teammember.role}</p>
        </div>
      ))}
    </div>
  );
};
export default Team;