import React from "react";

const Team = props => {
  return (
    <div className="Team">
      {props.teammate.map(teammate => (
        <div className="teammate" key={teammate.id}>
          <h2>{teammate.name}</h2>
          <p>{teammate.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;