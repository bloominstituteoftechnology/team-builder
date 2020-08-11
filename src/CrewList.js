import React from "react";

// The MembersList component maps through the 'members' data to display it as a list on the screen.

const crewList = props => {
  return (
    <div>
      {props.crew.map(crew => (
        <div key={crew.id}>
          <h2>Name: {crew.name}</h2>
          <p>Email: {crew.email}</p>
          <p>Role: {crew.role}</p>
        </div>
      ))}
    </div>
  );
};

export default crewList;