import React from "react";

export default function Members(props) {
  const { name, email, role } = props;
  return (
    <div className="memberContainer">
      <h3>{`${name}`}</h3>
      <p>Email: {`${email}`}</p>
      <p>Role: {`${role}`}</p>

      <h3>Lance </h3>
      <p>email: thedragon@trainer.com</p>
      <p>Role: Leader of the Final Four</p>
    </div>
  );
}
