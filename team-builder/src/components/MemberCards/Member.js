import React from "react";

const Member = props => {
  return (
    <div>
      <p>Name: {props.card.name}</p>
      <p>Email: {props.card.email}</p>
      <p>Role: {props.card.role}</p>
    </div>
  );
};

export default Member;
