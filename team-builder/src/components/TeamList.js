import React, { useState } from 'react';

const TeamList = (props) => {
  const teamMembers = props.teamMembers;
  console.log(teamMembers)


  return (
    <div>{teamMembers.map((e, i) => <h1 key={i}>{e}</h1>)}</div>
  );
};

export default TeamList;
