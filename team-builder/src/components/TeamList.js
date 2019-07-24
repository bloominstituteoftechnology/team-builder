import React from "react";
import TeamCard from "./TeamCard"

export default function TeamList(props) {
  console.log(props);
  const teamArray = props.teamData;
  console.log('team array', teamArray);


  return (
    <div className="team-list">
      <div className="team-list-wrapper">
      { teamArray.map((member, index) =>
        <TeamCard
          key={index}
          name={member.name}
          email={member.email}
          role={member.role}
         />
      ) }
      </div>
    </div>
)
}
