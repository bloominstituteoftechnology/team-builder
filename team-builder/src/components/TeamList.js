import React from "react";
import TeamCard from "./TeamCard"

export default function TeamList(props) {


  const teamArray = props.teamData;



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
