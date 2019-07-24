import React from "react";


const TeamCard = (props) => {


  return (
    <div className = "team-card">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default TeamCard;
