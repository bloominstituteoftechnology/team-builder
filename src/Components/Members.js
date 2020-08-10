import React, { useState } from "react";

const Members = (props) => {
  const [members] = props;
  console.log(members);
  return (
    <div key={members.id}>
      <h2>{members.name}</h2>
      <p>{members.email}</p>
      <p>{members.role}</p>
    </div>
  );
};

export default Members;
