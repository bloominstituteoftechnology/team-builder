import React from "react";

const Member = props => {
  return (
    <div>
      <p>{props.card.name}</p>
      <p>{props.card.email}</p>
      <p>{props.card.role}</p>
    </div>
  );
};

export default Member;
