import React from "react";

const Team = props => {
  return (
    <div className="team-list">
      {props.teams.map(team => (
        <div className="team" key={team.id}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;

// difference between map & forEach