import React from "react";

const Team = (props) => {
  return (
    <div className='build-list'>
      {props.team.map((Teammate) => (
        <div className='build' key={Teammate.id}>
          <h3>{Teammate.id}</h3>
          <h2>{Teammate.username}</h2>
          <p>{Teammate.email}</p>
          <p>{Teammate.role}</p>
          
        </div>
      ))}
    </div>
  );
};
export default Team;
