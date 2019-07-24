import React from "react";
import TeamCard from "./TeamCard"

export default function TeamList(props) {

  const teamArray = props.teamData;
  console.log('team array', teamArray);


  return (
    <div className="team-list">
      { teamArray.map((member, index) =>
        <TeamCard
          key={index}
          fName={member.fName}
          lName={member.lName}
          email={member.email}
          role={member.role}
         />
      ) }
    </div>
)
}
