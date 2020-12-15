import React from "react";

function Employee(props) {
  const { details } = props;

  // if (!details) {
  //   return <p>Loading....</p>;
  // }

  return (
    <div>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}

export default Employee;
