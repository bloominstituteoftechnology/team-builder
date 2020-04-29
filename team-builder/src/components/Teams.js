import React from "react";

const Teams = ({teamMembers}) => {

  return (
    <div>
        {teamMembers.map(team => 
        <div key={team.id}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </div>
        )}
    </div>
  ); 
};


export default Teams;