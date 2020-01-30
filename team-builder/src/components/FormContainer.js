import React from "react";
import Form from "./Form.js";


const Team = props => {
  return (
    <div>
      {props.team.map(team => (
        <div key={team.id}>
          <h2>{team.name}</h2>
          <h2>{team.email}</h2>
          <h2>{team.job}</h2>
        </div>
      ))}
    </div>
  );
};

export default Team;
