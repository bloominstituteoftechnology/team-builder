import React from "react";


const TeamCard = (props) => {

  const { person } = props;


  return (
    <div className = "team-card">
      <p>Name: {person.name}</p>
      <p>Email: {person.email}</p>
      <p>Role: {person.role}</p>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default TeamCard;
