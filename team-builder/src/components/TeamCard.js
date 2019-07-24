import React from "react";


const TeamCard = (props) => {
  console.log('tcprops', props);


  return (
    <div className = "team-card">
      Name: {props.fName} {props.lName}
      Email: {props.email}
      Role: {props.role}
    </div>
  );
};

export default TeamCard;
