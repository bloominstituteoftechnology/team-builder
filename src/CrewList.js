import React from "react";

 // The MembersList component maps through the 'crewMembers' data to display it as a list on the screen.

const CrewList = props => {
  return (
    <div>
      {props.crewMembers.map(member => (
        <div key={member.id}>
          <h2>Name: {member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default CrewList;